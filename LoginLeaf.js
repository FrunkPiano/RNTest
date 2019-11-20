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

export default class LoginLeaf extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
      };
  constructor(props){
    super(props);
    this.state = {iputedNum: '',
    inputedPW: ''
  }
  }
  

 updateNum = (newText) => {
    this.setState({ inputedNum: newText })
  }

 updatePW = (newText) => {
    this.setState(
      { inputedPW: newText }
    )
  }

  userPressConfirm() {
    
  }

  userPressAddressBook = () => {
    // console.log('userPressAddressBook is called.');
    // var {NativeAppEventEmitter} = require('react-native');
    // this.NativeMsgSubscription = NativeAppEventEmitter.addListener('NativeModuleMsg',(reminder) =>
    // {this.handleNativeInterfaceMsg(reminder.message);}
    // );
    var ExampleInterface = require('react-native').NativeModules.ExampleInterface;
    // ExampleInterface.sendMessage('{\"msgType\":\"pickContact\"}');
    ExampleInterface.sendMessage('{"msgType":"pickContact"}').then(
      (result)=>{
        console.log(result);
        let msgObj = JSON.parse(result);
        this.setState({inputedNum:msgObj.peerNumber});
      }
    ).catch(
      (error)=>{
        console.log(error);
        console.log(error.message);
        console.log(error.code);
        console.log(error.nativeStackIOS);
        console.log(error.nativeStackIOS.length);
      }
    );
  }

  handleNativeInterfaceMsg = (aMsg) => {
    console.log(aMsg);
    let msgObj = JSON.parse(aMsg);
    this.setState({inputedNum: msgObj.peerNumber})
  }
  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <TextInput style={styles.textInputStyle}
      placeholder={'手机号'}
      onChangeText={this.updateNum}/>
      <Text style={styles.textPromptStyle}>
        您输入的手机号: {this.state.inputedNum} 
      </Text>
      <TextInput style={styles.textInputStyle}
      placeholder={'密码'}
      password={true}
      onChangeText={this.updatePW}/>
      <Text style={styles.textPromptStyle}>
        您输入的密码: {this.state.inputedPW} 
      </Text>
      <Text style={styles.bigTextPrompt}
      onPress={() => navigate('Waiting', {phoneNumber: this.state.inputedNum, userPW:this.state.inputedPW})}>
        确定
        </Text>
        <Text style={styles.bigTextPrompt}
      onPress={this.userPressAddressBook}>
        通讯录
        </Text>
    </View>
  );
  }
  
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
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