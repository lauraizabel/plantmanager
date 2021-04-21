import React from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import colors from "../../../styles/colors";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

function Button({ title, ...props }: ButtonProps) {
  return (
    <View>
      <TouchableOpacity style={styles.button} activeOpacity={0.8} {...props}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 42,
    height: 56,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
  },
});

export default Button;
