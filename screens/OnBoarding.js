import { StatusBar } from "expo-status-bar";
import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { Image, StyleSheet, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "../navigation/DrawerNavigator";

const slides = [
  {
    key: "one",
    title: "JUST TRAVEL",
    text:
      "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("../images/1.png"),
  },
  {
    key: "two",
    title: "TAKE A BREAK",
    text:
      "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("../images/2.png"),
  },
  {
    key: "three",
    title: "ENJOY YOUR JOURNEY",
    text:
      "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("../images/3.png"),
  },
];

export default class App extends React.Component {
  state = { showHomePage: false };
 
 
  _renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={item.image}
          style={{
            resizeMode: "cover",
            height: "73%",
            width: "100%",
          }}
        />
        <Text
          style={{
            paddingTop: 25,
            paddingBottom: 10,
            fontSize: 23,
            fontWeight: "bold",
            color: "#21465b",
            alignSelf: "center",
          }}
        >
          {item.title}
        </Text>

        <Text style={{
          textAlign:"center",
          color:"#b5b5b5",
          fontSize:15,
          paddingHorizontal:30
        }}>
          {item.text}
        </Text>
      </View>
    );
  };
  
  
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    //  alert("done");
    // this.mainscreens;
    // navigation.navigate(Home);
    this.setState({ showRealApp: true });
  }


  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };



  _renderDoneButton = () => {
    return (
      <View 
      style={styles.buttonCircle}  
     >
      
        <Icon
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };


 mainscreens = () => {
    return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    );
    // alert("Helo")
  };


  render() {
    if (this.state.showHomePage){
      return <this.mainscreens/>
    } else 
    return (
    <AppIntroSlider
      renderItem={this._renderItem} 
      data={slides} 
      activeDotStyle={{
        backgroundColor:"red",
        // width:30
      }}
      renderDoneButton={this._renderDoneButton } 
      renderNextButton={this._renderNextButton}
      onDone={this._onDone}
     />
  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});