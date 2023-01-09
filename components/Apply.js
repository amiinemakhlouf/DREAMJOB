import { useState } from "react"
import { Text, TextInput, ToastAndroid, View } from "react-native"

export default Apply =()=>
{
    const [email,setEmail]=useState("")
    const [description,,setDescription]=useState("")
    const [years,setYears]=useState("")
    const [skills,setSkills]=useState("")




    return ( <View style={{alignItems:"center" , marginTop:35,flex:1 }} >

         <Text style={{fontSize:20,marginTop:-10}}> all fields are required</Text>
           <TextInput onChangeText={(val)=>setEmail(val)} placeholder="email "  style={{borderWidth:1,width:200,height:50,paddingStart:2,marginTop:15}}  />
           <TextInput placeholder=" Describe yourself"  onChangeText={(val)=>setDescription(val)} style={{borderWidth:1,width:200,height:150,marginTop:25,textAlignVertical: 'top'}   }/>
           <TextInput placeholder=" years of experience "  onChangeText={(val)=>setYears(val)} style={{borderWidth:1,width:200,marginTop:25} } keyboardType='number-pad'/>
           <TextInput placeholder=" tell us about your skills " onChangeText={(val)=>setSkills(val)} style={{borderWidth:1,width:200,marginTop:25,height:150,textAlignVertical: 'top'} }/>
           <Text style={{marginTop:40,fontSize:20,borderRadius:50,backgroundColor:"blue",padding:20,color:"white"}  }  onPress={()=>{
            if(email=="" ||description==''|| years==''||skills=='')
            {
                ToastAndroid.show("all fields are required",ToastAndroid.LONG)
            }
           }}> confirm</Text>






    </View>)
}