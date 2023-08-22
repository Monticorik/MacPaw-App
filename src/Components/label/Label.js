import './label.scss';

const Label = (props) => {
    const {text, color = "red",} = props;

    return(
        <div className="label"
             data-color={color}>
            <span>{text}</span>
        </div>
    )
}

export default Label;