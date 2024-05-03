import { TextInputProps } from "react-native";
import { Container } from "./styles";




export function InputText({...rest}: TextInputProps) {
  return(
    <Container 
      {...rest} 
    />
  )
}