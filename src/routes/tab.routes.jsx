import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { Servicos } from "../screens/Servicos";
import { Descontos } from "../screens/Descontos";
import { Image } from "react-native";
import { Consulta } from "../screens/Consulta";

export function TabRoutes() {
  const { Screen, Navigator } = createBottomTabNavigator();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingTop: 5,
          height: 65,
        },
        tabBarLabel: "",
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <Image
                source={require("../../assets/icone-coracao-ativo.png")}
                style={{ width: 40, height: 40 }}
              ></Image>
            ) : (
              <Image
                source={require("../../assets/icone-coracao-inativo.png")}
                style={{ width: 24, height: 21.5 }}
              ></Image>
            ),
        }}
      ></Screen>
      <Screen
        name="Serviços"
        component={Servicos}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <Image
                source={require("../../assets/icone-servicos-ativo.png")}
                style={{ width: 45, height: 45 }}
              ></Image>
            ) : (
              <Image
                source={require("../../assets/icone-servicos-inativo.png")}
                style={{ width: 30, height: 30 }}
              ></Image>
            ),
        }}
      ></Screen>
      <Screen
        name="Consultar"
        component={Consulta}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <Image
                source={require("../../assets/icone-consulta-ativo.png")}
                style={{ width: 45, height: 45 }}
              ></Image>
            ) : (
              <Image
                source={require("../../assets/icone-consulta-inativo.png")}
                style={{ width: 32, height: 24 }}
              ></Image>
            ),
        }}
      ></Screen>

      <Screen
        name="Descontos"
        component={Descontos}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <Image
                source={require("../../assets/icone-descontos-ativo.png")}
                style={{ width: 45, height: 45 }}
              ></Image>
            ) : (
              <Image
                source={require("../../assets/icone-descontos-inativo.png")}
                style={{ width: 30, height: 26.5 }}
              ></Image>
            ),
        }}
      ></Screen>
    </Navigator>
  );
}
