import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { EmptyList } from "@components/EmptyList";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { InputText } from "@components/Input";
import { PlayersCard } from "@components/PlayersCard";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { FlatList } from "react-native";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";


type RouteParams = {
  group: string;
}

export function Players() {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState([]);

  const route = useRoute();
  const { group } = route.params as RouteParams;

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
      />
        <ButtonIcon 
        icon="add"
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