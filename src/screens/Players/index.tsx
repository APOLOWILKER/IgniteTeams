import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Container } from "./styles";


export function Players() {
  return (
    <Container>
      <Header 
        showBackButton
      />
      <Highlight 
        title="Nome da Turma"
        subTitle="Adicione a galera e separe os times"
      />

      <Button
        title="Remover Turma"
        type="SECONDARY"
      />
    </Container>
  )
}