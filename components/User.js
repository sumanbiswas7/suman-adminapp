import { View, Image, Text, StyleSheet } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
export function User() {
  return (
    <View style={[styles.container, styles.flex_row]}>
      <View style={styles.user_img_container}>
        <Image
          style={styles.user_img}
          source={require("../assets/home/userimage.jpg")}
        />
      </View>
      <View style={{ alignItems: "flex-start" }}>
        <Text style={styles.username}>Suman</Text>
        <View style={styles.flex_row}>
          <Text style={styles.role_text}>admin</Text>
          <Octicons name="verified" color={"#E46666"} />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  user_img_container: {
    width: 70,
    height: 70,
    borderColor: "#fff",
    borderRadius: 50,
    borderWidth: 2,
    marginRight: 10,
  },
  user_img: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  username: {
    fontSize: 35,
    color: "#FFF",
  },
  flex_row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  role_text: {
    color: "#FFF",
    marginRight: 5,
    marginBottom: 2,
  },
});
