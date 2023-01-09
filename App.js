import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import { Login } from './components/Login';
import { RecruiterOrLookForJob } from './components/RecruiterOrLookForJob';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dashbord } from './components/Dashbord';
import { Jobs } from './components/Jobs';
import Description, { Descrition } from './components/Description';
import Apply from './components/Apply';


const Stack = createNativeStackNavigator();

export const  AwesomeProject=()=> {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name=" "
          options={{headerShown: false , headerTintColor:'blue'}}
          component={RecruiterOrLookForJob}
        />
        <Stack.Screen name="Login" component={Login} 
         options={{headerShown: false}}
                 
  />
        <Stack.Screen name="Dashbord" component={Dashbord} options={{ headerTintColor:'white' , headerStyle:{backgroundColor:'blue'}} } />
        <Stack.Screen name="Job" component={Jobs} options={{ headerTintColor:'white' , headerStyle:{backgroundColor:'blue'}} } />
        <Stack.Screen name="Description" component={Description} options={{ headerTintColor:'white' , headerStyle:{backgroundColor:'blue' }} } />
        <Stack.Screen name="Apply" component={Apply} options={{ headerTintColor:'white' , headerStyle:{backgroundColor:'blue' }} } />



      </Stack.Navigator>
    </NavigationContainer>
  )
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:30,
    backgroundColor: '#0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
export default AwesomeProject
