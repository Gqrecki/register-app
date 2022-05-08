import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import * as json from './Settings.json';
import { Image } from 'react-native';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
        login: '',
        password: '',
        time: ''
    };
  }

  componentDidMount(){
      this.xd()
  }

  xd = async() => {
    var data = JSON.stringify({login : this.props.route.params.user})
    const res = await ( await fetch("http://" + json.address + ":" + json.port + "/details", {    
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: data,
    })).json()
    this.setState({
        login: this.props.route.params.user,
        password: res[0].password,
        time: res[1].time
    })
  }

  render() {
    return (
      <View style={styles.con}>
          <View style={styles.container}>
          <Image style={styles.img} source={require('./img.png')}></Image>
          <View style={styles.v}>
          <Text style={styles.vtext}> {this.state.login} </Text>
          </View>
          <View style={styles.v}>
          <Text style={styles.vtext}> {this.state.password} </Text>
          </View>
          <View style={styles.v}>
          <Text style={styles.vtext}> {this.state.time} </Text>
          </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    con: {
        flex: 1,
        backgroundColor: '#47ffcc'
    },
    container: {
      flex: 1,
      backgroundColor: '#636363',
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      alignItems: 'center',
      alignContent: 'center',
    },
    img: {
        marginTop: '20%',
        marginBottom: '5%',
        height: 100,
        width: 100
    },
    txt: {
        textAlign: 'center',
        backgroundColor: "#47ffcc",
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5%',
        width: '35%',
        padding: 10,
        backgroundColor: "#47ffcc",
        borderRadius: 20
    },
    v: {
        margin: '4%',
        width: '35%',
        padding: 10,
        backgroundColor: "#47ffcc",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    vtext: {
        textAlign: 'center',
        fontSize: 15,
        color: "#636363",
        fontWeight: 'bold',
    },
 })
