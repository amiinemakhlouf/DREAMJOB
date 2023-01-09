import React, { Component } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import { Image, StyleSheet, Text, TextInput, View, Button, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


 
 export const  RecruiterOrLookForJob = ({navigation})=> {


    
        return (<View   style={{backgroundColor:'red'}} >

            <StatusBar/>

         <ImageBackground source={require('../assets/job.jpg')   }  resizeMode='stretch'
           style={{width: '100%', height: '100%' , justifyContent:'space-evenly' , backgroundColor:'blue'}}

        >

        
             <TouchableOpacity style={{ alignSelf:'center', backgroundColor:'blue',height:70,borderRadius:20 ,alignItems:'center',justifyContent:'center' ,alignContent:'center',}
            
            }  onPress={()=>navigation.navigate("Login")}
             >

                <Text style={{color:'white' ,  textAlignVertical:'center',fontSize:32, fontStyle:'italic' ,textAlign:'center' , paddingStart:3 }} >I Look for a job </Text>
                
                </TouchableOpacity>   


             <TouchableOpacity style={{ marginStart:15,alignSelf:'center', backgroundColor:'blue',height:70,borderRadius:20 ,alignItems:'center',justifyContent:'center',alignContent:'center',}}  >

              <Text style={{color:'white' ,fontSize:32 , paddingStart:8, fontStyle:'italic',textAlignVertical:'center' ,textAlign:'center'}} onPress={(()=>navigation.navigate('Login'))} >I'm recruiter       </Text>

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