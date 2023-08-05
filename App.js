import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { RegistrationScreen, LoginScreen, PostsScreen } from "./src/screens";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/bg.jpg")}
        style={styles.backgroundImage}
      >
        <LoginScreen />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: 0.3,
    lineHeight: "normal",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    cover: "cover",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
