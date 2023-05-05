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

import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import {Header,Icon,Avatar} from 'react-native-elements'
import Avatars from './../Components/Avatars'
import RoundList from './../Components/RoundList'
import {APIMaster} from  './../API/APIMaster'
import {DotIndicator} from 'react-native-indicators';
var data=[]
const Services =(props)=>{
  const[CategoryList,setCategoryList] = useState([])
  const[CategoryData,setCategoryData] = useState([])
  const[showLoader,setshowLoader] = useState(false)
  let   GetCategoryList=()=>{
    setshowLoader(true)
      axios.get(APIMaster.URL + 
        APIMaster.Services.GetUsersCategoryServiceById
        +'?UserId='+props.userId
        )
      .then( (response)=> {
              
        console.log('response.data.result.data[0] : ')  
              console.log(response.data.result.data)  
              setCategoryList(response.data.result.data)
              if(response.data.result.data.length > 0)
              GetCategoryItems(response.data.result.data[0].serviceId)
              // setshowProfileItem(true)
              
      })
      .catch( (error)=> {
        console.log(error)  
        setshowLoader(false)
        // setshowProfileItem(true)
        //setshowIndicator(false)
       
      })
     }

     let   GetCategoryItems=(CategoryId)=>{
    
      axios.get(APIMaster.URL + APIMaster.Services.GetUsersServiceById
        +'?UserId='+props.userId + '&serviceCategoryId=' + CategoryId
        )
      .then( (response)=> {
              
              console.log(response.data.result.data)  
              setCategoryData(response.data.result.data)
              // setshowProfileItem(true)
              setshowLoader(false)
              
      })
      .catch( (error)=> {
        console.log('Error categoryitem',error)  
        setshowLoader(false)
        // setshowProfileItem(true)
        //setshowIndicator(false)
       
      })
     }







  useEffect(()=>{
    console.log('props')
    console.log(props.navigation)
    GetCategoryList()
},[])

  return (
    <View style={styles.container}>
               <View style={{width:wp('100%'),
               height:hp('10%')
              //  ,borderWidth:1,borderColor:'#f7f7f7'
               }}>
     <FlatList 
         data={CategoryList}
         horizontal={true}
         showsHorizontalScrollIndicator={true}
         renderItem={({item,index}) =>  
         
         <RoundList ShowIcon={false}    
         Title={item.serviceName}
         ButtonStyle={{borderWidth:1,width:'auto'
        ,borderRadius:20,borderColor:item.color
       ,backgroundColor:item.color,
        paddingLeft:wp('5%'),paddingRight:wp('5%'),margin:5,padding:wp('1%')
        ,justifyContent:'center',alignItems:'center',alignSelf:'center'}}
       TitleStyle={{fontSize:wp('4%'),textAlign:'center',color:'white'}}
       
       />
         }

         />

       </View>
     
  <FlatList 
         data={CategoryData}
         
         renderItem={({item,index}) =>  
      
              
         <TouchableOpacity style={styles.PopularStyle}
         onPress={()=>{
           console.log('test')
           props.navigation.navigate('ProfileService'
           ,{CategoryData:item,
            dataResume:props.dataResume,DetailsId:item.id,serviceTypes:item.serviceTypes })
          }}
         >
         
            { 
             

       <View style={{height:'70%',}}>
         <View style={{height:'40%',width:'100%'
         ,borderBottomWidth:0.3,borderBottomColor:'grey'}}>
       <Text style={{fontFamily:'Yekan',textAlignVertical:'center',
       fontSize:wp('4.5%'),padding:10}}>{item.serviceName}</Text>
       </View>

          <View style={{flexDirection:'row',width:wp('100%'),height:'60%'}}>
          <RoundList ShowIcon={true}   
          IconSize={30} 
         Title={ item.serviceTypes == 0 ? "چت"
         :
         item.serviceTypes == 1 ?"تماس تصویری"
         : 
         item.serviceTypes == 2 ?"تماس صوتی"
         : 
         item.serviceTypes == 3 ?"سرویس"
         : 
         item.serviceTypes == 4 ?"دوره آموزشی"
         : "چت"
 }
         IconType ={  item.serviceTypes == 0 ? "font-awesome" 
              :
              item.serviceTypes == 1 ?"font-awesome"
              : 
              item.serviceTypes == 2 ?"font-awesome"
              : 
              item.serviceTypes == 3 ?"font-awesome-5"
              : 
              item.serviceTypes == 4 ?"font-awesome" 
              : "font-awesome"          
         }
         IconColor='white'
         ImageIcon = { item.serviceTypes == 0 ? "comment"
              :
              item.serviceTypes == 1 ?"video-camera"
              : 
              item.serviceTypes == 2 ?"phone" 
              : 
              item.serviceTypes == 3 ?"box"
              : 
              item.serviceTypes == 4 ?"edit"
              : "comment"
              }

         ButtonStyle={{borderWidth:1,width:'auto'
        ,borderRadius:20,borderColor:item.serviceTypes == 0 ? '#5a8cff'
        :
        item.serviceTypes == 1 ?'#00b552'
        : 
        item.serviceTypes == 2 ?'#ce7fff'
        : 
        item.serviceTypes == 3 ?'#f693b8'
        : 
        item.serviceTypes == 4 ?'#ffac37'
        : '#5a8cff'
        
       ,backgroundColor:item.serviceTypes == 0 ? '#5a8cff'
       :
       item.serviceTypes == 1 ?'#00b552'
       : 
       item.serviceTypes == 2 ?'#ce7fff'
       : 
       item.serviceTypes == 3 ?'#f693b8'
       : 
       item.serviceTypes == 4 ?'#ffac37'
       : '#5a8cff',
        paddingLeft:wp('5%'),paddingRight:wp('5%'),margin:5,padding:wp('1%')
        ,justifyContent:'center',alignItems:'center',alignSelf:'center',flexDirection:'row'}}
       TitleStyle={{fontSize:wp('4%'),textAlign:'center',color:'white'}}
       disable={true}
       />
            </View> 

       </View>
       } 

    {
     showLoader &&
     <DotIndicator color='#ef7145' size={13} count={4} />
   }
   <View style={{width:'90%',
             height:1,justifyContent:'center'
             ,alignItems:'center',alignSelf:'center',borderStyle: 'dashed',
             borderRadius: 1,
             borderWidth: 0.7,
             borderColor: 'black',
             }}>
             
                    </View>  
          
          { 
          <View style={{width:'100%',height:'30%',borderTopWidth:0.4,borderTopColor:'grey'}}>
            
            <View style={{flexDirection:'row',width:wp('100%'),
            height:'100%',justifyContent:'space-between'}}>
              <View style={{flexDirection:'row',width:('60%'),
            height:'100%'}}>
          <RoundList ShowIcon={false}    
         Title={item.categoryName}
         ButtonStyle={{borderWidth:1,width:'auto'
        ,borderRadius:20,borderColor:'#f2eded'
       ,backgroundColor:'#e3dcdc',
        paddingLeft:wp('3%'),paddingRight:wp('3%'),margin:5,padding:wp('1%')
        ,justifyContent:'center',alignItems:'center',alignSelf:'center',opacity:0.7}}
       TitleStyle={{fontSize:wp('4%'),textAlign:'center',color:'black'}}
       
       />
       
        <RoundList ShowIcon={false}    
         Title={item.subCategoryName}
         ButtonStyle={{borderWidth:1,width:'auto'
        ,borderRadius:20,borderColor:'#e3dcdc'
       ,backgroundColor:'#e3dcdc',
        paddingLeft:wp('3%'),paddingRight:wp('3%'),margin:5,padding:wp('0.5%')
        ,justifyContent:'center',alignItems:'center',alignSelf:'center',opacity:0.7}}
       TitleStyle={{fontSize:wp('4%'),textAlign:'center',color:'black'}}
       
       />
       </View>
   
       {  
       
       <View style={{width:('40%'),
            height:'100%',justifyContent:'center'
            ,alignItems:'center',alignSelf:'center'}}>
       
       <Text style={{fontFamily:'Yekan',textAlignVertical:'center',
       fontSize:wp('4%'),textAlign:'center',color:'green'}}>{item.price}</Text>
       <Text style={{fontFamily:'Yekan',textAlignVertical:'center',
       fontSize:wp('3%'),textAlign:'right',color:'green'}}>{item.packageType==0 ?
        'Per Message' : ''}</Text>
         </View>
}


       </View>

   

            </View> 
     }

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
      TopScreenStyle:
    {
    width:wp('100%'),height:hp('10%')
    },
PopularStyle:
    {
    width:wp('98%'),height:hp('25%'),borderWidth:0.6
    ,borderColor:'grey',margin:wp('1%'),borderRadius:10
    //,marginBottom:20
    },
PopularItemStyle:
    {
    width:'50%',height:'100%',justifyContent:'center'
    },
PopularListStyle:
    {
        flexDirection:'row',justifyContent:'space-between',height:'50%',width:'100%'
    }
    
    })



export default Services;


