import React from "react";
import {
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "react-native";
import { styles } from "./styles";
import { Linking } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
export function Home({ navigation }) {
  return (
    <>
        <StatusBar barStyle="light-content" backgroundColor="#3e91e4" />
        <SafeAreaView style={styles.container}>
        <ScrollView  contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-around', alignItems:'center', paddingTop:50 }}>
          <View style={styles.firstDiv}>
            <View style={{ width: "100%" }}>
              <Text style={styles.titleTop}>
                Vamos encontrar{"\n"}o seu{" "}
                <Text style={{ color: "#23A6F0" }}>Médico !</Text>
              </Text>
              <Image
                style={styles.medImg}
                source={require("../../../assets/Doutor-PNG.png")}
              ></Image>
            </View>
            <Pressable
              style={styles.mainButton}
              onPress={() => {
                navigation.navigate("Consultar");
              }}
            >
              <Text style={styles.textButton}>Fazer Consulta</Text>
              <FontAwesome5
                name="hand-holding-medical"
                size={22}
                color="white"
              />
            </Pressable>
          </View>
          <View style={styles.moreServices}>
            <Text style={{ fontSize: 16 }}>Serviços Doutor na Net</Text>
            <Pressable
              style={{ alignSelf: "flex-end" }}
              onPress={() => {
                navigation.navigate("Serviços");
              }}
            >
              <Text style={{ color: "#23A6F0" }}>ver mais ..</Text>
            </Pressable>
          </View>
          <Pressable
            style={{ width: "100%", alignItems: "center", marginTop: 5 }}
            onPress={() => {
              navigation.navigate("Consultar");
            }}
          >
            <Image
              source={require("../../../assets/Banner-Telemedicina.png")}
              style={{ width: "90%", height: 190, maxWidth: 400 }}
            />
          </Pressable>
          <Pressable
            style={styles.divPlano}
            onPress={() => {
              Linking.openURL("https://www.doutornanet.com.br/planos#conteudo");
            }}
          >
            <Text style={styles.textPlanos}>
              Veja qual melhor{"\n"}plano pra{" "}
              <Text style={{ color: "white" }}>Você!</Text>
            </Text>
            <Image
              source={require("../../../assets/icone-planos.png")}
              style={{ width: 60, height: 60 }}
            />
          </Pressable>
          <View
            style={{
              width: "90%",
              maxWidth: 400,
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "flex-end",
              height: 100,
            }}
          >
            <Pressable
              style={{ alignItems: "center" }}
              onPress={() => {
                Linking.openURL(
                  "https://api.whatsapp.com/send?phone=5508006995003&text=Ol%C3%A1%20Doutor%20na%20Net"
                );
              }}
            >
              <Image
                style={{ width: 50, height: 50 }}
                source={require("../../../assets/Botao-Whatsapp.png")}
              />
              <Text style={{ textAlign: "center" }}>Whatsapp</Text>
            </Pressable>
            <Pressable
              style={{ alignItems: "center" }}
              onPress={() => {
                Linking.openURL("https://www.instagram.com/doutor_na_net/");
              }}
            >
              <Image
                style={{ width: 50, height: 50 }}
                source={require("../../../assets/Botao-Instagram.png")}
              />
              <Text>Instagram</Text>
            </Pressable>
            <Pressable
              style={{ alignItems: "center" }}
              onPress={() => {
                Linking.openURL("https://www.youtube.com/watch?v=Cd0CUGirNvI");
              }}
            >
              <Image
                style={{ width: 50, height: 50 }}
                source={require("../../../assets/youtube.png")}
              />
              <Text>Youtube</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
