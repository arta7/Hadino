import React,{useEffect} from 'react';
import {TabNavigator, TabBarBottom, createBottomTabNavigator
  ,createAppContainer,createStackNavigator,StackActions ,NavigationActions } 
from 'react-navigation';
import {Icon} from 'react-native-elements';
import { I18nManager,View ,Image,Text,StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp}  from 'react-native-responsive-screen';


import Home from './src/Main/Home'
import CommingSoon from './src/Main/CommingSoon'
import Login from './src/Auth/Login'
import Splash from './src/Splash/Splash'
import SignUp from './src/Auth/SignUp'
import Verify from './src/Auth/Verify'
import Wallet from './src/Wallet/Wallet'

import CounterMain from './src/Pishkhan/CounterMain'
// import WorkSpaceItems from './WorkSpace/WorkSpaceItem'
// import MyServices from './src/Services/MyServices'
// import MyProfile from './src/MyProfile/MyProfile'
// import Profile from './Profile/Profile'
import Search from './src/Filter/Search'
import SearchItems from './src/Filter/SearchItems'
import MainProfileScreen from './src/MyProfile/MainProfileScreen'
// import ProfileService from './src/Profile/ProfileService'


import Hadigram from './src/Hadigram';
import HadigramItem from './src/Hadigram/HadigramItem';
import About from './src/About/About'
import Guid from './src/About/Guid'
import Cooperation from './src/About/Cooperation'
import Hadino from './src/MyProfile/Hadino'
import AccountControl from './src/MyProfile/AccountControl'
import Accounts from './src/MyProfile/Accounts'
import ChatScreen from './src/Chat/ChatScreen'
// import ChatControls from './WorkSpace/ChatControls'





var CounterMains = createStackNavigator({
  CounterMain:
  {
screen:CounterMain
  },
},
{
  headerMode: 'none',
  initialRouteName: 'CounterMain'
 
}
)



var Mains = createStackNavigator({
  Home : {
      screen : Home
  }, 
//   Login:
//   {
// screen:Login
//   },
  // Wallet:{
  //   screen:Wallet
  // },

},
{
  headerMode: 'none',
  initialRouteName: 'Home'
 
}
)



var Profiles = createStackNavigator({
  MainProfileScreen:{
    screen:MainProfileScreen
  },
  Hadino:
  {
    screen:Hadino
  },
  AccountControl:{
    screen:AccountControl
  },
  Accounts:
          {
            screen:Accounts
          },
//   Login:
//   {
// screen:Login
//   },
},
{
  headerMode: 'none',
  initialRouteName: 'Hadino'
 
}
)

var WorkSpace = createStackNavigator({
  Hadigram : {
      screen : Hadigram
  }, 
  HadigramItem:{
    screen:HadigramItem
  },
 
//   Login:
//   {
// screen:Login
//   },
  
},
{
  headerMode: 'none',
  initialRouteName: 'Hadigram'
 
}
)



const Controls = createBottomTabNavigator({
   
  Profiles : {
    screen : Profiles,
    navigationOptions: {
     tabBarIcon : ({tintColor}) => 
     <Icon name="person"  size={22}  color={tintColor}/>
    //  <Image source={require('./src/Images/HadinoIcon.png')} style={{width:20,height:20}} resizeMode='cover'  />
     ,
         tabBarLabel: ({ focused }) => {return  focused ? (<Text style={styles.selectedItemStye}>حساب من</Text>) : (<Text style={styles.itemStye}>حساب من</Text>)  },
    tabBarOnPress: ({navigation, defaultHandler}) => {
    navigation.replace('Hadino')
    defaultHandler()
    },   
    
    }
    },

 WorkSpace : {
   screen : WorkSpace,
   navigationOptions: {
     tabBarIcon : ({tintColor}) => <Icon name="instagram" type='font-awesome-5' size={22}  color={tintColor}/>,
     tabBarLabel: ({ focused }) => {return  focused ? (<Text style={styles.selectedItemStye}>باشگاه</Text>) : (<Text style={styles.itemStye}>باشگاه</Text>)  },
  tabBarOnPress: ({navigation, defaultHandler}) => {
    // navigation.replace('WorkSpaces')
    defaultHandler()
  },   
 }
},
Mains : {
  screen : Mains,
  navigationOptions: {
    tabBarIcon : ({tintColor}) => 
    <View style={{overflow: 'hidden', width : 80, height:80,borderRadius:40, backgroundColor:'white',elevation:0.5}}>
  <Image source={require('./src/Images/HadinoIcon.png')} style={{width:35,height:35,position:'absolute',bottom:'20%',left:'30%'}} resizeMode='contain'  />
  </View>
  ,
  tabBarLabel: ({ focused }) => {return  focused ? (<Text style={[styles.itemStye,{marginBottom:0}]}></Text>) : (<Text style={[styles.itemStye,{marginBottom:0}]}></Text>)  },
 tabBarOnPress: ({navigation, defaultHandler}) => {
   navigation.replace('Home')
   defaultHandler()
 },   
}
},
Mains1 : {
  screen : WorkSpace,
  navigationOptions: {
    tabBarIcon : ({tintColor}) => <Icon name="search" size={25} type='material' color={tintColor}/>,
      tabBarLabel: ({ focused }) => {return  focused ? (<Text style={styles.selectedItemStye}>آکادمی</Text>) : (<Text style={styles.itemStye}>آکادمی</Text>)  },
 tabBarOnPress: ({navigation, defaultHandler}) => {
   // navigation.replace('MyServices')
   defaultHandler()
 },   
 }
 },
 CounterMains : {
  screen : CounterMains,
  navigationOptions: {
    tabBarIcon : ({tintColor}) => <Icon name="monitor-dashboard" size={20} type='material-community' color={tintColor} />,
      tabBarLabel: ({ focused }) => {return  focused ? (<Text style={styles.selectedItemStye}>پیشخوان</Text>) : (<Text style={styles.itemStye}>پیشخوان</Text>)  },
 tabBarOnPress: ({navigation, defaultHandler}) => {
   // navigation.replace('MyServices')
   defaultHandler()
 },   
 }
 },
},{
lazy:true,
animationEnabled:true,
tabBarOptions : {
showIcon : true,
showLabel:true,
shifting:true,
inactiveTintColor: 'gray',
activeTintColor: '#cc3333',
keyboardHidesTabBar :true,
activeBackgroundColor:'transparent',
tabStyle:{justifyContent:'center',
alignItems:'center',alignSelf:'center'},
style:{width:wp(98),marginHorizontal:wp(1)
  ,borderRadius:10,bottom:5,height:60,borderWidth:0,borderColor:'transparent',elevation:1} ,
   
},
initialRouteName: 'Mains'
})


var AppContainer = createStackNavigator({ 
  Splash:{
   screen:Splash
  },
         Login:
           {
         screen:Login
           },
            SignUp:
           {
         screen:SignUp
           },
         Verify:
           {
         screen:Verify
           },
           ChatScreen:
           {
            screen:ChatScreen
           },
           Search:
           {
         screen:Search
           },
           About:{
            screen:About
          },
          Guid:{
            screen:Guid
          },
          Cooperation:{
            screen:Cooperation
          },
          // Hadino:
          // {
          //   screen:Hadino
          // },
          
          Wallet:{
            screen:Wallet
          },
          
       Controls:Controls
       
 },
 {
    headerMode: 'none',
    initialRouteName: 'Splash'
  }
 
 )

 
 export default createAppContainer(AppContainer);

 
const styles = StyleSheet.create({
   itemStye:{
    // paddingLeft:'7%',
   color:'gray',fontSize:wp('3.5%'),marginBottom:12,fontFamily:'Digikala',justifyContent:'center',alignItems:'center'
  },
  selectedItemStye:{
    // paddingLeft:'5%',
   color:'#cc3333',fontSize:wp('3.5%'),marginBottom:12,fontFamily:'Digikala',justifyContent:'center',alignItems:'center'
  }
});



