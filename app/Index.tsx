import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas Prioritárias</Text>

      <Link href={"/tarefas"} style={styles.button}>
        <Text style={styles.buttonText}>Ver Tarefas</Text>
      </Link>

      <Link href={"/Adicionar"} style={styles.button}>
        <Text style={styles.buttonText}>Adicionar Tarefa</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: { fontSize: 30, fontWeight: "bold", marginBottom: 40, color: "brown" },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: "center",
    width: "80%",
    textAlign: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
