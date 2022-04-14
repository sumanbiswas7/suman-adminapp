import { View, Text, StyleSheet } from "react-native";
export function Notification({ count, text }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.circle}>
        <Text style={styles.count}>{count}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#3f3f3f",
    width: 160,
    height: 60,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    color: "#FFF",
  },
  circle: {
    backgroundColor: "#fff",
    width: 65,
    height: 65,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#3F3F3F",
    position: "absolute",
    right: -35,
    top: -20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  count: {
    color: "#3F3F3F",
    fontSize: 35,
  },
});
