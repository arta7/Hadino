import React,{useEffect, useState,useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity, Alert,Image,ActivityIndicator, FlatList, TextInput
} from 'react-native';
import axios from 'axios';

import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import {Header,Icon,Avatar} from 'react-native-elements'
import SearchItems from './SearchItems';
import Headers from '../Components/Headers';
// import {APIMaster} from './../API/APIMaster'
import {DotIndicator} from 'react-native-indicators';
import { Modal } from 'react-native';
// import FilterModal from '././../Components/FilterModal'
// import { LoginData } from '../Redux/LoginData';
import Category from './Category'
import {Drawer} from 'native-base';
import Sidebar from '../Main/Sidebar';
import Loading from './../Components/Loading'
import NoData from './../Components/NoData'
import ServiceCard from './../Components/ServiceCard'
import Textinputs from '../Components/Textinputs'
import SwitchChoose from '../Components/SwitchChoose'
import Buttons from '../Components/Buttons'
import RoundList from '../Components/RoundList'
import CenterModal from '../Components/CenterModal';
import {FilterList} from './../Data/StableData'




const Search =(props)=>{
    const [data,setdata]= useState([])
    const[showIndicator,setshowIndicator] = useState(true)
    const[showModal,setshowModal] = useState(false)
    const[SearchValue,setSearchValue] = useState('')
    const[Category,setCategory] = useState([])
    const[DataSource,setDataSource] = useState(FilterList)
    const[UpdateData,setUpdateData] = useState(1)
    var [emptyData,setemptyData] = useState(false)
    var drawer = useRef(null)
  
    const[showService,setshowService] = useState(false)
    const[showPackage,setshowPackage] = useState(false)
    const[onlineProviders,setonlineProviders] = useState(false)
    const[onlineCompany,setonlineCompany] = useState(false)
    const[onlineTruested,setonlineTruested] = useState(false)

    const[CategorySelected,setCategorySelected] = useState('')
    const[CategorySelectedId,setCategorySelectedId] = useState('')
    const[PackageType,setPackageType] =useState([{id:0,name:'نامحدود'},{id:1,name:'دوره ای'},{id:2,name:'فصلی'}])
    const[PackageTypeSelected,setPackageTypeSelected] = useState('')
    const[PackageTypeSelectedId,setPackageTypeSelectedId] = useState('')

    const[selectedMyCategory,setselectedMyCategory] = useState(-1)
    const[selectedMyCategoryTitle,setselectedMyCategoryTitle] = useState('All')
    const[selectedMyCategoryColor,setselectedMyCategoryColor] = useState('black')
    const[MyCategoryList,setMyCategoryList] = useState([])

    function replaceAll(str, find, replace) {
     return str.replace(new RegExp(find, 'g'), replace);
   }




   let closeDrawer=()=>{
    drawer.current._root.close()
  }

  return (
      <>
      { showIndicator  ?
    <View style={styles.container}>
        {/* <Drawer ref={ drawer } 
 type='displace' side='left' content={<Sidebar navigator={props.navigation} closeItem={() => closeDrawer()}/>}
  onClose={() => closeDrawer()}
   ContainerStyle={{width:100}}
  >  */}
      <ScrollView>
      <Headers TitleScreen='جستجوی مشاور' ShowHeader={false}
      navigation={props.navigation}
      drawers={drawer}
      showLinear={false}
      />

    <TouchableOpacity style={{width:wp('100%'),height:hp('7%'),flexDirection:'row'
    ,justifyContent:'space-between',borderBottomWidth:1,backgroundColor:'#cc3333'}}
    onPress={()=>{setshowModal(!showModal)}}
    >
      <View style={{width:'40%',justifyContent:'flex-start',
      marginLeft:wp('5%'),flexDirection:'row',alignItems:'center'}}> 
      <Icon  name='filter' type='antdesign' color='white'  />
      <Text style={{fontFamily:'Digikala',color:'white',fontSize:wp('4%')}}>فیلتر</Text>
      </View>

      <View style={{width:'40%',justifyContent:'flex-end',
      marginRight:wp('2%'),flexDirection:'row',alignItems:'center'}}> 
      <Icon  name='plus' type='entypo' color='white'  />
      </View>

    </TouchableOpacity>

    { showModal&&
      <>

{/* <View style={{width:'100%',
               height:hp('10%'),borderBottomWidth:0.4,borderBottomColor:'gray',marginTop:5}}>
     <FlatList 
         data={data1}
         horizontal={true}
         showsHorizontalScrollIndicator={true}
         renderItem={({item,index}) =>  
         <RoundList ShowIcon={false}    
         Title={item.Title}
         ButtonStyle={{borderWidth:1
        ,borderRadius:20,borderColor:item.Color
       ,backgroundColor:selectedMyCategory == item.id ?  item.Color:'white',
        paddingLeft:wp('5%'),paddingRight:wp('5%'),margin:5,height:'60%'
        ,justifyContent:'center',alignItems:'center',alignSelf:'center'}}
       TitleStyle={{fontSize:wp('3%'),textAlign:'center',color:selectedMyCategory == item.id ? 'white' :  item.Color}}

       ButtonOperator={()=>{
       }}


       />
         }

         />

       </View> */}


           <View style={{width:wp('100%'),height:hp('10%')}}>
       <View style={{width:'80%',margin:'3%',flexDirection:'row',
       borderWidth:1,borderColor:'#cc3333',marginHorizontal:'10%'
       ,justifyContent:'space-between',borderRadius:10}}>
          <TouchableOpacity style={{width:'20%',justifyContent:'center'
       ,alignItems:'center',borderRightWidth:1,borderRightColor:'#cc3333'}}
       onPress={()=>{

       }}
       >
       <Icon name='search'  color='#cc3333' size={wp('8%')} />
        </TouchableOpacity>
       <View style={{width:'80%'}}>
       <TextInput 
         onChangeText={(v)=>{setSearchValue(v)}}
          value={SearchValue}
       style={{fontFamily:'Digikala',height:'100%',width:'100%',fontSize:wp('4.5%')}}
        placeholder='جستجو...'
        placeholderTextColor='#cc3333'
       />
       </View>
     
       </View>
    </View>

         
<View style={{}}>

</View>

    </>
    }

    
<CenterModal showModal={showService} 
       closeModal={()=>setshowService(false)}  dataSource={Category} 
       ModalStyle={{width:'60%',marginRight:'20%',marginLeft:'20%'}}
       ViewStyle={{height:hp('50%'),backgroundColor: 'white',
       borderRadius: 10,borderColor: 'white',width:'100%'}}
      //  Data = {props.CategoryType}  sendData={props.setCategoryType}  
       CategorySelected={CategorySelected}  setCategorySelected={setCategorySelected}
       CategorySelectedId={CategorySelectedId}  setCategorySelectedId={setCategorySelectedId} 
       />


 <SearchItems navigation={props.navigation} DataSource={FilterList} />


 {/* <Category 
dataSource={data} navigation={props.navigation} DataSource={DataSource} CategoryUpdate={GetCategory}
/>  */}
     


  

<FlatList 
    data={DataSource}
    ListEmptyComponent={!emptyData ? <Loading /> : <NoData />}
    renderItem={({item,index}) =>  
 
     <ServiceCard items={item} ImageAddress ={''}
     navigation={props.navigation}/>

   
    }
  
    />
   









</ScrollView>
{/* </Drawer> */}
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
    })



export default Search;


