import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

type ButtonProps = {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
};

export default function CustomButton({
  title,
  onPress,
  backgroundColor = "#007AFF",
  textColor = "#fff",
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor }]}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
