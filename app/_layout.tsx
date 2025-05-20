// app/_layout.tsx
import { Stack } from "expo-router";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

export default function Layout() {
  return (
    <ActionSheetProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#123456" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
    </ActionSheetProvider>
  );
}
