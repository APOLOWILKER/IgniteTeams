import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { InputText } from "@components/Input";
import { Container, Form } from "./styles";


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
      <Form>
      <InputText 
        placeholder="Nome da pessoa"
        autoCorrect={false}
      />
      <ButtonIcon 
        icon="add"
      />

      </Form>

      <Button
        title="Remover Turma"
        type="SECONDARY"
      />
    </Container>
  )
}