import React,{useState,useEffect} from 'react';
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
import LinearGradient from 'react-native-linear-gradient';
  import Buttons from '../Components/Buttons'
  import Textinputs from '../Components/Textinputs';
  import LableList from '../Components/LableList';
  import RoundList from '../Components/RoundList'
  import ScreenChoose from '../Components/ScreenChoose';
  import Avatars from '../Components/Avatars';
  import Headers from '../Components/Headers';
import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import {Header,Icon,Avatar} from 'react-native-elements'
import ProfileItems from './MyProfileItems'
import {APIMaster} from  '../API/APIMaster'
import {LoginData} from './../Redux/LoginData'
import {DotIndicator} from 'react-native-indicators';
const MyProfile =(props)=>{
  const[dataResume,setdataResume] = useState([])
  const[showIndicator,setshowIndicator] = useState(true)


  let   GetProfile=()=>{
    var axiosConfig = {
      headers:{
        'Authorization' : LoginData.type + ' ' + LoginData.token
              }
     }
      axios.get(APIMaster.URL + APIMaster.MyProfile.GetProfile,axiosConfig)
      .then( (response)=> {
              
              console.log(response.data.result.data)  
              setdataResume(response.data.result.data)
               setshowIndicator(false)     
      })
      .catch( (error)=> {
        console.log(error)  
        setshowIndicator(false)   
       
      })
    
     }

     let GotoLogin=()=>{
       console.log(LoginData.token)
       if(LoginData.token == '')
       {
         //setshowIndicator(false)  
         LoginData.lastPage='MyProfile' 
         props.navigation.replace('Login')
       }
       else
        {
          GetProfile()
        }

     }


     useEffect(()=>{
      GotoLogin()

    },[])


  return (
    <>
    { !showIndicator ?
    <View style={styles.container}>
       



      <View style={{height:hp('27%'),width:wp('100%')}}>
 
           
      <Image source={{uri:APIMaster.URL +'/'+ dataResume.imageAddress}} style={{width:'100%',height:'100%'}}/>
       
      <Avatar 
      rounded
    size={wp('18%')}
    source={{ uri:APIMaster.URL +'/'+ dataResume.imageAddress }}
      containerStyle=
    {{position:'absolute',top:hp('3%'),justifyContent:'center'
        ,alignSelf:'center'
      }}
       />
       
        <Text style={{fontFamily:'Digikala',position:'absolute',top:hp('13%'),justifyContent:'center'
        ,alignSelf:'center',color:'white',fontSize:wp('3%')}}>{dataResume.name + ' ' + dataResume.lastName}</Text>
       <View syle={{position:'absolute',top:10,right:10,backgroundColor:'red',width:40,height:40}}>
           </View>



                <TouchableOpacity style={{position:'absolute',top:5,right:10}}
                onPress={()=>{props.navigation.navigate('MainProfileScreen'
                ,{data:dataResume})
              }}
                >
                <Icon  name= 'setting' color='gray' type='antdesign' size={30}/>
           </TouchableOpacity>
      </View>
 

 
           <ProfileItems  userId={LoginData.id} dataResume={dataResume} navigation={props.navigation}/>
      
   
       </View>
       :
       <View style={{flex:1,justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
          <DotIndicator color='#ef7145' size={13} count={4} />
       </View>
      }
    </>
  )
}

const styles = StyleSheet.create({
container: 
    {
    flex: 1
    },
ImageView:
    {
     justifyContent:'center',alignItems:'center',alignSelf:'center'
     ,width:wp('40%'),height:wp('40%')
    },
ScreenView:
  {
    flexDirection:'row',width:wp('90%'),marginLeft:wp('5%')
   ,marginRight:wp('5%'),justifyContent:'space-between',marginBottom:10
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
    width:wp('70%'),height:hp('20%'),marginLeft:wp('5%')
   ,marginRight:wp('5%'),borderRadius:5,borderWidth:1,borderColor:'gray',padding:10,marginBottom:20
    },
PopularItemStyle:
    {
    width:'50%',height:'100%',justifyContent:'center'
    },
PopularListStyle:
    {
        flexDirection:'row',justifyContent:'space-between',height:'50%',width:'100%'
    }
  
});
export default MyProfile;


