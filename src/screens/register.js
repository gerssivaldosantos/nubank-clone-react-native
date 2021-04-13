import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity, TextInput } from "react-native";
import styles from "../styles/loadingStart";
import * as Animatable from "react-native-animatable";
import { StatusBar } from "expo-status-bar";

export default function Register({ navigation }) {
  const [name, setName] = useState("Nubank");
  const [balance, setBalance] = useState(9999);
  const [currentInvoice, setCurrentInvoice] = useState(9999);
  const [limitAvailable, setLimitAvailable] = useState(9999);

  return (
    <View style={styles.container}>
      <Image style={styles.nubankIcon} source={require("../assets/icon.png")} />
      <TextInput
        textContentType="name"
        keyboardType="default"
        placeholder="Nome do titular"
        style={styles.input}
        placeholderTextColor={"white"}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        keyboardType="numeric"
        placeholder="Saldo em Conta"
        style={styles.input}
        placeholderTextColor={"white"}
        onChangeText={(number) => setBalance(number)}
      />
      <TextInput
        keyboardType="numeric"
        placeholder="Fatura Atual"
        style={styles.input}
        placeholderTextColor={"white"}
        onChangeText={(number) => setCurrentInvoice(number)}
      />
      <TextInput
        keyboardType="numeric"
        placeholder="Limite Disponível"
        style={styles.input}
        placeholderTextColor={"white"}
        onChangeText={(number) => setLimitAvailable(number)}
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
