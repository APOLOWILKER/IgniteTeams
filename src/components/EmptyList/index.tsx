import { Container, Message } from "./styled";


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
