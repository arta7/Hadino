import React,{useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity, Alert,Image,ActivityIndicator,
   FlatList,DeviceEventEmitter,AppState,ImageBackground,Dimensions 
} from 'react-native';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
  import Buttons from './../Components/Buttons'
  import Textinputs from './../Components/Textinputs';
  import LableList from './../Components/LableList';
  import RoundList from './../Components/RoundList'
  import AccountChoose from './../Components/AccountChoose';
  import Avatars from '../Components/Avatars';
  import { SwiperFlatList } from 'react-native-swiper-flatlist';
  import Headers from '../Components/Headers';
import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import {Header,Icon} from 'react-native-elements'
// import { SwiperFlatList }= from 'react-native-swiper-flatlist';
import {Drawer} from 'native-base';
import Sidebar from './../Main/Sidebar';
const { width } = Dimensions.get('window')


const Hadino =(props)=>{
  const[dataType,setdataType]=useState([])
  const[dataPopular,setdataPopular]=useState([])
  const[UsersCount,setUsersCount] = useState(0)
  const[ProviderCount,setProviderCount] = useState(0)
  const[ServicesCount,setServicesCount] = useState(0)
  const[showLoader,setshowLoader] = useState(false)
 
  var drawer = useRef(null)
  

let renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: 'black',fontSize: 12,fontFamily:'Digikala' }}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  )
}

let closeDrawer=()=>{
  if(drawer != null && drawer.current !=null && drawer.current._root != null )
  drawer.current._root.close()
}


useEffect(()=>{
  
 
  

  },[])
  




  return (
    <View style={styles.container}>
  
      <Drawer ref={ drawer } 
 type='displace' side='right' content={<Sidebar 
  // navigator={props.navigation} 
  closeItem={() => closeDrawer()}/>}
  onClose={() => closeDrawer()}
   ContainerStyle={{width:100}}
  > 
      <ScrollView>

      <View>


    <Headers TitleScreen='هادینو من'
         ShowHeader={true} 
         navigation={props.navigation}
         drawers={drawer}
         showRightIcon={true}
         />
     </View>



         

        <View style= {styles.ScreenView}>
        
          <AccountChoose Title={'حساب کاربری'} AvatarTitle={''}
          Size={hp('10%')}
          Icon={{name: 'user', type: 'font-awesome'}}
          TitleStyle={styles.titleStyles}
          ContainerStyle={{marginTop:'15%',backgroundColor:'#c2b7ff',borderRadius:30,width:60,height:60,opacity:1}}
          ButtonStyle={styles.buttonStyle}
          ButtonOperator={()=>{props.navigation.navigate('Accounts')}}
          />
          <AccountChoose Title={'تنظیمات'}  
  
           ContainerStyle={{marginTop:'15%',backgroundColor:'#c2b7ff',borderRadius:30,width:60,height:60,opacity:1}}
          Size={hp('12%')}
          Icon={{name: 'setting', type: 'antdesign'}}
          TitleStyle={styles.titleStyles}
           ButtonOperator={()=>{}}
           ButtonStyle={styles.buttonStyle}
          />


        </View>

<View style= {styles.ScreenView}>
        

<AccountChoose Title={'درباره هادینو'}  
 ContainerStyle={{marginTop:'15%',backgroundColor:'#c2b7ff',borderRadius:30,width:60,height:60,opacity:1}}
 Size={hp('10%')}
 Icon={{name: 'info', type: 'font-awesome'}}
 TitleStyle={styles.titleStyles}
 ButtonOperator={()=>{props.navigation.navigate('About')}}
  ButtonStyle={styles.buttonStyle}
/>

<AccountChoose Title={'راهنمایی و شرایط'} AvatarTitle={''}
 ContainerStyle={{marginTop:'15%',backgroundColor:'#c2b7ff',borderRadius:30,width:60,height:60,opacity:1}}
 Size={hp('12%')}
 Icon={{name: 'question', type: 'font-awesome'}}
 TitleStyle={styles.titleStyles}
 ButtonOperator={()=>{props.navigation.navigate('Guid')}}
  ButtonStyle={styles.buttonStyle}
/>

</View>

<AccountChoose Title={'فرصت همکاری'} AvatarTitle={''}
          Size={hp('9%')}
          Icon={{name: 'handshake', type: 'font-awesome-5'}}
          TitleStyle={styles.titleStyles}
          ContainerStyle={{marginTop:'5%',backgroundColor:'#c2b7ff',borderRadius:30,width:60,height:60,opacity:1}}
          ButtonStyle={{width:wp(94),height:hp('22%'),
          backgroundColor:'#5743C1',borderRadius:10,marginTop:10,alignItems:'flex-end',marginHorizontal:wp(3)}}
          ButtonOperator={()=>{props.navigation.navigate('Cooperation')}}
          />

</ScrollView>
</Drawer>
       </View>

  )
}

const styles = StyleSheet.create({
container: 
    {
    flex: 1,backgroundColor:'white',overflow:'hidden'
    },
ImageView:
    {
     justifyContent:'center',alignItems:'center',alignSelf:'center'
     ,width:wp('40%'),height:wp('40%')
    },
ScreenView:
  {
    flexDirection:'row-reverse',width:wp('95%'),marginLeft:wp('2.5%')
   ,marginRight:wp('2.5%'),justifyContent:'space-between',marginTop:10
   //,marginBottom:10
  },
TitleScreenStyle:
    {
    width:wp('90%'),marginLeft:wp('5%'),marginRight:wp('5%'),marginTop:hp('9%')
    ,flexDirection:'row',justifyContent:'space-between',marginBottom:hp('1%')
    },
    TitleScreenStyle1:
    {
    width:wp('90%'),marginLeft:wp('5%'),marginRight:wp('5%'),marginTop:hp('2%'),marginBottom:hp('2%')
    },
TopScreenStyle:
    {
    width:wp('100%'),height:hp('10%')
    },
PopularStyle:
    {
    width:wp('60%'),height:hp('20%'),marginLeft:wp('2%')
   ,marginRight:wp('2%'),borderRadius:5,borderWidth:0.5,borderColor:'gray',padding:10,marginBottom:20
    },
PopularItemStyle:
    {
    width:'50%',height:'100%',justifyContent:'center'
    },
PopularListStyle:
    {
        flexDirection:'row',justifyContent:'space-between',height:'50%',width:'100%'
    },
    titleStyles:
    {
      color:'white',fontSize:wp('4.7%'),
           alignItems:'flex-start',marginTop:10,marginRight:10,backgroundColor:'transparent',fontFamily:'Digikala'
     },
          child: { 
            width:'100%', alignItems: 'center'
          ,height:'100%',justifyContent:'center',overflow:'hidden',alignSelf:'center' 
        },
  text: { fontSize: wp(5), textAlign: 'center' },
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center'
    
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  image: {
    width,
    flex: 1
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 5,
    right: '10%'
  },
  paginationText: {
    color: 'black',
    fontSize: 12,fontFamily:'Digikala'
  },
buttonStyle:
  {width:'49%',height:hp('22%'),
backgroundColor:'#5743C1',borderRadius:10,alignItems:'flex-end'}

  
});
export default Hadino;


