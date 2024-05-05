import logoImg from '@assets/logo.png';
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { BackButton, BackIcon, Container, Logo } from "./styles";

type PropsHeader = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }){
  const navigation = useNavigation()

  function handleGoBack(){
    navigation.navigate('groups')
  }

  return (
    <Container>
      {
        showBackButton &&
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      }
      
      <Logo source={logoImg}/>
    </Container>
  )
}