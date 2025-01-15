import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./styles";

export const Form: React.FC = () => {
  const navigate = useNavigate();
  
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const handleClickSubmit = () => {
    navigate("/newPage", {
      state: {
        name: name,
        age: age,
        email: email,
        address: address,
      },
    });
  };
  return (
    <Styled.ContainerForm>
      <Styled.Form>
        <Styled.WrapperField>
          <Styled.LabelForm className="label-name">Nome: </Styled.LabelForm>
          <Styled.InputForm
            className="label-name"
            onChange={(e) => setName(e.target.value)}
          />
        </Styled.WrapperField>

        <Styled.WrapperField>
          <Styled.LabelForm className="label-age">Idade: </Styled.LabelForm>
          <Styled.InputForm
            className="label-age"
            onChange={(e) => setAge(e.target.value)}
          />
        </Styled.WrapperField>

        <Styled.WrapperField>
          <Styled.LabelForm className="label-email">email: </Styled.LabelForm>
          <Styled.InputForm
            className="label-email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Styled.WrapperField>

        <Styled.WrapperField>
          <Styled.LabelForm className="label-address">
            Endereço:{" "}
          </Styled.LabelForm>
          <Styled.InputForm
            className="label-address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </Styled.WrapperField>

        <Styled.ButtonForm type="submit" onClick={handleClickSubmit}>
          Enviar
        </Styled.ButtonForm>
      </Styled.Form>
    </Styled.ContainerForm>
  );
};
