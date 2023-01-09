import { useState } from "react"
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native"

export const Dashbord = ({navigation})=>

{


    return(
        <View style={{alignContent:'space-around' }}>
            <StatusBar/>
            <ScrollView>
            <Text style={{textAlign:'center' , fontSize:25,color:'blue', marginTop:15, fontStyle:'italic',fontWeight:'bold'}} > categories</Text>
            <View style={{flexDirection:'row', justifyContent:'center' ,width:'100%',marginTop:50}}>

             <TouchableOpacity style={{width:150 , height:150 ,backgroundColor:'white'}} onPress={()=>navigation.navigate("Job")} >

                <Image  style={{height:150 , width:300,marginStart:-75}} source={require('../assets/it.png')} />

            
                </TouchableOpacity>

         </View>
         <TouchableOpacity style={{width:150 , height:150 ,backgroundColor:'white' ,marginTop:50}}>
           
         <Image  style={{height:170 , width:300,marginStart:45,marginEnd:45}} source={require('../assets/sales.jpeg')} />


            </TouchableOpacity>


         <TouchableOpacity style={{width:150 , height:150 ,backgroundColor:'white' ,marginTop:50,}}>
           
         <Image  style={{height:150 , width:300,marginStart:45,marginEnd:45}} source={require('../assets/cuisine.jpeg')} />


            </TouchableOpacity>

            <TouchableOpacity style={{width:150 , height:150 ,backgroundColor:'white' ,marginTop:50,}}>
           
         <Image  style={{height:150 , width:300,marginStart:45,marginEnd:45,}} source={require('../assets/images.jpeg')} />


            </TouchableOpacity>

            <TouchableOpacity style={{width:150 , height:150 ,backgroundColor:'white' ,marginTop:50,}}>
           
         <Image  style={{height:150 , width:300,marginStart:45,marginEnd:45,}} source={require('../assets/jardinage.jpg')} />


            </TouchableOpacity>


            <View style={{height:40}}/>

            </ScrollView>

         


        </View>
    )
}
