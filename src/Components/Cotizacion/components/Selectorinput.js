import React from 'react';
import styled from 'styled-components';

export const Inputselector = (props) => {

    const { handleChange, label } = props;

  return (
    <>

<LabelCustom className="TextoLabel" >{label}</LabelCustom>

      <SelectCont>
      

        <select name='servicio' onChange={handleChange} >
            <option value='Registro e Incorporacion de negocios'>Registro e Incorporacion de negocios</option>
            <option value='Contabilidad para negocios'>Contabilidad para negocios</option>
            <option value='Contabilidad para personas naturales' >Contabilidad para personas naturales</option>
            <option value='Contabilidad para personas juridicas' >Contabilidad para personas juridicas</option>
        </select>
      </SelectCont>
    </>
  )
}


export default Inputselector

const SelectCont = styled.div`
  display: flex;
  height: 35px;
  margin-top: 20px;
  justify-self: center;
  width: 250px;
`;

const LabelCustom = styled.label`
    text-transform: uppercase;
    position: relative;
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: -5px;
    text-shadow: 2px 2px solid #000;
`;