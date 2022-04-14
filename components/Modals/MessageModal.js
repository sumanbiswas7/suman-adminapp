import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { View, Text } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { renderers } from "react-native-popup-menu";
const { SlideInMenu, Popover } = renderers;

export function MessageModal({ message }) {
  return (
    <Menu renderer={SlideInMenu}>
      <MenuTrigger>
        <View style={{ padding: 10 }}>
          <MaterialIcons name="preview" size={20} />
        </View>
      </MenuTrigger>
      <MenuOptions
        customStyles={{
          optionsContainer: {
            backgroundColor: "#fff",
            paddingVertical: 50,
            paddingHorizontal: 30,
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <MenuOption>
          <Text>{message || "N/A"}</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
}
