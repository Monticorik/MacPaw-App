import useHttp from "../hooks/http.hook";

const useCatServices = () => {
    const {loading, error, request, clearError} = useHttp();
    const _apiBase = 'https://api.thecatapi.com/v1/';
    const _apiKey = 'api_key=e807a068-7ac5-4fc5-9c73-9e2c858d1264';
    const _limit = 5;

    const getAllBreeds = async () => {
        const res = await request(`${_apiBase}breeds`);
        console.log('getAllBreeds');
        return res.map(_transformBreeds);
    };

    const getAllImages = async (limit = _limit, page = 0, order='ASC', type = 'jpg,png', breedId = '' ) => {
        const res = await request(`${_apiBase}images/search?limit=${limit}&page=${page}&order=${order}&mime_types=${type}&breed_ids=${breedId}&${_apiKey}`);
        console.log('getAllImages');
        return res.map(_transformImages);
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

    return {loading, getAllBreeds, getAllImages};
};

export default useCatServices;