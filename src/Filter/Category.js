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
import {Header,Icon,Avatar} from 'react-native-elements'
import RoundList from './../Components/RoundList'
import Avatars from '../Components/Avatars';
// import {APIMaster} from  './../API/APIMaster'
// import { LoginData } from '../Redux/LoginData';
import Loading from './../Components/Loading'
import NoData from './../Components/NoData'
import ServiceCard from './../Components/ServiceCard'
import {FilterList} from './../Data/StableData'

const data1 =[{id:1,Title:'پرطرفدار',iconName:'phone',iconType:'font-awesome',Color:'black'},
{id:2,Title:'قیمت صعودی',iconName:'comment',iconType:'font-awesome',Color:'#5a8cff'}
,{id:3,Title:'قیمت نزولی',iconName:'video-camera',iconType:'font-awesome',Color:'#00b552'}]

export default Category =(props)=>{
  var [emptyData,setemptyData] = useState(FilterList.length == 0 ? true:false)
  const[selectedMyCategory,setselectedMyCategory] = useState(1)

  return (
    <View style={styles.container}>
       
       <View style={{width:wp('100%'),
       height:hp('8%'),borderBottomWidth:0.25,borderBottomColor:'gray',marginBottom:10}}>
           <FlatList 
         data={data1}
         horizontal={true}
         showsHorizontalScrollIndicator={true}
         contentContainerStyle={{flexDirection:'row-reverse'}}
         renderItem={({item,index}) =>  
         <RoundList ShowIcon={false}    
         Title={item.Title}
         ButtonStyle={{borderWidth:1
        ,borderRadius:20,borderColor:'gray'
       ,backgroundColor:selectedMyCategory == item.id ?  '#B00A44':'white',
        paddingLeft:wp('5%'),paddingRight:wp('5%'),margin:5,height:'60%'
        ,justifyContent:'center',alignItems:'center',alignSelf:'center'}}
       TitleStyle={{fontSize:wp('3%'),textAlign:'center',color:selectedMyCategory == item.id ? 'white' :  'gray'}}
       ButtonOperator={()=>{
        setselectedMyCategory(item.id)
       }}

       />

      }
      />

       </View>

       <View style={{width:wp('90%'),marginRight:wp('3%'),marginBottom:10}}>
    <Text style={{color:'black',fontSize:wp('5%'),fontWeight:'bold',fontFamily:'Digikala'}}>مشاوران برتر</Text>
  </View>

       <FlatList 
         data={FilterList}
         horizontal={true}
         contentContainerStyle={{alignItems:'center',marginBottom:hp(8)}}
         ListEmptyComponent={!emptyData ? <Loading /> : <NoData />}
         renderItem={({item,index}) =>  
         <View>
         <Avatar
    rounded
    size='large'
    source={require('./../Images/Avatar.png')}
    containerStyle={{marginHorizontal:10,borderWidth:0.5}}
  >
           </Avatar>
 <Text style={{textAlign:'center', paddingTop:2,
    color: 'black',fontSize:wp(3.5),fontFamily:'Digikala'}}>{item.name + ' ' + item.lastName}</Text>
         
         </View>
         }

         />
     <FlatList 
         data={FilterList}
         ListEmptyComponent={!emptyData ? <Loading /> : <NoData />}
         renderItem={({item,index}) =>  
          <ServiceCard items={item} ImageAddress ={require('../Images/Avatar.png')}
          // DataType={dataType}
          navigation={props.navigation}/>
         
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





