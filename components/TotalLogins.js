import { View, Text, StyleSheet } from "react-native";
export function TotalLogins({ count }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logins}>LOGINS TODAY</Text>
      <Text style={styles.login_count}>{count || 0}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3f3f3f",
    width: 160,
    height: 120,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logins: {
    color: "#fff",
  },
  login_count: {
    fontSize: 50,
    color: "#FFF",
  },
});
