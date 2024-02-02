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
import GuidItems from './GuidItems';
import Headers from '../Components/Headers';
// import {APIMaster} from './../API/APIMaster'
import {DotIndicator} from 'react-native-indicators';
import {Drawer} from 'native-base';
import Sidebar from '../Main/Sidebar';
import Loading from '../Components/Loading'
import NoData from '../Components/NoData'
import ServiceCard from '../Components/ServiceCard'
import Textinputs from '../Components/Textinputs'
import SwitchChoose from '../Components/SwitchChoose'
import Buttons from '../Components/Buttons'
import RoundList from '../Components/RoundList'
import CenterModal from '../Components/CenterModal';
import {FilterList} from '../Data/StableData'




const Guid =(props)=>{
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





   useEffect(()=>{
    
   },[UpdateData])

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
      <Headers TitleScreen='راهنمایی و شرایط' ShowHeader={false}
      navigation={props.navigation}
      drawers={drawer}
      showLinear={false}
      />

 


 <GuidItems navigation={props.navigation}  />
   
</ScrollView>
{/* </Drawer> */}
       </View>
       :
       <View style={{flex:1,justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
          <DotIndicator color='#cc3333' size={13} count={4} />
       </View>
}





</>
  )
}




export default Guid;

const styles = StyleSheet.create({
  container: 
      {
      flex: 1
      },
    })


