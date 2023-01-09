import { useState } from "react"
import { Image, Modal, Text, View } from "react-native"



 export default  Description=({navigation})=>
{
     const [position,setPosition]= useState("android developer")
    return ( <View style={{backgroundColor:'blue', flexDirection:'column', flex:1

    }}>
        
        < View style={{ backgroundColor:'white' ,justifyContent:'center' ,flex:1.5
        ,alignItems:'center' , borderBottomLeftRadius:40, borderBottomRightRadius:40
    }}>
            <Image source={(require("../assets/wimobi.png"))  } />
             <Text style={{fontSize:22,fontWeight:'bold'}} onPress={()=>setPosition("web")} >{position}</Text>
             <Text style={{marginTop:10,color:'grey',fontSize:20}}> mahdia</Text>

            
         </View>

         <View style={{ marginStart:15, fontSize:50 ,backgroundColor:"blue", flex:2,marginEnd:15}} > 

            <Text style={{marginTop:18,fontSize:25,color:'white'}} >Descriptions</Text>
            <Text style={{marginTop:18,fontSize:16,color:'white'}}>As a Software Engineer, you’ll work on cutting-edge technologies to design, scale, and maintain our backend architecture. Backend is a core part of the TUI Musement’s business, it is used in internal projects as well as external-facing ones. Our main application is based on multiple microservices, taking advantage from different technologies.</Text>

            <Text  style={{alignSelf:'stretch',marginTop:35,fontSize:22 ,
             textAlign:'center',backgroundColor:'#FFC55C',marginStart:20,marginEnd:40,borderRadius:35,paddingTop:20,paddingBottom:20 }} onPress={()=>navigation.navigate("Apply")}  >Apply for this job</Text>
            

         </View>

         </View>
    )

}

