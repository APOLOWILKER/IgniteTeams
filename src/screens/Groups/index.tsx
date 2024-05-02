
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Container } from "./styles";

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight
        title={"Turmas"} // não tem diferença
        subTitle="Jogue com a sua Turma"
      />
    </Container>
  );
}
