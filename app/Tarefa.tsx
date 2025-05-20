import { View, Text, StyleSheet } from "react-native";
import { useGlobalSearchParams } from "expo-router";

export default function TaskDetailScreen() {
  const params = useGlobalSearchParams();
  const { id, title } = params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes da Tarefa</Text>
      <Text>ID: {id}</Text>
      <Text style={styles.task}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    margin: 20,
    backgroundColor: "#f9f9f9",
    width: "90%",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 200,
    color: "brown",
  },
  task: {
    fontSize: 25,
    marginBottom: 10,
    color: "green",
  },
});
