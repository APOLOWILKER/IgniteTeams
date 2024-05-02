
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { useState } from "react";
import { FlatList } from "react-native";
import { Container } from "./styles";

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Galera da Rocket', 'Amigos', 'Familia', 'Star Wars Fans'])


  return (
    <Container>
      <Header />
      <Highlight
        title={"Turmas"} // não tem diferença
        subTitle="Jogue com a sua Turma"
      />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <GroupCard 
            title={item} 
          />
        )}
      />

    </Container>
  );
}
