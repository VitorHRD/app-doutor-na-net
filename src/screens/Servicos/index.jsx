import React from "react";
import {
  Pressable,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";
import { Linking } from "react-native";
export function Servicos() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.topWarning}>
          <Image
            style={{ height: 70, width: 70 }}
            source={require("../../../assets/atencao.png")}
          ></Image>
          <Text style={styles.textWarning}>
            Solicite a cotação para seu seguro, fazemos a cotação em várias
            seguradoras, garantimos o melhor preço para seu seguro.
          </Text>
        </View>
        <View style={styles.topContainer}>
          <Text style={styles.titleTop}>
            Proteção e Seguros para{" "}
            <Text style={{ color: "#23A6F0" }}>você</Text> e sua{" "}
            <Text style={{ color: "#23A6F0" }}>Família</Text>
          </Text>
          <Pressable
            style={styles.mainButton}
            onPress={() => {
              Linking.openURL(
                "https://api.whatsapp.com/send?phone=5508006995003&text=Ol%C3%A1%20Doutor%20na%20Net"
              );
            }}
          >
            <Text style={styles.textButton}>Solicitar Seguro</Text>
            <AntDesign name="Safety" size={30} color="white" />
          </Pressable>
        </View>
        <View style={styles.servicesContainer}>
          <Pressable
            style={styles.servicesButtonVeicular}
            onPress={() => {
              Linking.openURL(
                "https://api.whatsapp.com/send?phone=5508006995003&text=Ol%C3%A1%20Doutor%2C%20gostaria%20do%20servi%C3%A7o%20de%20seguro%20Veicular"
              );
            }}
          >
            <Text style={styles.textButton}>Seguro de Veícular</Text>
            <Image
              style={{ height: 40, width: 40 }}
              source={require("../../../assets/protecao-veicular.png")}
            ></Image>
          </Pressable>
          <Pressable
            style={styles.servicesButtonCasa}
            onPress={() => {
              Linking.openURL(
                "https://api.whatsapp.com/send?phone=5508006995003&text=Ol%C3%A1%20Doutor%2C%20gostaria%20do%20servi%C3%A7o%20de%20Seguro%20Residencial"
              );
            }}
          >
            <Text style={styles.textButton}>Seguro de Residencial</Text>
            <Image
              style={{ height: 40, width: 40 }}
              source={require("../../../assets/protecao-casa.png")}
            ></Image>
          </Pressable>

          <Pressable
            style={styles.servicesButtonVida}
            onPress={() => {
              Linking.openURL(
                "https://api.whatsapp.com/send?phone=5508006995003&text=Ol%C3%A1%20Doutor%2C%20gostaria%20do%20servi%C3%A7o%20de%20Seguro%20de%20Vida"
              );
            }}
          >
            <Text style={styles.textButton}>Seguro de Vida</Text>
            <Image
              style={{ height: 40, width: 36 }}
              source={require("../../../assets/protecao-vida.png")}
            ></Image>
          </Pressable>
          <Pressable
            style={styles.servicesButtonPrivada}
            onPress={() => {
              Linking.openURL(
                "https://api.whatsapp.com/send?phone=5508006995003&text=Ol%C3%A1%20Doutor%2C%20gostaria%20do%20servi%C3%A7o%20de%20Seguro%20Previd%C3%AAncia%20Privada"
              );
            }}
          >
            <Text style={styles.textButton}>Seguro Previdência Privada</Text>
            <Image
              style={{ height: 40, width: 40 }}
              source={require("../../../assets/protecao-privada.png")}
            ></Image>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
