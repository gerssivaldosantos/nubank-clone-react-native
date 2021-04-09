import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image
} from "react-native";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/MaterialIcons";
Icon.loadFont();
const ScrollAnimated = Animatable.createAnimatableComponent(ScrollView);

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;
export default function App() {
  const usuario = "Gerssivaldo";
  const faturaAtual = "R$ 5,31";
  const saldoDisponivel = "R$ 8,90";
  const limite = "R$ 48,76";
  const hidden = " ...........";
  const [isHidde, setisHidde] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#6a0f8c"
        style={"light"}
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
      <View style={styles.header}>
        <Text style={styles.headerText}>Olá, {usuario}</Text>

        <TouchableOpacity
          style={styles.buttonHidde}
          onPress={() => setisHidde(!isHidde)}
        >
          <Ionicons
            size={23}
            style={{ color: "white" }}
            name={isHidde ? "ios-eye-outline" : "ios-eye-off-outline"}
          />
         {/*  <Image style={styles.buttonHiddeIcon} source={require("../assets/hidden.png")} /> */}
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSettings}>
          <Ionicons
            name="ios-settings-outline"
            size={23}
            style={{ color: "white" }}
          ></Ionicons>
        </TouchableOpacity>
      </View>

      <ScrollAnimated
        animation="fadeInUp"
        useNativeDriver
        duration={1000}
        contentContainerStyle={{
          alignItems: "center",
        }}
        style={styles.scrollContainer}
      >
        <View style={styles.cardContainer}>
          <Ionicons style={styles.cardIcon} size={29} name="ios-card-outline" />

          <Text style={styles.cardTitle}> Cartão de Crédito </Text>

          <Text style={styles.cardSubTitle}> Fatura atual</Text>
          <Text style={styles.invoiceTitle}>
            {isHidde ? hidden : faturaAtual}
          </Text>
          <Text style={styles.limitTitle}>Limite disponível</Text>
          <Text style={styles.limit}>{isHidde ? hidden : limite}</Text>
        </View>

        <View style={styles.accountContainer}>
          <Ionicons
            style={styles.accountIcon}
            name="ios-cash-outline"
            size={26}
          />
          <Text style={styles.accountTitle}>Conta</Text>
          <Text style={styles.accountSubTitle}>Saldo disponível</Text>
          <Text style={styles.cash}>{isHidde ? hidden : saldoDisponivel}</Text>
        </View>

        <View style={styles.SecureLifeContainer}>
          <Text style={styles.SecureLifeTitle}>Seguro de vida</Text>
          <Text style={styles.SecureLifeSubtitle}>Conheça Nubank Vida: um seguro{'\n'}
             simples e que cabe no bolso</Text>
             <View style={styles.borderButtonToMeet}></View>
             <TouchableOpacity style={styles.buttonToMeet}>
               <Text style={styles.titleToMeet}>Conhecer</Text>
             </TouchableOpacity>
        </View>

      </ScrollAnimated>
      <ScrollAnimated
        animation="bounceInLeft"
        useNativeDriver
        duration={1300}
        horizontal={true}
        style={styles.footer}
      >
        <View style={styles.childFooter}>
          <Text style={styles.childFooterText}>Pix</Text>
        </View>
        <View style={styles.childFooter}>
          <Text style={styles.childFooterText}>Pagar</Text>
        </View>
        <View style={styles.childFooter}>
          <Text style={styles.childFooterText}>Indicar amigos</Text>
        </View>
        <View style={styles.childFooter}>
          <Text style={styles.childFooterText}>Transferir</Text>
        </View>
        <View style={styles.childFooter}>
          <Text style={styles.childFooterText}>Depositar</Text>
        </View>
        <View style={styles.childFooter}>
          <Text style={styles.childFooterText}>Cartão Virtual</Text>
        </View>
        <View style={styles.childFooter}>
          <Text style={styles.childFooterText}>Recarga{"\n"} de celular</Text>
        </View>
        <View style={styles.childFooter}>
          <Text style={styles.childFooterText}>Ajustar limite</Text>
        </View>
      </ScrollAnimated>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8914b5",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    width: "100%",
    height: "12%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  headerText: {
    position: "absolute",
    fontSize: 26,
    color: "white",
    fontWeight: "bold",
    left: "5%",
  },
  buttonHidde: {
    position: "absolute",
    width: 48,
    height: 48,
    backgroundColor: "#b0b0b030",
    justifyContent: "center",
    alignItems: "center",
    right: "20%",
    borderRadius: 50,
  },
 /*  buttonHiddeIcon:{
    height: 25,
    width:25,
    color:'white',
    borderColor:'white',
  }, */
  buttonSettings: {
    position: "absolute",
    width: 48,
    height: 48,
    backgroundColor: "#b0b0b030",
    justifyContent: "center",
    alignItems: "center",
    right: "5%",
    borderRadius: 50,
  },
  scrollContainer: {
    width: "100%",
    height: "100%",
  },
  cardContainer: {
    height: 165,
    marginBottom: 18,
    backgroundColor: "white",
    width: deviceWidth - 38,
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,

    elevation: 1,
  },
  cardTitle: {
    position: "absolute",
    left: 64,
    top: 25,
    fontSize: 15,
    color: "#828282",
  },
  cardIcon: {
    position: "absolute",
    left: 24,
    top: 22,
    color: "#828282",
  },
  cardSubTitle: {
    position: "absolute",
    left: 22,
    top: 64,
    fontSize: 13,
    color: "#828282",
  },
  invoiceTitle: {
    position: "absolute",
    left: 26.5,
    fontWeight: "bold",
    top: 90,
    fontSize: 25,
    color: "#1fa9de",
  },
  limitTitle: {
    position: "absolute",
    left: 28,
    top: "76%",
    fontSize: 13,
    color: "#454545",
  },
  limit: {
    position: "absolute",
    left: 140,
    top: "76%",
    fontSize: 13,
    color: "green",
    fontWeight: "bold",
  },
  accountContainer: {
    height: 150,
    marginBottom: 18,
    backgroundColor: "white",
    width: deviceWidth - 38,
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,

    elevation: 1,
  },
  accountTitle: {
    position: "absolute",
    left: 72,
    top: 25,
    fontSize: 15,
    color: "#828282",
  },
  accountIcon: {
    position: "absolute",
    left: 24,
    top: 22,
    color: "#828282",
  },
  accountSubTitle: {
    position: "absolute",
    left: 27,
    top: 64,
    fontSize: 13,
    color: "#828282",
  },
  cash: {
    position: "absolute",
    left: 26.5,
    fontWeight: "bold",
    top: 90,
    fontSize: 25,
    color: "#232323",
  },
  SecureLifeContainer:{
    height: 200,
    marginBottom: 18,
    backgroundColor: "white",
    width: deviceWidth - 38,
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,

    elevation: 1,
  },
  buttonToMeet:{
    position:'absolute',
    backgroundColor:'white',
    bottom:20,
    left:20,
    padding:10,
    width:130,
    height:43,
    borderRadius:3,
  },
  borderButtonToMeet:{
    position:'absolute',
    backgroundColor:'#8914b5',
    bottom:19,
    left:19,
    padding:9,
    width:131,
    height:45,
    borderRadius:5,
  },
  footer: {
    height: 200,
    paddingTop: 10,
    flexDirection: "row",
    paddingLeft: 20,
  },
  childFooter: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 7,
    marginRight: 10,
    backgroundColor: "#ffffff25",
    height: 95,
    width: 83,
    borderRadius: 2,
  },
  childFooterText: {
    fontSize: 13,
    color: "white",
    marginLeft: 6,
    marginBottom: 6,
  },
});
