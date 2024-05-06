import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { EmptyList } from "@components/EmptyList";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { InputText } from "@components/Input";
import { PlayersCard } from "@components/PlayersCard";
import { useRoute } from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import { useState } from "react";
import { Alert, FlatList } from "react-native";
import { playerAddByGroup } from "src/storage/players/playerAddByGroup";
import { playersGetByGroup } from "src/storage/players/playersGetByGroup";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";


type RouteParams = {
  group: string;
}

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState('');
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState([]);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert('Nova pessoa', 'Informe o nome da pessoa para adicionar.');
    }
    
    const newPlayer = {
      name: newPlayerName,
      team,
    }

    try{

      await playerAddByGroup(newPlayer, group);
      const players = await playersGetByGroup(group);
      console.log(players);
      
    } catch(error){
      if(error instanceof AppError) {
        Alert.alert('Nova pessoa', error.message)
      } else {
        Alert.alert('Nova pessoa', 'Não foi possível adicionar a pessoa.')
        console.log(error);
      }
    }

  }

  return (
    <Container>
      <Header 
        showBackButton
      />

      <Highlight 
        title={ group }
        subTitle="Adicione a galera e separe os times"
      />

      <Form>
        <InputText 
          placeholder="Nome da pessoa"
          autoCorrect={false} // para não fazer correção
          onChangeText={setNewPlayerName}
        />
        
        <ButtonIcon 
          icon="add"
          onPress={handleAddPlayer}
        />
      </Form>

      <HeaderList>
        <FlatList 
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <Filter 
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumberOfPlayers>
          {players.length}
        </NumberOfPlayers>
      </HeaderList>

      <FlatList 
        data={players}
        keyExtractor={item => item}
        renderItem={({ item}) => (
          <PlayersCard 
            name={item}
            onRemove={() => {}}
          />
        )}
        ListEmptyComponent={() => (
          <EmptyList 
            message="Não há pessoas Nesse Time!"
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1}
        ]}
      />
      

      <Button
        title="Remover Turma"
        type="SECONDARY"
      />
    </Container>
  )
}