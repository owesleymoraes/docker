import React from "react";
import * as Styled from "./styles";
import { useLocation } from "react-router-dom";

interface RegisterProps {
  name: string;
  age: string;
  email: string;
  address: string;
}

export const SubmitForm = () => {
  const location = useLocation();

  const registrationData = location.state as RegisterProps;
  return (
    <Styled.ContainerSubmit>
      <Styled.TitlePage>Cadastro realizado com sucesso:</Styled.TitlePage>
      <Styled.LabelSubmit> Nome: {registrationData.name} </Styled.LabelSubmit>
      <Styled.LabelSubmit> Idade: {registrationData.age} </Styled.LabelSubmit>
      <Styled.LabelSubmit>Email: {registrationData.email} </Styled.LabelSubmit>
      <Styled.LabelSubmit>
        Endereço: {registrationData.address}
      </Styled.LabelSubmit>
    </Styled.ContainerSubmit>
  );
};
