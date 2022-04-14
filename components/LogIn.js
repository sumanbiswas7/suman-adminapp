import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export function LogIn({ city, place, time, flagUrl }) {
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 15 }}>
        <Text style={styles.text_name}>{city || "N/A"}</Text>
        <Text style={styles.text_date}>{place || "N/A"}</Text>
      </View>
      <Text style={[styles.text_time, { color: "#BDBDBD" }]}>
        {time || "N/A"}
      </Text>
      <View style={styles.option_box}>
        <Image source={{ uri: flagUrl || "" }} style={styles.flag} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#FFF",
    width: 350,
    paddingVertical: 15,
    borderRadius: 10,
    shadowColor: "#000",
    overflow: "hidden",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text_name: {
    fontSize: 20,
  },
  text_date: {
    fontSize: 12,
  },
  text_time: {
    fontSize: 12,
    position: "absolute",
    top: 0,
    right: 5,
  },
  preview_btn: {
    height: 50,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  option_box: {
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    width: 65,
    borderColor: "#3F3F3F",
    borderLeftWidth: 1,
  },
  flag: {
    width: 45,
    height: 30,
  },
});
