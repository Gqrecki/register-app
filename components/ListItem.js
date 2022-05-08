import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import MyButton from './MyButton';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.v1}>
        <Image style={styles.img} source={require('./img.png')}></Image>
        <Text style={styles.user}>{this.props.user}</Text>
        </View>
        <View style={styles.v2}>
        <MyButton style={styles.bt} textstyle={styles.text} text={"Details"} func={this.props.det}></MyButton>
        <MyButton style={styles.bt2} textstyle={styles.text} text={"Delete"} func={this.props.del}></MyButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: "#636363",
        width: '90%',
        borderRadius: 20,
        padding: 10,
        margin: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    img: {
        height: 40,
        width: 40,
        marginRight: 10,
    },
    user: {
        marginRight: 10,
        color: "#47ffcc",
        fontSize: 20,
        fontWeight: 'bold',
    },
    bt: {
        padding: 10,
        backgroundColor: "#47ffcc",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    bt2: {
        marginLeft: 10,
        padding: 10,
        backgroundColor: "#47ffcc",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    text: {
        color: "#636363",
        fontWeight: 'bold',
    },
    v1: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    v2: {
        flexDirection: 'row'
    }
})