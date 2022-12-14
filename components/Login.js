import React from 'react';
import { Image, StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';



export const Login =()=> {


    
        return(
        
         <View style={styles.container1}  >


            <Image source={require('../assets/job.jpg')} style={{
                flex: 1, width: null,
                resizeMode: 'stretch',
                height: 220
            }} />
            <View style={{ flex: 2, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' ,marginTop:45 }} >
                <TextInput style={{ backgroundColor: 'white', color: '#white', height: 60, width: 250, marginTop: 40, borderRadius: 20, textAlign: 'left', textAlignVertical: 'center', fontSize: 20, paddingStart: 8 }} placeholder='email'  />
                <TextInput style={{ backgroundColor: 'white', color: '#white', height: 60, width: 250, marginTop: 60, borderRadius: 20, textAlign: 'left', textAlignVertical: 'center', fontSize: 20, paddingStart: 8 }} placeholder='password' secureTextEntry={true}  />
                <TouchableOpacity
               style={{   backgroundColor:'blue',marginTop:65 , borderRadius:20,width:150,}}
                      > 
                   <Text   style={{textAlign:'center' ,padding:20 ,color:"white"}} >Sign in</Text>
                    </TouchableOpacity>
                    <Text style={{
                        fontWeight:'bold' ,marginTop:42,marginStart:-30
                    }} > not a member : Register now </Text>
                </View>
                
              
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