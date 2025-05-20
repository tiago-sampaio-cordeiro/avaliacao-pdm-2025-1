import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { Link } from "expo-router";

type TasksProps = {
  id: number;
  title: string;
  priority: "Alta" | "Média" | "Baixa";
};

export default function TaskItem({ id, title, priority }: TasksProps) {
  const { showActionSheetWithOptions } = useActionSheet();

  const handleLongPress = () => {
    const options = ["Marcar como concluída", "Excluir", "Cancelar", " "];
    const destructiveButtonIndex = 1;
    const cancelButtonIndex = 2;
    const falseButtonIndex = 3;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
        title: title,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          console.log("Concluída:", title);
        } else if (buttonIndex === 1) {
          console.log("Excluída:", title);
        } else if (buttonIndex === 2) {
          console.log("Cancelado");
        } else if (buttonIndex === 3) {
          console.log("False");
        }
      }
    );
  };

  return (
    <Link
      href={{
        pathname: "/Tarefa",
        params: { id: id.toString(), title },
      }}
      asChild
    >
      <Pressable onLongPress={handleLongPress} style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text
          style={[
            styles.priority,
            {
              color:
                priority === "Alta"
                  ? "red"
                  : priority === "Média"
                  ? "orange"
                  : "green",
            },
          ]}
        >
          {priority}
        </Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    borderLeftWidth: 5,
    backgroundColor: "#eee",
    padding: 15,
    borderRadius: 5,
  },
  card: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 5,
    marginEnd: 50,
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  priority: {
    fontSize: 14,
    color: "#888",
  },
});
