import React, { Component } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import { Image, StyleSheet, Text, TextInput, View, Button, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


 
 export const  RecruiterOrLookForJob = ({navigation})=> {


    
        return (<View   >

         <ImageBackground source={require('../assets/splash.jpeg')   }
           style={{width: '100%', height: '100%' , justifyContent:'space-evenly'}}

        >

        
             <TouchableOpacity style={{ alignSelf:'center', backgroundColor:'blue',height:70,borderRadius:20 ,alignItems:'center',justifyContent:'center',paddingStart:8,paddingEnd:8 ,alignContent:'center',}
            
            }  onPress={()=>navigation.navigate("Login")}
             >

                <Text style={{color:'white' , textAlignVertical:'center',fontSize:25 }} >I Look for a job </Text>
                
                </TouchableOpacity>   


             <TouchableOpacity style={{ alignSelf:'center', backgroundColor:'blue',height:70,borderRadius:20 ,alignItems:'center',justifyContent:'center',paddingStart:8,paddingEnd:8 ,alignContent:'center',}}  >

              <Text style={{color:'white' , textAlignVertical:'center',fontSize:25,}} >I 'm recruiter </Text>

                    </TouchableOpacity>
            

            
            </ImageBackground>   


            
                
              
        </View>
        )
    }



const styles = StyleSheet.create({

    container1: {
        flex: 1,
        backgroundColor: '#87ceeb',
        flexDirection: 'column',
        alignSelf: 'stretch'
    }

})