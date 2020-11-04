import React from 'react';
import { StyleSheet, View, Text, AsyncStorage, ActivityIndicator } from 'react-native';
import {Container} from 'native-base';
import AppIntroSlider from 'react-native-app-intro-slider';
import { AntDesign } from '../../styles/variables/Icons';

export default class TestView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      loading: true,
      //To show the main page of the app
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('first_time').then((value) => {
      this.setState({ showRealApp: !!value, loading: false });
    });
  }

  _onDone = () => {
    // After user finished the intro slides. Show real app through
    // navigation or simply by controlling state
    AsyncStorage.setItem('first_time', 'true').then(() => {
      this.setState({ showRealApp: true });
        this.props.navigation.navigate('Home');
    });
  };

  _onSkip = () => {
    // After user skip the intro slides. Show real app through
    // navigation or simply by controlling state
    AsyncStorage.setItem('first_time', 'true').then(() => {
      this.setState({ showRealApp: true });
        this.props.navigation.navigate('Home');
    });
  };

  render() {
    if (this.state.loading) return <ActivityIndicator size="large" />

    //If false show the Intro Slides
    if (this.state.showRealApp) {
      //Real Application
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 50,
          }}>
          <Text>
            This will be your screen when you click Skip from any slide or Done
            button at last
          </Text>
        </View>
      );
    } else {
      //Intro slides
      return (
        <Container>
          <AppIntroSlider
            slides={slides}
            //comming from the JsonArray below
            onDone={this._onDone}
            //Handler for the done On last slide
            showSkipButton={true}
            onSkip={this._onSkip}
            showPrevButton={true}
            prevLabel={<AntDesign name="arrowleft" size={23} />}
            nextLabel={<AntDesign name="arrowright" size={23}/>}
            doneLabel="Готово"
          />
        </Container>
      );
    }
  }
}