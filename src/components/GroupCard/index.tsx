import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

type PropsGroupCard = TouchableOpacityProps & {
  title: string;
}

export function GroupCard({title, ...rest}: PropsGroupCard) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  )
}