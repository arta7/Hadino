import React, { Component } from "react";
import { StyleSheet, View, TextInput ,Text,TouchableOpacity,Image} from "react-native";
import { Icon }  from "react-native-elements";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import {ColorRange} from './../Data/StableData';

const Headers =(props)=>{
 
  let openDrawer=()=>{
    props.drawers.current._root.open()
  }
  
  let closeDrawer=()=>{
    props.drawers.current._root.close()
  }



    return (
      <>
       {props.showLinear ?
        
        <View style={{height:hp('12%'),backgroundColor:'white',overflow:'hidden'}}>
        
 <LinearGradient colors={ColorRange} style={{height:('100%')}}>

        <View style={{flexDirection:props.showRightIcon ? 'row' : 'row-reverse',justifyContent:'space-between',height:'40%',width:wp('100%')}}>
          {props.showRightIcon ? 
         <TouchableOpacity style={{margin:5}}
         // onPress={()=>{ props.navigation.push('Search')}}
         >
         <Icon name='search' size={hp('4%')} color='white' />  
         </TouchableOpacity>
:
<TouchableOpacity style={{margin:5}} 
onPress={()=>{props.navigation.goBack()}}
>
<Icon name='arrow-back-sharp' type='ionicon' size={hp('4%')} color='white' 
 
   /> 
</TouchableOpacity>

}
{ props.ShowHeader &&
          
           <TouchableOpacity style={{margin:5}} 
           // onPress={()=>{props.navigation.push('Wallet')}}
           >
           <Icon name='grid' type='entypo' size={hp('4%')} color='white' 
                      /> 
           </TouchableOpacity>
}
        </View>
<View style={styles.TitleScreenStyle}>
  <Text style={{fontFamily:'Digikala',color:'#B00A44',fontSize:wp('5%'),fontWeight:'bold'}}>{props.TitleScreen}</Text>
  </View>
  </LinearGradient>
  </View>
  
:
<View style={{height:hp('12%'),backgroundColor:'white',overflow:'hidden'}}>
<View style={{ flexDirection:!props.showRightIcon ? 'row' : 'row-reverse',justifyContent:'space-between',height:'40%',width:wp('100%')}}>
{props.showRightIcon  ? 
         <TouchableOpacity style={{margin:5}}
         // onPress={()=>{ props.navigation.push('Search')}}
         >
         <Icon name='search' size={hp('3.5%')} color='#B00A44' />  
         </TouchableOpacity>
:
<TouchableOpacity style={{margin:5}}
onPress={()=>{props.navigation.goBack()}}
>
<Icon name='arrow-back-sharp' type='ionicon' size={hp('3.5%')} color='#B00A44' 
  
   /> 
</TouchableOpacity>

}
{ props.ShowHeader &&

 <TouchableOpacity style={{margin:5}} 
 onPress={()=>{openDrawer()}}
 >
 <Icon name='grid' type='entypo' size={hp('4%')} color='#B00A44' 
   
    /> 
 </TouchableOpacity>
}
</View>
<View style={styles.TitleScreenStyle}>
<Text style={{fontFamily:'Digikala',color:'#B00A44',fontSize:wp('5%')}}>{props.TitleScreen}</Text>
</View>
</View>
         }
  </>
    );

}
const  styles= StyleSheet.create({
  TopScreenStyle:{
      flexDirection:'row',justifyContent:'space-between',height:'40%',width:wp('100%')
      
  },
  TitleScreenStyle:{
    height:'60%',width:wp('100%'),paddingHorizontal:20
  }
})
export default Headers;
