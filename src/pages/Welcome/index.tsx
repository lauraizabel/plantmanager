import React from "react";

import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

import { Feather } from "@expo/vector-icons";

import wateringImg from "../../assets/watering.png";
import { useNavigation } from "@react-navigation/core";

function Welcome() {
  const navigation = useNavigation();
  const handleStart = () => navigation.navigate("UserIdentification");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {"\n"} suas plantas de {"\n"} forma fácil
        </Text>
        <Image source={wateringImg} style={styles.image} resizeMode="contain" />

        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas{"\n"} plantas. Nós cuidamos de lembrar
          você sempre que precisar.
        </Text>

        <View>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={handleStart}
          >
            <Feather name="chevron-right" style={styles.buttonIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    color: colors.heading,
    textAlign: "center",
    marginTop: 12,
    fontFamily: fonts.heading,
    lineHeight: 34,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  image: {
    width: Dimensions.get("window").width * 0.7,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 42,
    height: 56,
    width: 56,
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 32,
  },
});

export default Welcome;
