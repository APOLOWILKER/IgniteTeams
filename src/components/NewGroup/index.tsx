import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import React from "react";
import { Container, Content, Icon } from "./styles";


export function NewGroup() {
  return (
    <Container>
      <Header showBackButton/>

      <Content>
        <Icon />
        <Highlight 
          title="Nova Turma"
          subTitle="Crie uma nova turma para adicionar os jogadores"
        />

        <Button 
          title="Criar"
        />
      </Content>

    </Container>
  )
}