import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#8a05be",
  },
  buttonsContainer:{
      position:'absolute',
      height:65,
      width:'100%',
      bottom:0,
      flexDirection:'row'
    
  },
  nubankIcon: {
    height: 120,
    width: 120,
  },
  instagramIcon:{
    height:13,
    width:13,
    position:'absolute',
    top:'56.13%',
    left:'54%'
  },
  message: {
    color: "#ffff",
    fontSize: 11,
  },
  buttonMoreInf: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "#8a05be",
    bottom: 30,
    left: 30,
    padding: 10,
    width: 120,
    height: 43,
    borderRadius: 5,
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 0.7,
  },
  buttonGithub:{
    position:'absolute',
    top: 20,
    right:20
  },
  buttonMoreInfText:{
      color:'white',

  }
});

export default styles;
