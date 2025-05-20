import { useState } from "react";
import { View, StyleSheet } from "react-native";
import CustomInput from "../components/Input";
import CustomButton from "../components/Button";

export default function AddTaskScreen() {
  const [title, setTitle] = useState("");

  const handleSave = () => {
    console.log("Nova tarefa:", title);
  };

  return (
    <View style={styles.container}>
      <CustomInput
        label="Título da Tarefa"
        value={title}
        onChangeText={setTitle}
        placeholder="Ex: Estudar React"
      />
      <CustomButton title="Salvar" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
