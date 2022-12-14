import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import { Login } from './components/Login';
import { RecruiterOrLookForJob } from './components/RecruiterOrLookForJob';
import { NavigationContainer } from '@react-navigation/native';

  const  AwesomeProject=()=> {
  
  return (<Login/>)

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
