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
  import Buttons from '../Components/Buttons'
  import Textinputs from '../Components/Textinputs';
  import LableList from '../Components/LableList';
  import RoundList from '../Components/RoundList'
  import AccountChoose from '../Components/AccountChoose';
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


const Accounts =(props)=>{
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
  
      {/* <Drawer ref={ drawer } 
 type='displace' side='right' content={<Sidebar navigator={props.navigation} closeItem={() => closeDrawer()}/>}
  onClose={() => closeDrawer()}
   ContainerStyle={{width:100}}
  >  */}
      <ScrollView>

      <View>
        
    <Headers TitleScreen='حساب کاربری'
        ShowHeader={false} navigation={props.navigation}
         />
     </View>



         

        <View style= {styles.ScreenView}>
          <AccountChoose Title={'مشخصات فردی'} AvatarTitle={''}
          ContainerStyle={{width:0,height:0}}
          Size={hp('12%')}
          TitleStyle={styles.titleStyles}
            ButtonOperator={()=>{props.navigation.navigate('Login')}}
            ButtonStyle={styles.buttonStyle}
          />
          <AccountChoose Title={'کیف پول'} AvatarTitle={''}
          Size={hp('12%')}
          TitleStyle={styles.titleStyles}
          ButtonOperator={()=>{props.navigation.navigate('Wallet')}}
            ButtonStyle={styles.buttonStyle}
            ContainerStyle={{width:0,height:0}}
            
          />
        </View>
        <View style={{marginTop:10}}>
        <AccountChoose Title={'جشنواره'} AvatarTitle={''}
          Size={hp('12%')}
          TitleStyle={styles.titleStyles}
            ButtonOperator={()=>{}}
            ButtonStyle={{width:'94%',height:hp('22%'),
            backgroundColor:'#0ab076',borderRadius:10
            ,alignItems:'center',justifyContent:'center',alignSelf:'center',marginRight:'1%'}}
            ContainerStyle={{width:0,height:0}}
          />
        </View>


</ScrollView>
{/* </Drawer> */}
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
   color:'white',fontSize:wp('5.5%'),
   alignItems:'center',backgroundColor:'transparent'
  ,fontFamily:'Digikala',justifyContent:'center'
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
backgroundColor:'#0AB076',borderRadius:10
,alignItems:'center',justifyContent:'center',alignSelf:'center'
}


  
});
export default Accounts;


