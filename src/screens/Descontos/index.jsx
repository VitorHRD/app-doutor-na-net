import React from 'react';
import { useState } from 'react';
import { WebView } from 'react-native-webview';
import { ActivityIndicator, View } from "react-native";
import { StatusBar } from "react-native";
export function Descontos() {
    const [progress, setProgress] = useState(0.0);
    return (
      <>
       <StatusBar barStyle="light-content" backgroundColor="#3e91e4" />
      <WebView
          source={{ uri: "https://clubecerto.com.br/acesso?utm_cc=acessodireto&ent=dronline" }}
          onLoadProgress={event => {
            setProgress(event.nativeEvent.progress);
          }}
      />
      {
          progress < 0.99 ? (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
              <ActivityIndicator size="large" color="#3e91e4" />
          </View>
          ) : <></>
      }
      </>
    )
}