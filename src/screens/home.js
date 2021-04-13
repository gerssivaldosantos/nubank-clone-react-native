import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";
import styles from '../styles/home'
const ScrollAnimated = Animatable.createAnimatableComponent(ScrollView);

export default function Home({route}) {

  const usuario = route.params?.name
  const faturaAtual = route.params?.currentInvoice
  const saldoDisponivel = route.params?.balance
  const limite = route.params?.limitAvailable
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
            R$ {isHidde ? hidden : faturaAtual}
          </Text>
          <Text style={styles.limitTitle}>Limite disponível</Text>
          <Text style={styles.limit}>R$ {isHidde ? hidden : limite}</Text>
        </View>

        <View style={styles.accountContainer}>
        <Image style={styles.accountIcon} source={require("../assets/cash.png")} />
          <Text style={styles.accountTitle}>Conta</Text>
          <Text style={styles.accountSubTitle}>Saldo disponível</Text>
          <Text style={styles.cash}>R$ {isHidde ? hidden : saldoDisponivel}</Text>
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



