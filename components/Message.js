import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { MessageModal } from "./Modals/MessageModal";

export function Message({ name, time, email, message }) {
  function handleReplyClick() {
    const subject = `Subject=FROM%20-%20SUMAN%20BISWAS`;
    const body = `&body=Hi%20there,\n\nThanks%20for%20your%20email.\n\n\n\nPS:%20Sorry%20for%20the%20late%20reply.%20I'd%20hoped%20to%20get%20back%20to%20you%20sooner.`;
    const footer = `PS%20Sorry%20for%20the%20late%20reply.%20I'd%20hoped%20to%20get%20back%20to%20you%20sooner.`;
    // I'd hoped to get back to you sooner
    Linking.openURL(`mailto:${email}?${subject}${body}`);
  }
  function handleWpFwdClick() {
    const text = `${email}`;
    Linking.openURL(`https://wa.me/917407992473?text=${text}`);
  }

  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 15 }}>
        <Text style={styles.text_name}>{name || "N/A"}</Text>
        <Text style={styles.text_date}>{time || "N/A"}</Text>
      </View>
      <TouchableOpacity style={styles.preview_btn}>
        <MessageModal message={message} />
      </TouchableOpacity>
      <View style={styles.option_box}>
        <TouchableOpacity
          style={styles.option_btn_container}
          onPress={handleWpFwdClick}
        >
          <FontAwesome name="whatsapp" size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option_btn_container}
          onPress={handleReplyClick}
        >
          <MaterialCommunityIcons name="reply-outline" size={22} />
        </TouchableOpacity>
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
    width: 60,
    borderColor: "#3F3F3F",
    borderLeftWidth: 1,
  },
  option_btn_container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 35,
    marginVertical: 2,
  },
});
