import React,{useEffect, useState,useRef} from 'react';
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
import {Header,Icon,Avatar,ListItem} from 'react-native-elements'
import WalletItem from './WalletItem'
import Headers from './../Components/Headers'
import Modal from 'react-native-modal';
import Toast from "react-native-fast-toast";
 
// import {Drawer} from 'native-base';
// import Sidebar from '../Home/Sidebar';

import LinearGradient from 'react-native-linear-gradient';
// const ColorRange= ['rgba(234,84,85,0.5)', 'rgba(240,123,63,1)', 'rgba(240,123,63,1)','#f07b3f']
import {ColorRange2} from './../Data/StableData';

import { FloatingAction } from "react-native-floating-action";
// import AddServices from './../Services/AddServices';
// import { APIMaster } from '../API/APIMaster';
// import { LoginData } from '../Redux/LoginData';



const Wallet =(props)=>{
    const[showAddservice,setshowAddservice] = useState(false)
    const[SelectedService,setSelectedService] = useState('')
    const[Inventory,setInventory] = useState('20000')
    const toast = useRef(null);

    var drawer = useRef(null)


  //  let  GetWalletInventory= ()=>{
  //     var axiosConfig = {
  //         headers:{
  //           "Access-Control-Allow-Origin": "*",
  //           'Authorization' : LoginData.type + ' ' + LoginData.token
  //                 }
  //        }
  //       axios.get(APIMaster.URL + APIMaster.Transaction.GetWalteBalance,axiosConfig)
  //       .then( (response)=> {
               
  //               console.log(response.data.result.data) 
          
  //             setInventory(response.data.result.data)
               
  //       })
  //       .catch( (error)=> {
  //         console.log(error)  
  //         if(error.response.status == 401)
  //         {
  //           LoginData.lastPage='Wallet' 
  //           props.navigation.replace('Login')
  //         }
  //         else
  //         {
  //           //setdataSource(response.data)
  //         console.log('chats Error',error)  
  //         }
         
         
  //       })
  //     }

      
    let addComma=( number_input )=> {
      console.log('add comma : ',number_input)
    number_input += '';
    number_input = number_input.replace(',', ''); number_input = number_input.replace(',', ''); number_input = number_input.replace(',', '');
    number_input = number_input.replace(',', ''); number_input = number_input.replace(',', ''); number_input = number_input.replace(',', '');
    
    console.log('add comma1 : ',number_input)
    var x = number_input.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1))
       x1 = x1.replace(rgx, '$1' + ',' + '$2');
    return x1 + x2;
    }

   useEffect(()=>{
    // GetWalletInventory()
   
   },[])

  //  let closeDrawer=()=>{
  //   drawer.current._root.close()
  // }

  return (
    <View style={styles.container}>
           {/* <Drawer ref={ drawer } 
 type='displace' side='left' content={<Sidebar navigator={props.navigation} closeItem={() => closeDrawer()}/>}
  onClose={() => closeDrawer()}
   ContainerStyle={{width:100}}
  >  */}
        <Headers TitleScreen='کیف پول'
         ShowHeader={false} navigation={props.navigation}
         drawers={drawer}
         />
          
          <View style={{width:wp('100%'),height:hp('7%')
          ,justifyContent:'flex-start',alignItems:'center',marginBottom:20}}>

             <LinearGradient colors={ColorRange2} style={{width:'50%',height:50
            ,justifyContent:'center',alignItems:'center',borderRadius:10,elevation:5}}
             useAngle={true}
             angle={90} 
             >
             <Text style={{fontFamily:'Digikala',color:'white',textAlign:'center',fontSize:wp('3.5%')}}>{addComma(Inventory.toString())} تومان</Text>
               </LinearGradient>
           
            
          </View>



        <WalletItem />
       
  
    

{/* </Drawer> */}

       </View>

  )
}
const styles = StyleSheet.create({
  container: 
      {
      flex: 1
      },
    })



export default Wallet;


