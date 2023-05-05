import React, { Component } from "react";
import { StyleSheet, View, TextInput ,Text,TouchableOpacity,Image} from "react-native";
import { Icon,Avatar }  from "react-native-elements";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import RoundList from './RoundList'
export default  ServiceCard=(props)=>  {
    const item = props.items;
    return (
<TouchableOpacity style={styles.PopularStyle}
         onPress={()=>{

            //  props.navigation.navigate('Profile',{userId:item.userId})

         }}
         >

<View style={{width:'100%',height:'70%'
,flexDirection:'row-reverse'}}>
  <View style={{width:'30%',height:'100%'
  ,justifyContent:'flex-start',padding:5}}>
<View style={{width:'100%',height:'80%',justifyContent:'center',alignItems:'center'}}>
 <Avatar
 rounded
 size='large'
 containerStyle={{borderWidth:0.5,marginTop:4}}
 source={props.ImageAddress}
 />
 <Text style={{fontFamily:'Digikala',fontSize:wp('3.5%'),paddingTop:10,textAlign:'center'
 ,justifyContent:'center',alignItems:'center',color:'black'}} numberOfLines={1} >{item.name + ' ' + item.lastName }</Text>
 </View>
 <View style={{ flexDirection: 'row',marginLeft:10,width:'80%',height:'30%',justifyContent:'center',alignItems:'center'}}>       
 
  <Text style={{fontFamily:'Digikala', paddingTop:2,color: 'black'
  ,fontSize:wp('3%')}}>{item.starCount}</Text>
   <Icon name='star' color='yellow' size={wp('5%')}/>
 </View>

</View>


 <View style={{width:'55%',height:'100%',padding:5
 }}>
   <View style={{height:'40%',width:'100%'
   ,alignItems:'flex-end'
   }}>  
     {
        <RoundList ShowIcon={true}   
        disable={true}
          IconSize={15} 
         Title={ item.serviceTypes == 0 ? "چت"
              :
              item.serviceTypes == 1 ?"تماس تصویری"
              : 
               "تماس صوتی"
              
 }
         IconType ={  item.serviceTypes == 0 ? "font-awesome" 
              :
              item.serviceTypes == 1 ?"font-awesome"
              : 
               "font-awesome"
         
         }
         IconColor='white'
         ImageIcon = { item.serviceTypes == 0 ? "comment"
              :
              item.serviceTypes == 1 ?"video-camera"
              : 
              "phone" 
              }

         ButtonStyle={{borderWidth:1,width:'auto'
        ,borderRadius:20,borderColor:item.serviceTypes == 0 ? '#5a8cff'
        :
        item.serviceTypes == 1 ?'#00b552'
        : '#ce7fff'
        
       ,backgroundColor:item.serviceTypes == 0 ? '#5a8cff'
       :
       item.serviceTypes == 1 ?'#00b552'
       : '#ce7fff'
       ,
        paddingLeft:wp('2%'),paddingRight:wp('2%'),margin:5,padding:wp('1%')
        ,flexDirection:'row'}}
       TitleStyle={{fontSize:wp('2.5%'),textAlign:'center',color:'white'}}
       
       />


              
                   }
   
    </View>
    <View style={{height:'63%',width:'100%'
   }}>
       <Text style={{fontFamily:'Digikala',color:'gray',fontSize:wp(3.5)}}
       
       >{item.bio}</Text>
    </View>

       </View>

       </View>
       <View style={{width:'90%',
height:1,justifyContent:'center'
,alignItems:'center',alignSelf:'center',borderStyle: 'dotted',
borderRadius: 1,
borderWidth: 1,
borderColor: 'gray',marginVertical:5
}}>

       </View>
<TouchableOpacity style={{width:'100%',
height:'20%',justifyContent:'center'
,alignItems:'center',alignSelf:'center'
}}>
   <Icon name='bookmark-border' size={35}/>
          </TouchableOpacity>

</TouchableOpacity>


    )
}

const styles = StyleSheet.create({
    container: 
        {
        flex: 1
        },
      TitleScreenStyle:
      {
      width:wp('90%'),marginLeft:wp('5%'),marginRight:wp('5%'),marginTop:hp('8%')
      },
      TitleScreenStyle1:
      {
      width:wp('90%'),marginLeft:wp('5%'),marginRight:wp('5%'),marginTop:hp('2%')
      },
  TopScreenStyle:
      {
      width:wp('100%'),height:hp('10%')
      },
  PopularStyle:
      {
      width:wp('94%'),height:hp('30%'),marginLeft:wp('3%')
     ,marginRight:wp('3%'),borderRadius:10
     ,borderWidth:0.4,borderColor:'grey'
     ,marginTop:5,marginBottom:10
      },
  PopularItemStyle:
      {
      width:'50%',height:'100%',justifyContent:'center'
      },
  PopularListStyle:
      {
          flexDirection:'row',justifyContent:'space-between',height:'45%',width:'100%'
      }
      })

