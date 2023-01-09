import { FlatList, Image, ScrollView, Text, Touchable, TouchableOpacity, View } from "react-native"

export const Jobs=({navigation})=>
{
 const data =[{id:1,position:"web developer",contractType:"internship",img:require('../assets/wimobi.png')} , {id :2,position:"web developer" , contractType:"full time",salary:8770,img:require('../assets/anypli.png')},{id:3,position:"ios developer", contractType:"part time",salary:1700,img:require('../assets/anypli.png')},{id:4,position:"android developer" , contractType:"cdd",salary:2000,img:require('../assets/anypli.png')}
,{id:5,position:"data scientist" , contractType:"full time",salary:10000,img:require('../assets/proxym.png')}
]
 const renderItem= (props)=>{ 


    return (<TouchableOpacity 
    style={{backgroundColor:'white' , borderWidth:1, height:200
    , borderRadius:25,backgroundColor:'#e0e0e0',marginTop:5 }} 
    onPress={()=> navigation.navigate("Description") } >
    <View style={{flexDirection:'row' }}  >
    <Image   source ={props.item.img} style={{marginTop:7 , marginStart:8}}  />
    <Text style={{textAlignVertical:'center' , marginStart:8,
     fontSize:24, fontWeight:'bold',  borderRadius:20, } }   > {props.item.position}</Text>
    </View>
    <View style={{flexDirection:'row', marginStart:30,marginTop:20}}>
      <Text style={{fontSize:18 , borderRadius:20,backgroundColor:'white',paddingStart:4,paddingEnd:4}}>{props.item.contractType}</Text> 
       
                       
                     { props.item.contractType!="internship"    &&      <Text style={{fontSize:18 , borderRadius:20,backgroundColor:'white',paddingStart:4,paddingEnd:4,marginStart:8}}> {props.item.salary + " dt"} </Text>  }

               
            
       
    </View>

    <View >
      


    </View>
    </TouchableOpacity>

    

) }
return ( 

    <View>
  
    <View style={{paddingStart:15, paddingEnd:15,}}>

    <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

         
    </View>

    </View>
)
}