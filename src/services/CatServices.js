import useHttp from "../hooks/http.hook";

const useCatServices = () => {
    const {loading, error, request, clearError} = useHttp();
    const _apiBase = 'https://api.thecatapi.com/v1/';
    const _apiKey = 'api_key=e807a068-7ac5-4fc5-9c73-9e2c858d1264';
    const _subId = 'The-greatest-user-ever';

    const getAllBreeds = async () => {
        const res = await request(`${_apiBase}breeds`);
        return res.map(_transformBreeds);
    };

    const getAllImages = async ({limit = 1, page = 0, order = 'RANDOM', type ='jpg,png', breedId = ''}) => {
        if(breedId){
            order = 'ASC';
        }

        const res = await request(`${_apiBase}images/search?limit=${limit}&page=${page}&order=${order}&mime_types=${type}&breed_ids=${breedId}&${_apiKey}`);
        return res.map(_transformImages);
    };

    const getVotings = async ({page = 0, limit = 100, order = 'DESC'}) => {
        const res = await request(`${_apiBase}votes?page=${page}&limit=${limit}&order=${order}&${_apiKey}`);

        return res.map(_transformVoting);
    };

    const getFavouritings = async ({page = 0, limit = 100, order = 'DESC'}) => {
        const res = await request(`${_apiBase}favourites?page=${page}&limit=${limit}&order=${order}&${_apiKey}`);

        return res.map(_transformVoting);
    };

    const setVote = async ({vote = 1, imageId}) => {
        const body = {"image_id": imageId,
                      "sub_id": _subId,
                      "value": vote};
        const res = await request(`${_apiBase}votes?${_apiKey}`, 'POST', undefined, JSON.stringify(body));

        return res;
    };

    const setFavourite = async ({imageId}) => {
        const body = {"image_id": imageId,
                      "sub_id": _subId};
        const res = await request(`${_apiBase}favourites?${_apiKey}`, 'POST', undefined, JSON.stringify(body));

        return res;
    };

    const _transformBreeds = (breed) => {
        return {
            id: breed.id,
            name: breed.name,
            src: `https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`,
            description: breed.description,
            temperament: breed.temperament,
            origin: breed.origin ,
            weight: breed.weight.metric + ' kgs',
            lifeSpan: breed.life_span + ' years',
        };
    };

    const _transformImages = (image) => {
        return {
            id: image.id,
            src: image.url,
        };
    };

    const _transformVoting = (vote) => {
        return {
            id: vote.id,
            createdTime: vote.created_at.replace(/[T]|(:\d+\.\d+\w+)/gi, ' '),
            value: vote.value === 1 ? 'like' : vote.value === 0 ? 'dislike' : 'favourite',
            imageId: vote.image.id,
            imageSrc: vote.image.url,
        };
    };

    return {loading, getAllBreeds, getAllImages, getVotings, getFavouritings, setVote, setFavourite};
};

export default useCatServices;