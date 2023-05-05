import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, TextInput ,Text,TouchableOpacity, FlatList} from "react-native";

import { Icon }  from "react-native-elements";
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';

const ColorRange=[
  'white', 'white']

export default CenterModals =(props)=>{
        



  
    return ( 
      <>
      {
         props.ItemTitle == 'persianName' ?     
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
                            <LinearGradient colors={ColorRange} 
                            style={{
                            borderRadius: 10,borderWidth:0.5,
                            borderColor: 'white',width:'100%',elevation:5,height:'100%'}}> 
                <FlatList
               data = {props.dataSource}
               renderItem={({item,index})=>
         
                            <TouchableOpacity style={{justifyContent:'center',
                            alignItems:'center'
                            ,height:60,borderRadius:10,
                            borderWidth:1,marginBottom:5,borderColor:'grey'
                            ,width:'80%',marginHorizontal:'10%',marginTop:10,
                            backgroundColor:item.id == props.CategorySelectedId 
                   ? 'black' : 'transparent' 
                           }}
                            onPress={()=>{
                              props.setCategorySelectedId(item.id)
                              props.setCategorySelected(item.persianName)
                             props.closeModal()
                           }}
                             
                            >  
                            <Text style={{color: item.id == props.CategorySelectedId ? 'white' : 'black'
                            ,fontSize:wp('3%')}}>{item.persianName}</Text>
                              </TouchableOpacity>  
             }
         />
         </LinearGradient>
         </View>
         
         </Modal> 
         :
        props.ItemTitle != 'Title' ?     
<Modal isVisible={props.showModal} style={[{justifyContent: 'center',
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
                   <LinearGradient colors={ColorRange} 
                   style={{
                   borderRadius: 10,borderWidth:0.5,
                   borderColor: 'white',width:'100%',elevation:5,height:'100%'}}> 
           {/* <View style={{width:'60%',marginLeft:'20%'
           ,marginRight:'20%',height:50,marginTop:5,marginBottom:10
           }}>
           <TextInput
          placeholder="جستجو"
          style={{width:'100%',borderRadius: 5,color:'black',
          borderWidth:1, borderColor: 'grey'}}
          placeholderTextColor='grey'
           />
           </View> */}

       <FlatList
      data = {props.dataSource}
      renderItem={({item,index})=>

                   <TouchableOpacity style={{fontFamily:'Yekan',justifyContent:'center',
                   alignItems:'center'
                   ,height:60,borderRadius:10,
                   borderWidth:1,marginBottom:5,borderColor:'grey'
                   ,width:'80%',marginHorizontal:'10%',marginTop:10,
                   backgroundColor:item.id == props.CategorySelectedId 
                   ? 'black' : 'transparent' 
                   
                  }}
                   onPress={()=>{
                     props.setCategorySelectedId(item.id)
                     props.setCategorySelected(item.name)
                    props.closeModal()
                  }}
                    
                   >  
                   <Text style={{fontFamily:'Digikala',color: item.id == props.CategorySelectedId ? 'white' : 'black'
                   ,fontSize:wp('3%')}}>{item.name}</Text>
                     </TouchableOpacity>  
    }
/>
</LinearGradient>
</View>

</Modal>

:

<Modal isVisible={props.showModal} style={[{justifyContent: 'center',
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
                   <LinearGradient colors={ColorRange} 
                   style={{
                   borderRadius: 10,borderWidth:0.5,
                   borderColor: 'white',width:'100%',elevation:5,height:'100%'}}> 
           {/* <View style={{width:'60%',marginLeft:'20%'
           ,marginRight:'20%',height:50,marginTop:5,marginBottom:10
           }}>
           <TextInput
          placeholder="جستجو"
          style={{width:'100%',borderRadius: 5,color:'black',
          borderWidth:1, borderColor: 'grey'}}
          placeholderTextColor='grey'
           />
           </View> */}
       <FlatList
      data = {props.dataSource}
      renderItem={({item,index})=>
                   <TouchableOpacity style={{fontFamily:'Yekan',
                   justifyContent:'center',
                   alignItems:'center'
                   ,height:60,borderRadius:10,
                   borderWidth:1,marginBottom:5,borderColor:'grey'
                   ,width:'80%',marginHorizontal:'10%',marginTop:10,
                   backgroundColor:item.id == props.CategorySelectedId 
                   ? '#0ab076' : 'transparent' 
                  }}
                   onPress={()=>{
                    props.setCategorySelectedId(item.id)
                    props.setCategorySelected(item.title)
                    props.closeModal()
                  }}>  
                   <Text style={{fontFamily:'Digikala',color: item.id == props.CategorySelectedId ? 'white' : '#0ab076'
                   ,fontSize:wp('3%')}}>{item.title}</Text>
                     </TouchableOpacity>  
    }
/>
</LinearGradient>
</View>

</Modal>


}



</>

    );
  }


