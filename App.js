import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { KeyboardAvoidingView } from 'react-native';
import { StyleSheet } from 'react-native';
import Main from './components/Main';
import Users from './components/Users';
import Details from './components/Details';

const Stack = createNativeStackNavigator();

function App() {
  return (
   <KeyboardAvoidingView style={styles.container}>
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen
               name="Register"
               component={Main}
               options={{
                  headerShown: false,
               }} />
            <Stack.Screen 
            name="Admin Page" 
            component={Users}
            options={{
               headerStyle: {
                  backgroundColor: '#636363',
                  elevation: 0,
                  shadowOpacity: 0,
                  borderBottomWidth: 0,
               },
               headerTintColor: '#47ffcc',
               headerTitleAlign: 'center',
               headerTitleStyle: {
                  fontWeight: 'bold',
               },
            }}  />
            <Stack.Screen
            name="Details"
            component={Details}
            options={{
               headerStyle: {
                  backgroundColor: '#47ffcc',
                  elevation: 0,
                  shadowOpacity: 0,
                  borderBottomWidth: 0,
               },
               headerTintColor: '#636363',
               headerTitleAlign: 'center',
               headerTitleStyle: {
                  fontWeight: 'bold',
               },
            }}
            />             
         </Stack.Navigator>
      </NavigationContainer>
   </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
   container: {
     flex: 1
   }
})

export default App