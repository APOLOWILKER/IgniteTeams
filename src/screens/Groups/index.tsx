
import { Button } from "@components/Button";
import { EmptyList } from "@components/EmptyList";
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { useState } from "react";
import { FlatList } from "react-native";
import { Container } from "./styles";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

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
        contentContainerStyle={groups.length === 0 && 
          {flex: 1,}
        }
        ListEmptyComponent={() => (
          <EmptyList
            message="Nenhuma turma encontrada, cadastre a primeira Turma"
          />
        )}
      />

      <Button 
        title="Criar Nova Turma"
        onPress={handleNewGroup}
      />

    </Container>
  );
}
