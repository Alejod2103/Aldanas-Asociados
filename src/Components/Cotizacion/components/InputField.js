import { InputCont,
    LabelStyled,
    InputFormStyled } from './InputStyles.js';

const InputField = (props) => {
const { handleChange, label, name, type, value } = props;
return (
    <>
        <LabelStyled className="TextoLabel" htmlFor={name}>{label}</LabelStyled><br/>
            <InputCont>
                <InputFormStyled type={type} onChange={handleChange} value={value} name={name} />
            </InputCont>
    </>
)
}


export default InputField;