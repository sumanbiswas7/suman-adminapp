import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  FlatList,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Message } from "../components/Message";
import { useContext } from "react";
import { dataContext } from "../App";

export default function MessagesPage({ navigation }) {
  const { allMessages } = useContext(dataContext);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_small_box}>
          <TouchableOpacity
            style={styles.header_back_button}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={25} color={"#FFF"} />
          </TouchableOpacity>
          <Text style={styles.header_text}>Messages</Text>
        </View>
        <View style={styles.circle}>
          <Text style={{ fontSize: 16 }}>{allMessages.length}</Text>
        </View>
      </View>
      <FlatList
        data={allMessages}
        style={{ marginTop: 100, marginBottom: 5 }}
        renderItem={({ item }) => {
          return (
            <Message
              name={item.name}
              time={item.date}
              email={item.email}
              message={item.message}
            />
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3F3F3F",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#3F3F3F",
    width: Dimensions.get("window").width,
    paddingHorizontal: 20,
    alignItems: "center",
    // paddingVertical: 10,
    position: "absolute",
    top: 0,
    marginTop: StatusBar.currentHeight,
    paddingVertical: 10,
  },
  header_back_button: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  header_small_box: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  header_text: {
    color: "#FFF",
    fontSize: 17,
  },
  circle: {
    backgroundColor: "#FFF",
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
