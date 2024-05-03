import { Container, Message } from "./styles";


type MessageProps = {
  message: string;
}

export function EmptyList({message}: MessageProps) {
  return(
    <Container>
      <Message>
        { message }
      </Message>
    </Container>
  );
}
