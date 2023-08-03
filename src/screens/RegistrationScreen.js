import { Formik } from "formik";
import { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image style={styles.image} />
      <View style={styles.add}>
        <Image
          style={styles.iconAdd}
          source={require("../../assets/icon-add.png")}
        />
      </View>
      <Text style={styles.mainTitle}>Реєстрація</Text>
      <Formik
        initialValues={{ login: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Логін"
              onChangeText={handleChange("login")}
              onBlur={handleBlur("login")}
              value={values.login}
            />
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            <TextInput
              style={{ ...styles.input, marginBottom: 27 }}
              placeholder="Пароль"
              secureTextEntry={true}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            <Pressable style={styles.button} onPress={handleSubmit}>
              <Text style={{ color: "#fff", fontSize: 16 }}>
                Зареєстуватися
              </Text>
            </Pressable>
          </View>
        )}
      </Formik>
      <Text style={styles.link}>Вже є акаунт? Увійти</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: "100%",
    minHeight: 549,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
  },
  image: {
    position: "absolute",
    transform: [{ translateY: -60 }],
    width: 120,
    height: 120,
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
  },
  add: {
    position: "absolute",
    transform: [{ translateY: 20 }, { translateX: 60 }],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 12,
  },
  iconAdd: {
    width: 16,
    height: 16,
  },
  mainTitle: {
    fontSize: 30,
    fontWeight: "500",
  },
  form: {
    paddingTop: 33,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  input: {
    display: "flex",
    width: "100%",
    fontSize: 16,
    height: 50,
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 10,
  },
  button: {
    display: "flex",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  link: {
    marginTop: 16,
    fontSize: 16,
    color: "#1B4371",
  },
});

export default RegistrationScreen;
