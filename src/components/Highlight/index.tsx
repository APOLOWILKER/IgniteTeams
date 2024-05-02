import React from "react";
import { Container, SubTitle, Title } from "./styles";

type PropsHighlight = {
  title: string;
  subTitle: string;
}

export function Highlight({title, subTitle}: PropsHighlight){
  return(
    <Container>
      <Title>
        {title}
      </Title>

      <SubTitle>
        {subTitle}
      </SubTitle>
    </Container>
  );
}