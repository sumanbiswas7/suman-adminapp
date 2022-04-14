import { HomePage } from "./pages/HomePage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginsPage from "./pages/LoginsPage";
import MessagesPage from "./pages/MessagesPage";
import { useState } from "react";
import { createContext } from "react";
import { MenuProvider } from "react-native-popup-menu";

const Stack = createNativeStackNavigator();
export const dataContext = createContext();
export default function App() {
  const [allMessages, setAllMessages] = useState([]);
  const [allLogins, setAllLogins] = useState([]);
  const [presentDayLogins, setPresentDayLogins] = useState([]);
  const contextData = {
    allLogins,
    allMessages,
    presentDayLogins,
    setAllLogins,
    setAllMessages,
    setPresentDayLogins,
  };
  return (
    <dataContext.Provider value={contextData}>
      <MenuProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen
              options={{ animation: "fade" }}
              name="Home"
              component={HomePage}
            />
            <Stack.Screen
              options={{ animation: "fade_from_bottom" }}
              name="Logins"
              component={LoginsPage}
            />
            <Stack.Screen
              options={{ animation: "fade_from_bottom" }}
              name="Messages"
              component={MessagesPage}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </MenuProvider>
    </dataContext.Provider>
  );
}
