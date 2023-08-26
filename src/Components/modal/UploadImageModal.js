import { useState, useRef} from "react";
import useCatServices from "../../services/CatServices";
import PropTypes from "prop-types";

import { CloseButton } from "../buttons/Buttons";

import './uploadImageModal.scss';
import noFoto from '../../resources/img/no-foto.svg';

const UploadImageModal = ({isOpen, closeModal}) => {
    const {uploadImage, error, clearError} = useCatServices();
    const [image, setImage] = useState(null);
    const [isFormSubmit, setFormSubmit] = useState(false);
    const [isResponseGoted, setResponceGot] = useState(false);

    const input = useRef(null);

    const uploadImageHandler = (event) => {
        const userImage = event.target.files[0];
        clearError();
        setFormSubmit(false);
        setResponceGot(false);
        setImage(userImage);
        
    };

    const onClose = () => {
        input.current.value = null;
        setFormSubmit(false);
        setResponceGot(false);
        setImage(null);
        closeModal();
    };

    const onUploadImage = (event) => {
        event.preventDefault();
        setFormSubmit(true);
        uploadImage(image)
            .then(() => {
                setFormSubmit(false);
                setResponceGot(true);
            })
            .catch(() => {
                setFormSubmit(false);
                setResponceGot(true);
            });
    };

    return isOpen ? (
        <div className="upload_image modal">
            <CloseButton
                close={onClose}/>
            <form className="upload_image_form"
                onSubmit={onUploadImage}>
                <div className="form_text">
                    <h1>Upload a .jpg, .png or .gif Cat Image</h1>
                    <span>Any uploads must comply with the <a href="https://thecatapi.com/privacy">upload guidelines</a> or face deletion.</span>
                </div>
                <label>
                    <img src={image ? URL.createObjectURL(image) :
                                            noFoto} 
                        alt='upload cat'/>
                    <span className={`input_placeholder ${image ? 'hide' : ''}`}>
                          <strong>Drag here</strong> your file or <strong>Click here</strong> to upload
                    </span>
                    <input  type="file" 
                            accept=".jpeg, .jpg, .png, .gif"
                            ref={input}
                            onChange={uploadImageHandler}/>    
                </label>
                <span className="user_image_name">{image ? `Image File Name: ${image.name}` : 'No file selected'}</span>
                <button className={image && !isResponseGoted ? '' : 'hide'}  
                        type="submit"
                        disabled={isFormSubmit}>
                            <Loader
                                visible={isFormSubmit}/>
                            {isFormSubmit ? 'uploading' : 'upload photo'}
                </button>
                <div className={`upload_log ${isResponseGoted ? '' : 'hide'}`}>
                    <i className={`icon_${error ? 'fail' : 'ok'}`}></i>
                    <span>{error ? 'No Cat found - try a different one' : 'Thanks for the Upload - Cat found!'}</span>
                </div>
            </form>
        </div>
    ) : null;
};

UploadImageModal.propTypes = {
    isOpen: PropTypes.bool, 
    closeModal: PropTypes.func
};

const Loader = ({visible}) => {
    return (
        <div className={`loader_wrapper ${visible ? '' : 'hide'}`}>
            <div className="loader">
                <div className="loader">
                    <div className="loader">
                    </div>
                </div>
            </div>
        </div>
    );
};

Loader.propTypes = {
    visible: PropTypes.bool
};

export default UploadImageModal;