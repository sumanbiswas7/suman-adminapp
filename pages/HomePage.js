import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { User } from "../components/User";
import { TotalLogins } from "../components/TotalLogins";
import { Notification } from "../components/Notification";
import { app } from "../helpers/firebase";
import { getDatabase, ref, onValue } from "firebase/database";
const backgroundURI = require("../assets/home/homebg.png");
import { useEffect, useState, useContext } from "react";
import { dataContext } from "../App";

export function HomePage({ navigation }) {
  const [isLoading, setIsLoading] = useState({ logins: true, messages: true });
  const {
    setAllMessages,
    allMessages,
    setAllLogins,
    allLogins,
    presentDayLogins,
    setPresentDayLogins,
  } = useContext(dataContext);

  useEffect(() => {
    getAllLogins();
    getAllMessages();
    // filterPresentDayLogins(allLogins);
    function filterPresentDayLogins(data) {
      data.filter((e) => {});
    }
    function getAllLogins() {
      const dbRef = ref(getDatabase(), "users/");
      onValue(
        dbRef,
        (snapshot) => {
          const USERS = [];
          snapshot.forEach((childSnapshot) => {
            const childData = childSnapshot.val();
            USERS.push(childData);
          });
          setAllLogins(USERS.reverse());
          setPresentDayLogins(parseInt(USERS.length * 0.1));
          setIsLoading((p) => ({ ...p, logins: false }));
        },
        {
          onlyOnce: true,
        }
      );
    }
    function getAllMessages() {
      const dbRef = ref(getDatabase(), "messages/");
      onValue(
        dbRef,
        (snapshot) => {
          const MESSAGES = [];
          snapshot.forEach((childSnapshot) => {
            const childData = childSnapshot.val();
            MESSAGES.push(childData);
          });
          setAllMessages(MESSAGES.reverse());
          setIsLoading((p) => ({ ...p, messages: false }));
        },
        {
          onlyOnce: true,
        }
      );
    }
  }, []);

  return (
    <>
      {!isLoading.logins && !isLoading.messages ? (
        <View style={styles.container}>
          <View style={styles.top_container}>
            <User />
          </View>
          <ImageBackground
            source={backgroundURI}
            style={styles.img_bg}
            resizeMode="cover"
          >
            <View style={styles.main_container}>
              <TotalLogins count={presentDayLogins} />
              <Notification count={allMessages.length} text="MESSAGES" />
              <Notification count={allLogins.length} text="LOGINS" />
            </View>
          </ImageBackground>
          <View style={styles.bottom_container}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Messages")}
              style={styles.bottom_button}
            >
              <Text style={styles.bottom_button_text}>VIEW MESSAGES</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Logins")}
              style={styles.bottom_button}
            >
              <Text style={styles.bottom_button_text}>VIEW LOGINS</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <ActivityIndicator size={25} color="#3F3F3F" style={styles.loader} />
      )}
      <ExpoStatusBar style="light" backgroundColor={"#3F3F3F"} />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    flex: 1,
  },
  top_container: {
    backgroundColor: "#3F3F3F",
    marginTop: StatusBar.currentHeight,
    width: Dimensions.get("window").width,
    height: 200,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: "flex-start",
    paddingLeft: 30,
  },
  img_bg: {
    flex: 1,
    justifyContent: "center",
  },
  main_container: {
    flex: 1,
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
  },
  bottom_container: {
    backgroundColor: "#3F3F3F",
    width: Dimensions.get("window").width,
    height: 80,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    bottom: 0,
    flexDirection: "row",
  },
  bottom_button: {
    height: "100%",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  bottom_button_text: {
    color: "#fff",
  },
});
