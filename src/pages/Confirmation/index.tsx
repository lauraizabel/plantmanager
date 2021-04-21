import React from "react";

import { View, Text, StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";
import Button from "../../components/Button";

function Confirmation() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>😄</Text>
        <Text style={styles.title}>Prontinho</Text>
        <Text style={styles.subtitile}>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Text>
        <View style={styles.footer}>
          <Button title="Confirmar" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 30,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.heading,
    textAlign: "center",
    color: colors.heading,
    marginTop: 24,
  },
  subtitile: {
    fontSize: 17,
    paddingHorizontal: 10,
    fontFamily: fonts.text,
    textAlign: "center",
    color: colors.heading,
    marginTop: 24,
  },
  emoji: {
    fontSize: 78,
  },
  footer: {
    width: "100%",
    marginTop: 42,
    paddingHorizontal: 50,
  },
});

export default Confirmation;
