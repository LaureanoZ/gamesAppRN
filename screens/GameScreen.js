import { StyleSheet, Text, View } from "react-native"
import { Title } from "../components/Title"

export const GameScreen = () => {
  return (
    <View style= {styles.screen}>
      <View>
      <Title>Opponent's Guest</Title>
      <Text>Higher or lower?</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 24
  },

})