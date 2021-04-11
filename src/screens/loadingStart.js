import React from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import styles from "../styles/loadingStart";
import * as Animatable from "react-native-animatable";
import { StatusBar } from "expo-status-bar";
export default function LoadingStart() {
  return (

    <View style={styles.container}>
        <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#8a05be"
        style={"light"}
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
      <Animatable.Image
        animation="fadeInUp"
        useNativeDriver
        duration={2000}
        style={styles.nubankIcon}
        source={require("../assets/icon.png")}
      />
      <Animatable.Image
        animation="fadeInUp"
        useNativeDriver
        duration={2000}
        style={styles.instagramIcon}
        source={require("../assets/instagram.png")}
      />
      <Animatable.Text
        style={styles.message}
        animation="fadeInUp"
        useNativeDriver
        duration={2000}
      >
        Versão criada por        gess.dev
      </Animatable.Text>

      <TouchableOpacity style={styles.buttonGithub}>
          <Text style={styles.buttonMoreInfText}>Código Fonte</Text>
        </TouchableOpacity>

      <Animatable.View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonMoreInf}>
          <Text style={styles.buttonMoreInfText}>Iniciar</Text>
        </TouchableOpacity>

        
      </Animatable.View>
    </View>
  );
}
