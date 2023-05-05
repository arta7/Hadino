import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity, Alert,Image,ActivityIndicator, FlatList,Linking
} from 'react-native';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
  import Buttons from './../Components/Buttons'
  import Textinputs from './../Components/Textinputs';
  import LableList from './../Components/LableList';
  import RoundList from './../Components/RoundList'
  import ScreenChoose from './../Components/ScreenChoose';
  import Avatars from '../Components/Avatars';
  import Headers from '../Components/Headers';
import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import {Header,Icon,Avatar} from 'react-native-elements'
import ProfileItems from './ProfileItems'
import {APIMaster} from  './../API/APIMaster'
import CustomModals from '../Components/CustomModal';

const Profile =(props)=>{
  const[dataResume,setdataResume] = useState([])
  const[showProfileItem,setshowProfileItem] = useState(false)
  const [showReport, setshowReport] = useState(false);
  const [Title,setTitle] = useState('')




  let   GetProfile=()=>{
    console.log('test: '+props.navigation.state.params.userId)
      axios.get(APIMaster.URL + APIMaster.Profile.GetUserById 
        + '?UserId=' + props.navigation.state.params.userId)
      .then( (response)=> {
              
        console.log('response.data.result.data:') 
              console.log(response.data.result.data)  
              setdataResume(response.data.result.data)
              // setshowProfileItem(true)     
      })
      .catch( (error)=> {
        console.log(error)  
        // setshowProfileItem(true)
        //setshowIndicator(false)
       
      })
     }



     useEffect(()=>{
     
     GetProfile()

    },[])

    

    let DataModalReport = 
    <ScrollView>
  
    
    
    <Textinputs
       changeText = {(value)=> setTitle(value)}
       values = {Title}
       Title='متن گزارش'
       TitleStyle={{fontSize:wp('4.5%'),color:'black',paddingLeft:15,paddingTop:5,marginTop:10}}
       Edit={true}
       TextStyle={{color:'black',textAlign:'right',
       width:'90%',textAlignVertical:'top',marginHorizontal:'5%',
       fontSize:wp('4.5%'),backgroundColor:'white',
       borderWidth:0.3,borderColor:'grey'}}
       TouchStyle={{height:hp('25%')}}
       multiline={true}
     />
    
       <View style={{alignItems:'center',justifyContent:'center'
       ,marginTop:10,marginBottom:5}}>
        <TouchableOpacity style={{width:'90%',height:hp('7%'),
        marginHorizontal:'5%',alignItems:'center',
        justifyContent:'center',borderRadius:10,elevation:2
        ,backgroundColor:'white'}}
        onPress={()=>{
          if(Title != '')
          {
          //   SendReport()
          // setshowReport(false)
        
          }
          else
          {
            Alert.alert('اخطار','لطفا همه موارد را پرکنید')
          }
    
        }}
        >
            <Text style={{fontFamily:'Yekan',color:'#f77'
            ,fontSize:wp('5%')}}>افزودن</Text>
        </TouchableOpacity>
       </View>
    
     </ScrollView>




  return (
    <View style={styles.container}>
     <ScrollView>
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
        <Text style={{fontFamily:'Yekan',position:'absolute',top:hp('13%'),justifyContent:'center'
        ,alignSelf:'center',color:'white',fontSize:wp('3%')}}>{dataResume.name + ' ' + dataResume.lastName}</Text>
  
           <TouchableOpacity style={{position:'absolute',top:5,right:10}}
                onPress={()=>{ 

                  setshowReport(true)
                }}
                >
                <Icon  name= 'dots-three-vertical' color='black' type='entypo' size={30}/>
           </TouchableOpacity>

      </View>
      {  
      // showProfileItem &&
           <ProfileItems  userId={props.navigation.state.params.userId}
            dataResume={dataResume}
           navigation = {props.navigation}
           />
      }
      </ScrollView>



     



  <CustomModals showModal={showReport}
  closeModal={()=>setshowReport(false)}
   ModalData={DataModalReport}
  />





       </View>

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
export default Profile;


