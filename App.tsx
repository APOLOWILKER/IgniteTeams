import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";

import { Loading } from "@components/Loading";
import { Players } from "@screens/Players";
import { StatusBar } from "react-native";

export default function App() {
  // logic charging fronts - asynchronously
  const [ fontsLoaded ] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle={"light-content"}
        backgroundColor={"transparent"}
        translucent
      />
   
      {/* { fontsLoaded ? <NewGroup /> : <Loading /> } */}
      {/* { fontsLoaded ? <Groups /> : <Loading /> } */}
      { fontsLoaded ? <Players /> : <Loading /> }
    </ThemeProvider>
  );
}
