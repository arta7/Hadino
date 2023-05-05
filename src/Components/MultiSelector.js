import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, TextInput ,Text,TouchableOpacity, FlatList} from "react-native";

import { Icon }  from "react-native-elements";
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';


const Data =[]

export default MultiSelector =(props)=>{
       
  const[Count,setCount] =useState(0)

    useEffect(()=>{

    },[Count])

  
    return ( 

         <Modal isVisible={props.showModal} 
         style={[{justifyContent: 'center',
         width:'90%'
         ,marginRight:'5%',marginLeft:'5%'
                        },props.ModalStyle]}
                        onBackdropPress={props.closeModal}
                       >
             
                         <View style={[{
                         borderRadius: 10,
                         borderColor: 'white',
                         height:450,width:'100%'
                         },props.ViewStyle]}>
                          
               <TouchableOpacity style={{width:50,height:40,borderRadius:10,borderColor:'grey',justifyContent:'center',
               alignItems:'center',backgroundColor:'#0ab076',borderWidth:0.4,margin:10}}
               onPress={props.closeModal}
               >
                  <Text style={{textAlign:'center',color:'white',fontFamily:'Digikala'}}>تایید</Text>
               </TouchableOpacity>



                <FlatList 
            data={props.dataSource}
            renderItem={({item,index})=>
           
                <TouchableOpacity 
                style={{ alignSelf:"center",width:'80%',height:50,
                borderRadius:10,backgroundColor:
                props.selectedItem.filter(a=>a.id == item.id).length>0 ? '#0ab076':'transparent',
                borderColor:'gray',borderWidth:0.4,margin:10,justifyContent:'center',marginHorizontal:'10%'}} 
                onPress={()=>{
                  var con=false;
                  for( var i = 0; i < props.selectedItem.length; i++){
                       
                    if (props.selectedItem[i].id == item.id) {
                      props.data.splice(i, 1);
                      console.log('data',props.data)
                      props.setselectedItem(props.data)
                      setCount(Count+1)
                      con =true;
                    }
                  }
                  if(con == false)
                  {
                    props.data.push({id:item.id,title:item.title})
                  console.log('data1',props.data)
                  props.setselectedItem(props.data)
                  setCount(Count+1)
                  }
                }}
                >
                 <Text style={{textAlign:'center',fontFamily:'Digikala',color: props.selectedItem.filter(a=>a.id == item.id).length>0 ? 'white':'black',
            fontSize:wp('3%')}}>{item.title}</Text>
                </TouchableOpacity>
            }
              />  


          

                   </View>
         
         </Modal> 
         


    )
  }


