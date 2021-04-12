import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity, TextInput } from "react-native";
import styles from "../styles/loadingStart";
import * as Animatable from "react-native-animatable";
import { StatusBar } from "expo-status-bar";

export default function Register({ navigation }) {
  const [balance, setBalance] = useState(0);
  const [name, setName] = useState("Nome");
  const [currentInvoice, setCurrentInvoice] = useState(0);
  const [limitAvailable, setLimitAvailable] = useState(0);

  return (
    <View style={styles.container}>
     
      <Image style={styles.nubankIcon} source={require("../assets/icon.png")} />
      <TextInput
      textContentType="name"
        keyboardType="default"
        placeholder="Nome do titular"
        style={styles.input}
        placeholderTextColor={"white"}
        onChange={(text)=> setName(text)}
      />
      <TextInput
        keyboardType="numeric"
        placeholder="Saldo em Conta"
        style={styles.input}
        placeholderTextColor={"white"}
        onChange={(number)=> setBalance(number)}
      />
      <TextInput
        keyboardType="numeric"
        placeholder="Fatura Atual"
        style={styles.input}
        placeholderTextColor={"white"}
      />
      <TextInput
        keyboardType="numeric"
        placeholder="Limite Disponível"
        style={styles.input}
        placeholderTextColor={"white"}
      />

      <TouchableOpacity
        style={styles.buttonMoreInf}
        onPress={() =>
          navigation.navigate("Home", {
            name: name,
            balance: balance,
            currentInvoice: currentInvoice,
            limitAvailable: limitAvailable,
          })
        }
      >
        <Text style={styles.buttonMoreInfText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
