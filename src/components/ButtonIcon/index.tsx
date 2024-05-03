import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";
import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";

type PropsIconButton = TouchableOpacityProps & {
   icon: keyof typeof MaterialIcons.glyphMap;
   type?: ButtonIconTypeStyleProps;
}

export function ButtonIcon({icon, type = 'PRIMARY', ...rest}: PropsIconButton) {
  return (
    <Container {...rest}>
      <Icon 
        name={icon}
        type={type}
      />
    </Container>
  )
}