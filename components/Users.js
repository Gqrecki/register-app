import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import ListItem from './ListItem';
import * as json from './Settings.json';
import { FlatList } from 'react-native';

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount(){
    this.xd()
  }

  xd = async() => {
    const res = await ( await fetch("http://" + json.address + ":" + json.port + "/users")).json()
      this.setState({
        users: res
      })
  }

  del = async(user) =>{
    let data = {login:user}
    data = JSON.stringify(data)
    const res = await ( await fetch("http://" + json.address + ":" + json.port + "/del", {    
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: data,
    })).json()
    if(res == "complete"){
      this.xd()
    }
  }

  render() {
    return (
        <View style={styles.con}>
            <View style={styles.container}>
                <FlatList
                  style={styles.flat}
                  data = {this.state.users}
                  renderItem={({ item }) => <ListItem user={item} del={()=>this.del(item)} det={() => this.props.navigation.navigate("Details", {user:item})}></ListItem>}
                  keyExtractor={(item, index) => index.toString()}/>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    con: {
        flex: 1,
        backgroundColor: '#636363'
    },
    container: {
      flex: 1,
      backgroundColor: '#47ffcc',
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      alignItems: 'center',
      alignContent: 'center',
    },
    flat: {
      width: "100%",
      marginLeft: '5%',
      marginTop: '3%'
    }
 })