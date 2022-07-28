import styled from 'styled-components';

export const InputCont = styled.div`
    height: 35px;
    width: 300px;
    @media (min-width: 300px) and (max-width: 999px) {
        height: 23px;
        top: -8px;
    }
`;

export const LabelStyled = styled.label`
    text-transform: uppercase;
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: -5px;
    text-shadow: 2px 2px solid #000;
`;

export const InputFormStyled = styled.input`
    width: 100%;
    background-color: #EFEFEF;
    border-radius: 10px;
    outline: none;
    
    @media (min-width: 300px) and (max-width: 700px) {
              
    }
`;