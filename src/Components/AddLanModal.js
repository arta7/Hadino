import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, TextInput ,Text,TouchableOpacity,Switch} from "react-native";
import {  Picker } from 'native-base';
import { Icon }  from "react-native-elements";
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import TextInputs from "./Textinputs";


export default AddLanModal =(props)=>{

    const[lan,setlan] = useState('')
    const[choosenIndex,setchoosenIndex] = useState(-1)  
    
    return ( 
    
<Modal isVisible={props.showModal} style={[{justifyContent: 'center',
width:wp('80%')
,marginRight:'10%',marginLeft:'10%',
               },props.ModalStyle]}
               onBackdropPress={props.closeModal}
              >
    
                <View style={[{
                borderRadius: 10,
                borderColor: 'white',
                height:'auto',padding:20,width:'100%',backgroundColor:'white'
                },props.ViewStyle]}>
                

                {/* <TextInputs
       Title = 'زبان خارجی '
       changeText = {(v)=>{props.setValue(v)}}
       values = {props.value}
       secure={false}
       TextStyle={styles.TextStyles}
       ErrorTitleStyle={{marginLeft:'10%'}}
       TitleStyle={styles.titleStyles}
       Edit={true}
     /> */}

<Picker style={styles.titleStyles}  
                        selectedValue={lan}  
                        onValueChange={(itemValue, itemPosition) =>  
                          {
                            setchoosenIndex(itemPosition)
                            setlan(itemValue)
                          }
                        }
                        mode="dropdown"
                    >  

                    <Picker.Item label="انگلیسی" value="English" />  
                    <Picker.Item label="فرانسوی" value="France" />  
                    <Picker.Item label="اسپانیایی" value="Spanish" />  
                    <Picker.Item label="آلمانی" value="Germany" /> 
                    <Picker.Item label="روسی" value="Russi" /> 
                    <Picker.Item label="چینی" value="China" /> 
                    <Picker.Item label="عربی" value="Arabic" /> 
                    <Picker.Item label="ترکی" value="Turkish" /> 

                </Picker>  

<View style={styles.switchMainView}>
           <View style={{width:'70%',marginHorizontal:wp('5%')}}>
          
             <Text style={styles.textStyle}>مکالمه</Text>
             </View>
           <View style={{width: '25%'}}>
           <Switch  
            value={props.Conversation}  
            onValueChange ={(switchValue)=>{
              props.setConversation(!props.Conversation)     
            }}
             style={{}}
            thumbColor= {'white'}
            trackColor ={{ false: "#0ab076", true: "gray" }}
           /> 
           </View>
         </View>

         <View style={styles.switchMainView}>
           <View style={{width:'70%',marginHorizontal:wp('5%')}}>
          
             <Text style={styles.textStyle}>ترجمه عمومی</Text>
             </View>
           <View style={{width: '25%'}}>
           <Switch  
            value={props.GeneralTra}  
            onValueChange ={(switchValue)=>{
              props.setGeneralTra(!props.GeneralTra)     
            }}
             style={{}}
            thumbColor= {'white'}
            trackColor ={{ false: "#0ab076", true: "gray" }}
           /> 
           </View>
         </View>

         <View style={styles.switchMainView}>
           <View style={{width:'70%',marginHorizontal:wp('5%')}}>
          
             <Text style={styles.textStyle}>ترجمه تخصصی</Text>
             </View>
           <View style={{width: '25%'}}>
           <Switch  
            value={props.PrivateTra}  
            onValueChange ={(switchValue)=>{
                props.setPrivateTra(!props.PrivateTra) 
            }}
             style={{}}
            thumbColor= {'white'}
            trackColor ={{ false: "#0ab076", true: "gray" }}
           /> 
           </View>
         </View>


         <TouchableOpacity style={{width:('80%'),height:50,justifyContent:'center'
            ,alignItems:'center',borderRadius:10,elevation:1,
            borderColor:'white',alignSelf:'center',marginHorizontal:('10%'),marginBottom:'10%'}}
            onPress={()=>{
             

            }}>
               <Text style={{fontFamily:'Digikala',textAlign:'center',color:'#0ab076',fontSize:wp('4%')}}>افزودن</Text>
            </TouchableOpacity>

</View>
</Modal>
    );
  }


  const styles = StyleSheet.create({
    container: 
        {
        flex: 1,marginBottom:20,marginTop:20
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
      width:wp('70%'),height:hp('25%'),marginLeft:wp('5%')
     ,marginRight:wp('5%'),borderRadius:5,borderWidth:1,borderColor:'gray',padding:10,marginBottom:20
      },
  PopularItemStyle:
      {
      width:'50%',height:'100%',justifyContent:'center'
      },
  PopularListStyle:
      {
          flexDirection:'row',justifyContent:'space-between',height:'50%',width:'100%'
      },
      voiceMsgContainer: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        flexDirection: "row",
        marginVertical: 5,
        elevation: 2,
        borderRadius: 14,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
      },
    
      modalContainer: {
        backgroundColor: "white",
        borderRadius: 10,
        width: "80%",
        alignSelf: "center",
        height: 140,
      },
      modalInner: {
        flex: 1,
        justifyContent: "space-around",
        padding: 15,
      },
      modalBtn: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
      modalBtnText: {
        fontSize:10,
        color: "#0B7CC1",fontFamily:'Digikala'
      },
      line: {
        backgroundColor: "#ddd",
        width: "100%",
        height: 1,
      },
      TextStyles:
      {
        textAlign:'right',color:'black',
        fontSize:wp('4%'),borderWidth:0.5,borderColor:'black',marginLeft:'10%',marginRight:'10%',fontFamily:'Digikala'
      },
      titleStyles:
      {
        marginRight:'10%'
      },
      switchMainView:
      {
         marginVertical:15, width: '100%', flexDirection: 'row-reverse'
       },
       textStyle:
       {
        color:'black',textAlignVertical: 'center', fontSize: wp('4%'),fontFamily:'Digikala'
      }
  
  
      })


