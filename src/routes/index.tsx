import { NavigationContainer } from '@react-navigation/native'
import { View } from "react-native"
import theme from "src/theme"
import { AppRoutes } from "./app.routes"


export function Routes() {
  return (
    <View style={{ flex: 1, backgroundColor: theme.COLORS.GRAY_600}}>
     <NavigationContainer>
      <AppRoutes />
     </NavigationContainer>
    </View>

  )
}