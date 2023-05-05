import React,{useState} from 'react';
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
import {Header,Icon,Avatar} from 'react-native-elements'
import RoundList from './../Components/RoundList'
import Avatars from '../Components/Avatars';





const colors = ['tomato', 'thistle', 'skyblue', 'teal'];

const data =[{Title:'All',Color:'black'},{Title:'Wating',Color:'gray'},{Title:'Accepted',Color:'green'},
{Title:'Rejected',Color:'red'},]



const Order =(props)=>{
  const[DataSource,setDataSource] = useState([])
  return (
    <View style={styles.container}>
       
    <View style={{width:wp('100%'),
    height:hp('8%'),borderBottomWidth:0.5,borderBottomColor:'gray'}}>
       

    </View>


  <FlatList 
      data={DataSource}
      renderItem={({item,index}) =>  
      <TouchableOpacity style={styles.PopularStyle}
      onPress={()=>{

          props.navigation.navigate('Profile',{userId:item.userId})

      }}
      >
        <View style={{width:'100%',height:'80%'
        ,flexDirection:'row',borderBottomWidth:0.38,borderBottomColor:'grey'}}>
          <View style={{width:'45%',height:'100%'
          ,justifyContent:'flex-start',padding:5}}>

         <Avatar
         rounded
         size='medium'
         source={{
          uri: APIMaster.URL + '/' + item.imageAddress
           }}
         />
         <Text style={{fontFamily:'Digikala',fontSize:wp('3%'),marginLeft:15}}>test</Text>
         <View style={{ flexDirection: 'row',marginLeft:10}}>       
          <Icon name='star' color='yellow' size={17}/>
          <Text style={{ fontFamily:'Digikala',paddingTop:2,color: 'black'
          ,fontSize:10}}>{item.starCount}</Text>
         </View>

       </View>


         <View style={{width:'55%',height:'100%',marginLeft:'-12%',padding:5
         }}>
           <View style={{height:'20%',width:'100%'
           ,alignItems:'flex-start'
           }}>
                
             {
                    
                     // <FlatList 
                     //       data={item.serviceTypes}
                     //       horizontal={true}
                     //       renderItem={({item1,index1}) =>  
                       <View style={{width:30,height:30,alignItems:'center'
                       ,justifyContent:'center',borderWidth:1,borderColor:'grey',borderRadius:15
                       ,flexDirection:'row',marginRight:10,borderBottomWidth:0}}>
                        {  item.serviceTypes == 0 && 
                     <Icon name="comment" color='#5a8cff' type="font-awesome" size={20}/>
                        }
                         {
                         item.serviceTypes == 1 &&
                         <Icon name="video-camera" color='#00b552' type="font-awesome" size={20}/>
                           }
                           {
                         item.serviceTypes == 2 &&
                         <Icon name="phone" color='#ce7fff' type="font-awesome" size={20}/>
                           }
                           {
                         item.serviceTypes == 3 &&
                         <Icon name="box" color='#f693b8' type="font-awesome-5" size={20}/>
                           }
                           { 
                         item.serviceTypes == 4 &&
                         <Icon name="edit" color='#ffac37' type="font-awesome" size={20}/>
                           }
{ 
                         item.serviceTypes == null &&
                         <Icon name="comment" color='#5a8cff' type="font-awesome" size={20}/>
                           }
                        </View>
                           }
              {/* /> */}
                      {/* } */}
             


            </View>
            <View style={{height:'80%',width:'100%'
           
           }}>
               <Text style={{fontFamily:'Digikala',color:'gray'}}>{item.bio}</Text>
            </View>

               </View>

               </View>
        <TouchableOpacity style={{width:'100%',
        height:'20%',justifyContent:'center'
        ,alignItems:'center',alignSelf:'center'
        }}>
           <Icon name='bookmark-border' />
                  </TouchableOpacity>
        
      </TouchableOpacity>
      
      }

      />

  
 

    </View>

)
}
const styles = StyleSheet.create({
container: 
   {
   flex: 1
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
 width:wp('94%'),height:hp('30%'),marginLeft:wp('3%')
,marginRight:wp('3%'),borderRadius:10
,borderWidth:0.4,borderColor:'grey'
,marginTop:5,marginBottom:10
 },
PopularItemStyle:
 {
 width:'50%',height:'100%',justifyContent:'center'
 },
PopularListStyle:
 {
     flexDirection:'row',justifyContent:'space-between',height:'45%',width:'100%'
 }
 })




export default Order;


