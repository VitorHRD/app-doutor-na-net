import React, { useEffect } from "react";
import { useState } from "react";
import { WebView } from "react-native-webview";
import { ActivityIndicator, View, PermissionsAndroid } from "react-native";
import { StatusBar } from "react-native";
import { Camera } from "expo-camera";
export function Consulta() {
  const [permissions, setPermissions] = useState(false);
  const [progress, setProgress] = useState(0.0);

  const requestCameraPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "App Permissão de Câmera",
        message: "O App precisa de acesso à câmera.",
        buttonNeutral: "Pergunte-me depois",
        buttonNegative: "Cancelar",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      alert('Você pode usar a Câmera');
      setPermissions(true)
    } else {
      alert('Permissão de Câmera negada');
    }
};
  const Spinner = () => (
    <View >
      <ActivityIndicator size="large" color="#3e91e4" />
    </View>
  );
  useEffect(() => {
    requestCameraPermission();
  }, []);
  const javascript = "navigator.mediaDevices.getUserMedia({video : true, audio:true});";
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#3e91e4" />
      {permissions ? (
        <>
          <WebView
            mediaPlaybackRequiresUserAction={false}
            source={{ uri: "https://teleconsulta.rapidoc.tech/login" }}
            scalesPageToFit={true}
            startInLoadingState
            useWebKit
            originWhitelist={["*"]}
            allowsInlineMediaPlayback
            mediaCapturePermissionGrantType={"grant"}
            javaScriptEnabled={true}
            injectedJavaScript={javascript}
            cacheEnabled={true}
            renderLoading={Spinner}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
}
