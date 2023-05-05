import React, { Component, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import axios from 'axios';
import { APIMaster } from '../API/APIMaster';
import {LoginData} from './../Redux/LoginData'
import {DotIndicator} from 'react-native-indicators';
import {Header,Icon,Avatar,ListItem} from 'react-native-elements'
import Headers from '../Components/Headers';
import Textinputs from '../Components/Textinputs'
var moment = require('jalali-moment');
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from "react-native-responsive-screen";
import { FloatingAction } from "react-native-floating-action";
import CenterModal from '../Components/CenterModal';
import CustomModals from '../Components/CustomModal';



const  MyTickets =(props)=> {
    const[dataSource,setdataSource] = useState(null)    
    const[Priority,setPriority] = useState([{id:'0',title:'کم'},{id:'1',title:'متوسط'},{id:'2',title:'زیاد'}])    
    const [showIndicator,setshowIndicator] = useState(false)
    const [Title,setTitle] = useState('')
    const [SelectedId,setSelectedId] = useState(-1)

    const [SelectedName,setSelectedName] = useState('')
    const [Message,setMessage] = useState('')
    const [Counter,setCounter] = useState(1)
    const[showModals,setshowModals] = useState(false)
    const[showModalType,setshowModalType] = useState(false)


    let GellALLMYTickets=()=>{
      console.log('tickets')
      var axiosConfig = {
        headers:{
          'Authorization' : LoginData.type + ' ' + LoginData.token
                }
       }
      setshowIndicator(true)
      axios.get(APIMaster.URL + APIMaster.Ticket.GetAllMyTikets,axiosConfig)
      .then( (response)=> {
  
         console.log('chats success',response.data.result.data)
         setshowIndicator(false)
         setdataSource(response.data.result.data)
       
      }
      ).catch( (error)=> {
        setshowIndicator(false)
        if(error.response.status == 401)
        {
          LoginData.lastPage='WorkSpaces' 
          props.navigation.replace('Login')
        }
        else
        {
          //setdataSource(response.data)
        console.log('ticket Error',error)  
        }
      })
    }



    let sendTickets=()=>{
      console.log('tickets')
      var axiosConfig = {
        headers:{
          'Authorization' : LoginData.type + ' ' + LoginData.token,
          "Content-Type": "application/json-patch+json",
          "accept": "*"
                }
       }
       var params={
        "title": Title,
        "priorityStatus": Number(SelectedId),
        "startText": Message
       }
       console.log('params',params)
      setshowIndicator(true)
      axios.post(APIMaster.URL + APIMaster.Ticket.AddTiket,params,axiosConfig)
      .then( (response)=> {
  
        //  console.log('chats success',response.data.result.data)
         setCounter(Counter+1)
      }
      ).catch( (error)=> {
        if(error.response.status == 401)
        {
          LoginData.lastPage='WorkSpaces' 
          props.navigation.replace('Login')
        }
        else
        {
          //setdataSource(response.data)
        console.log('ticket Error',error)  
        Alert.alert('اخطار',error.response.data.errors[0])  
        }
      })
    }

   useEffect(()=>{

      GellALLMYTickets()
     
    
   },[Counter])



   let DataModal = 
<ScrollView>
<View style={{width:'100%',height:('5%'),marginBottom:20}}>
  <Text style={{fontFamily:'Digikala',color:'#EA5455',
  fontSize:wp('3.5%'),paddingLeft:10,paddingTop:5}}>پشتیبانی</Text>
 </View>


<Textinputs
   changeText = {(value)=> setTitle(value)}
   values = {Title}
   Title='عنوان'
   TitleStyle={{fontSize:wp('3.5%'),color:'black',paddingLeft:15,paddingTop:5,marginTop:10,fontFamily:'Digikala'}}
   Edit={true}
   TextStyle={{color:'black',textAlign:'right',width:'80%',marginHorizontal:'10%',
   fontSize:wp('3.5%'),backgroundColor:'white',borderWidth:0.5,borderColor:'black',fontFamily:'Digikala'}}
 />

 <Textinputs
  //  changeText = {(value)=> setSelectedId(value)}
   values = {SelectedName}
   Title='درجه اهمیت'
   TitleStyle={{fontSize:wp('3.5%'),color:'black',paddingLeft:15,paddingTop:5,marginTop:10,fontFamily:'Digikala'}}
   Edit={false}
   TextStyle={{color:'black',textAlign:'right',width:'80%',marginHorizontal:'10%',
   fontSize:wp('3.5%'),backgroundColor:'white',borderWidth:0.5,borderColor:'black',fontFamily:'Digikala'}}
   TextPress={()=>{setshowModalType(true)}}

 />

  <Textinputs
   changeText = {(value)=> setMessage(value)}
   values = {Message}
   Title='متن پیام'
   TitleStyle={{fontSize:wp('3.5%'),color:'black',paddingLeft:15,paddingTop:5,marginTop:10,fontFamily:'Digikala'}}
   Edit={true}
   TextStyle={{color:'black',textAlign:'right',textAlignVertical:'top',width:'80%',marginHorizontal:'10%',
   fontSize:wp('3.5%'),backgroundColor:'white',borderWidth:0.5,borderColor:'black',fontFamily:'Digikala'}}
   TouchStyle={{height:hp('20%')}}
   multiline={true}

 />

   <View style={{alignItems:'center',justifyContent:'center',marginTop:30}}>
    <TouchableOpacity style={{width:'80%',height:hp('5%'),
    marginHorizontal:'10%',alignItems:'center',justifyContent:'center',borderRadius:10,elevation:5
    ,backgroundColor:'white'}}
    onPress={()=>{
      if(Title != '' && SelectedId != -1)
      {
      sendTickets()
      setshowModals(false)
      }
      else
      {
        Alert.alert('اخطار','لطفا همه موارد را پرکنید')
      }

    }}
    >
        <Text style={{color:'#f77',fontSize:wp('4%'),fontFamily:'Digikala'}}>افزودن درخواست</Text>
    </TouchableOpacity>
   </View>

 </ScrollView>



  let renderItem = ({item}) => {

    return (

      <TouchableOpacity style={{width:wp('90%'),height:hp('15%'),
      marginTop:10,marginHorizontal:wp('5%'),
      elevation:2,borderRadius:10,overflow:'hidden'}}
      
      onPress={()=>{props.navigation.navigate('SupportChats',{TicketId:item.id})}}
      >
      <ListItem style={{width:('100%'),height:'100%'
  }}>
  <Avatar
    size={wp('20%')}
     icon={{name: 'question-circle-o',color: 'grey', type: 'font-awesome'}}
     overlayContainerStyle={{backgroundColor: 'grey',
     borderRadius:wp('10%'),opacity:0.5}}
    //  activeOpacity={0.7}
  />
  <ListItem.Content>
    <ListItem.Title style={{fontFamily:'Yekan',fontSize:wp('3.5%'),marginBottom:10}}>{item.title}</ListItem.Title>
    <ListItem.Title style={{fontFamily:'Yekan',fontSize:wp('3%')}}>{moment(item.createDate, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD').toString()}</ListItem.Title>
  </ListItem.Content>
  </ListItem>
      </TouchableOpacity>
  
    );
  }

    return(
       <View style={{ flex: 1 }} >
          
          <Headers TitleScreen='پشتیبانی' ShowHeader={false} navigation={props.navigation} showLinear={true}/>

          {
     showIndicator &&
     <DotIndicator color='#ef7145' size={13} count={4} />
   }
        <FlatList 
          data={dataSource}
          keyExtractor = {(item) => {
            return item.id;
          }}
          renderItem={renderItem}/>



       <FloatingAction
onPressMain={() => {
  setTitle('')
  setSelectedId(-1)
  setSelectedName('')
  setMessage('')
  setshowModals(true)
}}
position='right'
color='#ea5455'
showBackground={showModals}

/>


<CustomModals showModal={showModals}
  closeModal={()=>setshowModals(false)}
   ModalData={DataModal}
  />


        <CenterModal showModal={showModalType} 
       closeModal={()=>setshowModalType(false)}  dataSource={Priority}
       ModalStyle={{width:'60%',marginRight:'20%',marginLeft:'20%'}}
       ViewStyle={{height:hp('50%'),backgroundColor: 'white',
       borderRadius: 10,borderColor: 'white',width:'100%'}}
       ItemTitle='Title'
       CategorySelected={SelectedName}  setCategorySelected={setSelectedName}
       CategorySelectedId={SelectedId}  setCategorySelectedId={setSelectedId}
        />
  
      </View>
    )
  
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#dcdcdc',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
    // justifyContent: 'space-between',

  },
  pic: {
    borderRadius: 50,
    width:100,
    height: 100,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('55%'),
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 15,

  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  end: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontWeight: '400',
    color: '#666',
    fontSize: 12,

  },
  icon:{
    height: 28,
    width: 28, 
  }
});

export default  MyTickets;