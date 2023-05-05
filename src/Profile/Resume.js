import React,{useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity, Alert,Image,ActivityIndicator, FlatList
} from 'react-native';
import axios from 'axios';

import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import {Header,Icon} from 'react-native-elements'
import VideoPlayer from 'react-native-video-controls';
import RoundList from '../Components/RoundList';
import {APIMaster} from  './../API/APIMaster'
const data=[]
const Resume =(props)=>{
   const[dataResume,setdataResume] = useState([])


    let GetDegree=(item)=>{
      switch(item)
      {
        case 0 :
        return 'زیر دیپلم'
        case 1 :
        return 'دیپلم'
        case 2 :
        return 'فوق دیپلم'
        case 3 :
        return 'کارشناسی'
        case 4 :
        return 'کارشناسی ارشد'
        case 5 :
        return 'دکتری'
      }
    }


    let   GetProfile=()=>{
      console.log(props.userId)
        axios.get(APIMaster.URL + APIMaster.Profile.GetUserById 
          + '?UserId=' + props.userId)
        .then( (response)=> {
               
          console.log('response.data.result.data')
                console.log(response.data.result.data)  
                setdataResume(response.data.result.data)
                
        })
        .catch( (error)=> {
          console.log(error)  
          //setshowIndicator(false)
         
        })
       }


    useEffect(()=>{
    
      
    },[])



  return (
    <View style={styles.container}>
      
        { props.dataResume.videoAddress != null &&
       <View style={{width:wp('80%'),marginHorizontal:wp('10%')
       ,height:hp('30%'),marginTop:hp('1%'),borderRadius:10}}>
          <VideoPlayer
          source={{uri:APIMaster.URL +'/'+ props.dataResume.videoAddress}}
          navigator={props.navigator}
          style={{width:'100%',height:'100%',borderRadius:10}}
          disableBack={true}
          disableVolume={true}
          disableFullscreen={true}
            />
       </View>
        }
     { props.dataResume.videoAddress != null &&   
<View style={{width:wp('100%'),marginHorizontal:wp('1%'),borderWidth:1,borderColor:'gray',marginTop:hp('1%')}}>

</View>
}
  {/* About */}
      <View style={{width:wp('100%'),height:hp('50%'),marginTop:hp('1%')}}>
       
         {/* Name */}
       <View style={{width:wp('90%'),marginLeft:'5%',height:('20%')}}>
         <Text style={{fontFamily:'Yekan',fontSize:wp('4.5%'),fontWeight:'bold'}}>{props.dataResume.name + ' ' + props.dataResume.lastName}</Text>
       </View>
       <View style={{width:wp('90%'),marginLeft:'5%',height:('40%')}}>
       <Text style={{fontFamily:'Yekan',fontSize:wp('4.5%')}}>{props.dataResume.bio}
       </Text>
        </View>

    { props.dataResume.fields !=[] &&
        <View style={{width:'auto',marginLeft:'5%',padding:10,height:'auto'}}>
         <FlatList
          data={props.dataResume.fields}
          renderItem={({item,index}) =>  
          <RoundList ShowIcon={true} 
          ImageIcon='graduation-cap'
          IconType='entypo'
          IconColor='white'

          Title={GetDegree(item.degreeType) + ' Of ' + item.title}
          ButtonStyle={{borderWidth:1
          ,borderRadius:20,borderColor:'transparent'
          ,backgroundColor:'#FFD460',flexDirection:'row'
          ,paddingLeft:5,paddingRight:5,paddingBottom:5,paddingTop:5,marginBottom:10}}
          TitleStyle={{fontSize:wp('4%'),textAlign:'center',color:'white'}}
          />

         } 

         />
       </View>
}

      </View>
       



    
     
       </View>

  )
}
const styles = StyleSheet.create({
  container: 
      {
      flex: 1
      },
    })



export default Resume;


