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
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Register from '../screens/register'
const ScrollAnimated = Animatable.createAnimatableComponent(ScrollView);

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;



export default function Home({route}) {

  const usuario = route.params?.name.name
  const faturaAtual = String(route.params?.currentInvoice)
  const saldoDisponivel = String(route.params?.balance)
  const limite = String(route.params?.limitAvailable)
  const hidden = " ...........";
  const [isHidde, setisHidde] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#66048d"
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
          <Image style={styles.cardIcon} source={require("../assets/card.png")} />

          <Text style={styles.cardTitle}> Cartão de Crédito </Text>

          <Text style={styles.cardSubTitle}> Fatura atual</Text>
          <Text style={styles.invoiceTitle}>
            {isHidde ? hidden : faturaAtual}
          </Text>
          <Text style={styles.limitTitle}>Limite disponível</Text>
          <Text style={styles.limit}>{isHidde ? hidden : limite}</Text>
        </View>

        <View style={styles.accountContainer}>
        <Image style={styles.accountIcon} source={require("../assets/cash.png")} />
          <Text style={styles.accountTitle}>Conta</Text>
          <Text style={styles.accountSubTitle}>Saldo disponível</Text>
          <Text style={styles.cash}>{isHidde ? hidden : saldoDisponivel}</Text>
        </View>
        

        <View style={styles.SecureLifeContainer}>
          <Image
            style={styles.cardsIcon}
            source={require("../assets/securelife.png")}
          />
          <Text style={styles.cardsTitle}>Seguro de vida</Text>
          <Text style={styles.cardSubtitle}>
            Conheça Nubank Vida: um seguro{"\n"}
            simples e que cabe no bolso.
          </Text>
          <TouchableOpacity style={styles.buttonToMeet}>
            <Text style={styles.titleToMeet}>CONHECER</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.SecureLifeContainer}>
          <Image
            style={styles.cardsIcon}
            source={require("../assets/rewards.png")}
          />
          <Text style={styles.cardsTitle}>Rewards</Text>
           <Text style={styles.cardSubtitle}>
            Apague compras com pontos que nunca{"\n"}
            expiram.
          </Text>
          <TouchableOpacity style={styles.buttonToMeet}>
            <Text style={styles.titleToMeet}>CONHECER</Text>
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
          <Image
            style={styles.footerIcon}
            source={require("../assets/pix.png")}
          />
          <Text style={styles.childFooterText}>Pix</Text>
        </View>
        <View style={styles.childFooter}>
          <Image
            style={styles.footerIcon}
            source={require("../assets/pagar.png")}
          />
          <Text style={styles.childFooterText}>Pagar</Text>
        </View>
        <View style={styles.childFooter}>
          <Image
            style={styles.footerIcon}
            source={require("../assets/indicar.png")}
          />
          <Text style={styles.childFooterText}>Indicar amigos</Text>
        </View>
        <View style={styles.childFooter}>
          <Image
            style={styles.footerIcon}
            source={require("../assets/transferir.png")}
          />
          <Text style={styles.childFooterText}>Transferir</Text>
        </View>
        <View style={styles.childFooter}>
        <Image
            style={styles.footerIcon}
            source={require("../assets/depositar.png")}
          />
          <Text style={styles.childFooterText}>Depositar</Text>
        </View>
        
        {/* <View style={styles.childFooter}>
          <Text style={styles.childFooterText}>Cartão Virtual</Text>
        </View>
        <View style={styles.childFooter}>
          <Text style={styles.childFooterText}>Recarga{"\n"} de celular</Text>
        </View>
        <View style={styles.childFooter}>
          <Text style={styles.childFooterText}>Ajustar limite</Text>
        </View> */}
        <View style={{width:27}} />
      </ScrollAnimated>
    </SafeAreaView>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8a05be",
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
    backgroundColor: "#9824c7",
    justifyContent: "center",
    alignItems: "center",
    right: "20%",
    borderRadius: 50,
    transform: [{rotateY: '180deg'}]
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
    backgroundColor: "#9824c7",
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
    width:29,
    height:26
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
    color: "#29a0da",
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
    color: "#227f46",
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
    width:28,
    height:28
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
    color: "#404040",
  },
  SecureLifeContainer: {
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
  cardsIcon: {
    position: "absolute",
    top: 15,
    left: 17,
    width: 44,
    height: 44,
  },
  cardsTitle: {
    color: "#8a05be",
    fontSize: 22,
    position: "absolute",
    left: 70,
    top: 18,
    fontWeight: "100",
  },

  cardSubtitle:{
    color: "#505050",
    position: "absolute",
    top: 74,
    left: 20,
    fontSize:15.5
  },
  buttonToMeet: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "white",
    bottom: 20,
    left: 20,
    padding: 10,
    width: 120,
    height: 43,
    borderRadius: 5,
    borderColor: "#8a05be",
    borderStyle: "solid",
    borderWidth: 0.7,
  },
  titleToMeet: {
    color: "#8a05be",
    fontSize: 14,
    fontWeight: "bold",
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
    backgroundColor: "#9824c7",
    height: 95,
    width: 83.8,
    borderRadius: 2,
  },
  childFooterText: {
    fontSize: 13,
    color: "white",
    marginLeft: 10,
    marginBottom: 10,
  },
  footerIcon: {
    width: 25,
    height: 25,
    position: "absolute",
    top: 10,
    left: 10,
  },
});
