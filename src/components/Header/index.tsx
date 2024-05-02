import logoImg from '@assets/logo.png';
import React from "react";
import { BackButton, BackIcon, Container, Logo } from "./styles";

type PropsHeader = {
  showBackButton?: boolean;
}

export function Header({showBackButton = false}){
  return (
    <Container>
      {
        showBackButton &&
        <BackButton>
          <BackIcon />
        </BackButton>
      }
      
      <Logo source={logoImg}/>
    </Container>
  )
}