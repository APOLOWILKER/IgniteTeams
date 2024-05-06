
import { Button } from "@components/Button";
import { EmptyList } from "@components/EmptyList";
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { groupsGetAll } from "src/storage/group/groupsGetAll";
import { Container } from "./styles";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new')
  }

  async function fetchGroups() {
    try{

      const data = await groupsGetAll();
      setGroups(data);

    } catch (error){
      console.log(error);
    }
  }

// para carregar a function fetch
useEffect(() => {
  // o que executar...
  // sempre carrega depois da renderização do component
  
  
  console.log("executou UseEffect");
  
  fetchGroups();
  }, []
  // array diz a quantidade de vezes que ele tem que executar
  // vazio 1 vez
);


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
