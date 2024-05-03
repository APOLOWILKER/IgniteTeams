import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { InputText } from "@components/Input";
import { PlayersCard } from "@components/PlayersCard";
import { useState } from "react";
import { FlatList } from "react-native";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";


export function Players() {
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState(['Apolo'])

  return (
    <Container>
      <Header 
        showBackButton
      />
      <Highlight 
        title="Nome da Turma"
        subTitle="Adicione a galera e separe os times"
      />
      <Form>
      <InputText 
        placeholder="Nome da pessoa"
        autoCorrect={false}
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
      />
      

      <Button
        title="Remover Turma"
        type="SECONDARY"
      />
    </Container>
  )
}