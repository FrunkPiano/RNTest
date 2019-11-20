import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Dimensions,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
let widthOfMargin = Dimensions.get('window').width * 0.05;
export default class WaitingLeaf extends React.Component {

    render() {
      const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
              <Text style={styles.textPromptStyle}>
                登录使用手机号：{this.props.navigation.state.params.phoneNumber}
                </Text>
                <Text style={styles.textPromptStyle}>
                登录使用密码：{this.props.navigation.state.params.userPW}
                </Text>
                <Text style={styles.bigTextPrompt}
                onPress={()=>this.onGobackPressed()}>
                返回
                </Text>
            </View>
        );
    }
    onGobackPressed() {

    }
    
};


let styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    textInputStyle: {
      margin: widthOfMargin,
      backgroundColor: 'gray',
      fontSize: 20,
    },
    textPromptStyle: {
      margin: widthOfMargin,
      fontSize: 20
    },
    bigTextPrompt: {
      margin: widthOfMargin,
      backgroundColor: 'gray',
      color: 'white',
      textAlign: 'center',
      fontSize: 30
    },
    
    
  });