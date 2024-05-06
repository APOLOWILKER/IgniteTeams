import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { InputText } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import React, { useState } from "react";
import { Alert } from "react-native";
import { groupCreate } from "src/storage/group/groupCreate";
import { Container, Content, Icon } from "./styles";


export function NewGroup() {
  const [group, setGroup] = useState('')

  const navigation = useNavigation();

  async function handleNewGroup(){
    try{

    if(!group.trim()) {
      return Alert.alert('Novo Grupo', 'Informe o nome da turma.')
    }

    await groupCreate(group) // armazenando grupo localmente
    navigation.navigate('players', { group })

    } catch (error){
      if(error instanceof AppError) {
        Alert.alert("Novo Grupo", error.message)
      } else {
        Alert.alert("Novo Grupo",'Não foi possível criar um novo grupo.')
        console.log(error);
      }
    }
}

  return (
    <Container>
      <Header showBackButton/>

      <Content>
        <Icon />
        <Highlight 
          title="Nova Turma"
          subTitle="Crie uma nova turma para adicionar os jogadores"
        />

        <InputText 
         placeholder="Nome da Turma"
         onChangeText={setGroup}
        />

        <Button 
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
        />
      </Content>

    </Container>
  )
}