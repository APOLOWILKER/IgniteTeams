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
import { useEffect, useRef, useState } from "react";
import { Alert, FlatList, TextInput } from "react-native";
import { PlayerStorageDTO } from "src/storage/players/PlayerStorageDTO";
import { playerAddByGroup } from "src/storage/players/playerAddByGroup";
import { playerGetByGroupAndTeam } from "src/storage/players/playerGetByGroupAndTeam";
import { playerRemoveByGroup } from "src/storage/players/playerRemoveByGroup";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";


type RouteParams = {
  group: string;
}

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState('');
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  const newPlayerNameInputRef = useRef<TextInput>(null)

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

      newPlayerNameInputRef.current?.blur(); // tirar o foco do input e fecha o teclado
      // Keyboard.dismiss(); // Para fechar o teclado

      setNewPlayerName(''); // limpar o input
      fetchPlayersByTeam(); // chamo de novo para atualizar a lista
      
    } catch(error){
      if(error instanceof AppError) {
        Alert.alert('Nova pessoa', error.message)
      } else {
        Alert.alert('Nova pessoa', 'Não foi possível adicionar a pessoa.')
        console.log(error);
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await playerGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);

    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possível carregar os jogadores filtrados.')
    }
  }


  async function handleRemovePlayer(playerName: string) {
    try {
      await playerRemoveByGroup(playerName, group);
      fetchPlayersByTeam();

    } catch (error) {
    console.log(error);
    Alert.alert('Erro', 'Não foi possível remover a pessoa.')
    }
  }

  useEffect(() => {
    // ...
    fetchPlayersByTeam();
  },[team]); // a dependência é o que cause mudança e faz o useEffect ser chamado novamente...

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
          inputRef={newPlayerNameInputRef} // tirar o foco do input
          placeholder="Nome da pessoa"
          autoCorrect={false} // para não fazer correção
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          onSubmitEditing={handleAddPlayer} // utiliza o button de enviar do teclado do celular
          returnKeyType="done"
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
        keyExtractor={item => item.name}
        renderItem={({ item}) => (
          <PlayersCard 
            name={item.name}
            onRemove={() => handleRemovePlayer(item.name)}
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