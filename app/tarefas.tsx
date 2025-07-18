import { useEffect, useState } from "react";
import { View, StyleSheet, FlatList,Text } from "react-native";
import { Link } from "expo-router";
import TaskItem from "../components/TaskItem";
import { mockTasks, Task } from "../service/mockTasks";
import { title } from "process";

export default function TasksScreen() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    console.log("Carregando tarefas...");
    setTimeout(() => {
      setTasks(mockTasks);
      console.log(
        "Tarefas carregadas:",
        mockTasks.map((t) => t.title).join(", ")
      );
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link
            href={{
              pathname: "/tarefa",
              params: {
                id: item.id.toString(),
                title: item.title,
              },
            }}
            style={{ marginBottom: 10 }}
          >
            <TaskItem
              id={item.id}
              title={item.title}
              priority={item.priority}
            />
          </Link>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: "bold",
    color: "brown", 
  }
});
