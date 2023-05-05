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
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import {Header,Icon} from 'react-native-elements'
import RoundList from './../Components/RoundList'
import Avatars from '../Components/Avatars';
import FacePile from 'react-native-face-pile'
import {APIMaster} from './../API/APIMaster'
import {DotIndicator} from 'react-native-indicators';
import Headers from '../Components/Headers';
import {Drawer} from 'native-base';
import Sidebar from './../Home/Sidebar';
import { LoginData } from '../Redux/LoginData';
import Loading from './../Components/Loading'
import NoData from './../Components/NoData'

const ColorRange=[
  '#ec624e', '#ec654c', '#ed674b', '#ed6a49', 
  '#ee6d47', '#ef7145', '#ef7443', '#f07841']


const FACES = [
  {
    id: 0,
    imageUrl: 'http://www.yojackets.com/wp-content/uploads/2016/04/Civil-War-Scarlet-Witch-Red-Coat-1.jpg',
  },
  {
    id: 1,
    imageUrl: 'http://www.yojackets.com/wp-content/uploads/2016/04/Civil-War-Scarlet-Witch-Red-Coat-1.jpg',
  },
  {
    id: 2,
    imageUrl: 'http://www.yojackets.com/wp-content/uploads/2016/04/Civil-War-Scarlet-Witch-Red-Coat-1.jpg',
  },
  {
    id: 3,
    imageUrl: 'http://www.yojackets.com/wp-content/uploads/2016/04/Civil-War-Scarlet-Witch-Red-Coat-1.jpg',
  },
  {
    id: 4,
    imageUrl: 'http://www.yojackets.com/wp-content/uploads/2016/04/Civil-War-Scarlet-Witch-Red-Coat-1.jpg',
  }
];


const SelectCategory =(props)=>{
  const [data,setdata]= useState([])
  const [users,setusers]= useState([])
const[showIndicator,setshowIndicator] = useState(false)
var [emptyData,setemptyData] = useState(false)

     var drawer = useRef(null)

     function replaceAll(str, find, replace) {
      return str.replace(new RegExp(find, 'g'), replace);
    }


  let GetSearchCategoryItem=()=>{
      
    setemptyData(false)

    axios.get(APIMaster.URL + 
      APIMaster.Category.GetAllSubcategoryByServiceId
      +'?serviceId='+props.navigation.state.params.serviceId)
    .then( (response)=> {
            console.log(response.data.result.data)  
            setdata(response.data.result.data)
            var userdata=[];
            var userList=response.data.result.data;
             var itemIds=0;
            for(let i=0;i<userList.length;i++)
            {
              for(let j=0;j<userList[i].users.length;j++)
              {
              userdata.push({itemId:userList[i].id,id:itemIds,imageUrl:
                APIMaster.URL.toString()+'/'+userList[i].users[j].imageAddress.toString()
              })
              itemIds+=1;
              }
             
            }
            console.log('userdata',userdata)
            setusers(userdata)
            if(userdata.length==0)
            {
              setemptyData(true)
            }
           setshowIndicator(true)

    }).catch((error)=> {
      console.log(error)  
      setshowIndicator(true)
      setemptyData(true)
     
    })
  }

    useEffect(()=>{
      //console.log(props.navigation.state.params.serviceId)
      
      GetSearchCategoryItem()

    },[])

    let closeDrawer=()=>{
      drawer.current._root.close()
    }

  return (
    <>
    { 
    <View style={styles.container}>
            <Drawer ref={ drawer } 
 type='displace' side='left' content={<Sidebar navigator={props.navigation} />}
  onClose={() => closeDrawer()}
   ContainerStyle={{width:100}}
  > 
       <Headers TitleScreen='دسته بندی' ShowHeader={false} 
        showLinear={false} drawers={drawer}
        navigation={props.navigation}
        showRightIcon={false}
        />
 


     <FlatList 
         data={data}
         ListEmptyComponent={!emptyData ? <Loading /> : <NoData />}
         renderItem={({item,index}) =>  
         <TouchableOpacity style={{width:wp('96%'),
         marginRight:wp('2%'),marginLeft:wp('2%')
         ,height:hp('18%'),marginTop:'2%'
        }}
          onPress={()=>{

            var pushdata=[];
           
            
            pushdata.push({"categoryId": item.id.toString()})
            pushdata.push({"subCateGoryId": item.id.toString()})
            
            var stringData = JSON.stringify(pushdata);
          stringData = replaceAll(stringData,'{','')
          stringData= replaceAll(stringData,'}','')
         LoginData.Filter = stringData.toString().replace('[','').replace(']','');
            props.navigation.push('Search')
          }}
         >
            <LinearGradient colors={ColorRange}
             style={{height:'100%',width:'100%',borderRadius:10
            ,borderWidth:1,flexDirection:'row'
         }}>
            
            <View style={{height:'93%',width:'38%',
            marginLeft:'2%',marginTop:'1%',borderRadius:5
            ,overflow:'hidden',borderWidth:0.5,elevation:2,borderColor:'transparent'}} >
            <Image 
                 source={{uri:APIMaster.URL +'/'+ item.imageAddress}}
                 style={{height:'100%',width:'100%'}} 
                  />
              </View>
                
              <View style={{height:'100%',width:'60%'}}>
               <View style={{height:'40%',alignItems:'flex-end',marginTop:5,marginRight:'15%'}}>
                <Text style={{color:'white',fontFamily:'Digikala',textAlign:'center',fontSize:wp('4%')}}>{item.title}</Text>
               </View>
        { 
          users.filter(a=>a.itemId == item.id).length > 0 && 
            <View style={{height:'60%'}}>
              <FacePile numFaces={3} faces={users.filter(a=>a.itemId == item.id).length > 0 ?
            users.filter(a=>a.itemId == item.id):FACES} circleSize={wp('6%')}/>
             </View>
        }

              </View>


              </LinearGradient>

         </TouchableOpacity>     
          }

         />

     
    </Drawer>

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
    width:wp('70%'),height:hp('25%'),marginLeft:wp('5%')
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
    })



export default SelectCategory;


