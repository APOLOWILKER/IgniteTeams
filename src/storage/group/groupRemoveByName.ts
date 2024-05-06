import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "../storageConfig";
import { groupsGetAll } from "./groupsGetAll";

export async function groupRemoveByName(groupNameDeleted: string) {
  try {
    const storedGroups = await groupsGetAll();
    const filteredGroup = storedGroups.filter(group => group !== groupNameDeleted);

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(filteredGroup));
    // deletando os player do grupo 
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupNameDeleted}`);



  } catch (error) {
    throw error; // jogando o erro para frente
  }
}