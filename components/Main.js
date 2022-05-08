import React, { Component } from 'react';
import { View, Text, Button, Settings } from 'react-native';
import MyButton from './MyButton';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { Platform } from 'react-native';
import * as json from './Settings.json';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        login: '',
        password: ''
    };
  }

    register = async () => {
        let data = {login:this.state.login, password:this.state.password}
        data = JSON.stringify(data)
        const res = await ( await fetch("http://" + json.address + ":" + json.port + "/", {    
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: data,
        })).json()
        if(res == "err"){
            alert("Proszę podać login i hasło")
        }else if(res == "error"){
            alert("Taki użytkownik już istnieje")
        }else if(res == "complete"){
            alert("Poprawnie zarejestrowano")
        }
        this.setState({
            login: '',
            password: ''
        })
    }

  render() {
    return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View style={styles.v}>
        <View style={styles.v1}>
            <Text style={styles.vtext}>Register-App</Text>
        </View>
        <View style={styles.v2}>
            <TextInput
                style={styles.input}
                placeholder="Login"
                onChangeText={(value =>
                    this.setState({
                        login: value
                    }))}
                value={this.state.login}
            />
            <TextInput
                secureTextEntry={true}
                style={styles.input}
                placeholder="Password"
                onChangeText={(value =>
                    this.setState({
                        password: value
                    }))}
                value={this.state.password}
            />
            <MyButton 
                style={styles.bt}
                textstyle={styles.bttext}
                text="Register" 
                func={() => this.register()}
            >
            </MyButton>
            <MyButton 
                style={styles.bt}
                textstyle={styles.bt2text}
                text="Admin Page" 
                func={() => {
                    this.setState({
                        login: '',
                        password: ''
                    })
                    this.props.navigation.navigate("Admin Page")
                }}
            >
            </MyButton>
        </View>
      </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    v: {
        flex: 1,
        backgroundColor: "#47ffcc",
    },
    vtext: {
        fontSize: 50,
        color: "#636363",
        fontWeight: 'bold',
    },
    v1: {
        flex: 1,
        backgroundColor: "#47ffcc",
        justifyContent: 'center',
        alignItems: 'center'
    },
    v2: {
        flex: 2,
        backgroundColor: "#636363",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bt: {
        margin: '4%',
        width: '30%',
        padding: 10,
        backgroundColor: "#47ffcc",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    bt2text: {
        fontSize: 15,
        color: "#636363",
        fontWeight: 'bold',
    },
    bttext: {
        fontSize: 20,
        color: "#636363",
        fontWeight: 'bold',
    },
    input: {
        textAlign: 'center',
        margin: '4%',
        width: '60%',
        backgroundColor: "#47ffcc",
        fontSize: 20,
        borderRadius: 20,
        padding: 10,
        color: "#636363",
        fontWeight: 'bold',
    }
 })