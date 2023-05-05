import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity, Alert,Image,ActivityIndicator, FlatList,Switch
} from 'react-native';
import axios from 'axios';

import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import {Header,Icon} from 'react-native-elements'
import Modal from 'react-native-modal';
import RoundList from './RoundList'
import Textinputs from './Textinputs'
import Buttons from './Buttons'
import CenterModal from './CenterModal';
import SwitchChoose from './SwitchChoose'
import { LoginData } from '../Redux/LoginData';

const FilterModal =(props)=>{
     const[showService,setshowService] = useState(false)
     const[showPackage,setshowPackage] = useState(false)
     const[onlineProviders,setonlineProviders] = useState(false)
     const[onlineCompany,setonlineCompany] = useState(false)
     const[onlineTruested,setonlineTruested] = useState(false)

     const[CategorySelected,setCategorySelected] = useState('')
     const[CategorySelectedId,setCategorySelectedId] = useState('')
     const[PackageType,setPackageType] =useState([{id:0,name:'نامحدود'},{id:1,name:'Prioded'},{id:2,name:'فصلی'}])
     const[PackageTypeSelected,setPackageTypeSelected] = useState('')
     const[PackageTypeSelectedId,setPackageTypeSelectedId] = useState('')

     const[selectedMyCategory,setselectedMyCategory] = useState(-1)
     const[selectedMyCategoryTitle,setselectedMyCategoryTitle] = useState('All')
     const[selectedMyCategoryColor,setselectedMyCategoryColor] = useState('black')
     const[MyCategoryList,setMyCategoryList] = useState([])

     function replaceAll(str, find, replace) {
      return str.replace(new RegExp(find, 'g'), replace);
    }

  return (
    <Modal isVisible={props.showModal} style={{alignItems:'center'}}
    onBackdropPress={()=>{props.changeModal(false)}}
    >

<View style={{backgroundColor:'white',borderRadius:15,
width:wp('80%'),marginHorizontal:wp('10%'),height:hp('80%')}}>
  <ScrollView>
<View style={{width:'100%',height:('5%')}}>
  <Text style={{color:'#EA5455',fontSize:wp('2.5%'),paddingLeft:10,paddingTop:5}}>فیلترهای جستجو</Text>
 </View>



<View style={{width:'100%',
               height:hp('10%'),borderBottomWidth:0.4,borderBottomColor:'gray',marginTop:5}}>
     <FlatList 
         data={props.CategoryList}
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
        setselectedMyCategory(item.id)
        setselectedMyCategoryTitle(item.Title)
        setselectedMyCategoryColor(item.Color)
       }}


       />
         }

         />

       </View>


        <Textinputs
       values = {CategorySelected}
       Title='دسته سرویس'
       TitleStyle={{fontFamily:'Yekan',fontSize:wp('2.5%'),color:'black',paddingLeft:15,paddingTop:5,marginTop:10}}
       Edit={false}
       TextPress={()=>{setshowService(true)}}
       TextStyle={{fontFamily:'Yekan',color:'black',textAlign:'right',width:'80%',marginHorizontal:'10%',
       fontSize:wp('2.5%'),backgroundColor:'white',elevation:5,borderWidth:1}}
       TouchStyle={{height:hp('7%')}}
         />



            <SwitchChoose Title='فقط سرویس دهنده های آنلاین'
            switch={true} 
            switchStyle={{justifyContent:'flex-end'}}
            switchValue={onlineProviders}
            TitleStyle={{color:'black',fontSize:wp('4%')}}
            setswitchValue={(v)=>{setonlineProviders(v)}}
            ButtonStyle={{marginBottom:10,marginTop:'5%',marginLeft:'10%',marginRight:'10%'}}
            />

              <SwitchChoose Title='فقط شرکت ها'
            switch={true} 
            switchStyle={{justifyContent:'flex-end'}}
            switchValue={onlineCompany}
            TitleStyle={{color:'black',fontSize:wp('4%')}}
            setswitchValue={(v)=>{setonlineCompany(v)}}
            ButtonStyle={{marginBottom:10,marginTop:'5%',marginLeft:'10%',marginRight:'10%'}}
            />

          <SwitchChoose Title='فقط سرویس دهنده های تایید شده '
            switch={true} 
            switchStyle={{justifyContent:'flex-end'}}
            switchValue={onlineTruested}
            TitleStyle={{color:'black',fontSize:wp('4%')}}
            setswitchValue={(v)=>{setonlineTruested(v)}}
            ButtonStyle={{marginBottom:10,marginTop:'5%',marginLeft:'10%',marginRight:'10%'}}
            />


       {/* <Textinputs
       values = {PackageTypeSelected}
       Title='Package Types'
       TitleStyle={{fontSize:wp('2.5%'),color:'black',paddingLeft:15,paddingTop:5,marginTop:10}}
       Edit={false}
       TextPress={()=>{setshowPackage(true)}}
       TextStyle={{color:'black',textAlign:'right',width:'80%',marginHorizontal:'10%',
       fontSize:wp('2.5%'),backgroundColor:'white',elevation:5,borderWidth:1}}
       TouchStyle={{height:hp('7%')}}
         /> */}

     <View style={{}}>

     </View>

         <Buttons titleText='Filter' ButtonStyle=
         {{width:'80%',marginHorizontal:'10%',
         height:hp('7%'),justifyContent:'center'
         ,alignItems:'center',marginTop:hp('3%'),elevation:2
         ,borderRadius:10,marginBottom:20}}
         titleStyle={{fontSize:wp('5%'),color:'#ef7145'}}
         ButtonOperator={()=>{
           var pushdata=[LoginData.Filter];
           
          if(onlineProviders)
          {
            pushdata.map( el=>{
              delete el["onlyOnlineProvider"]
          })
           
            pushdata.push({"onlyOnlineProvider": true})
          }
          else
          {
            pushdata.map( el=>{
              delete el["onlyOnlineProvider"]
          })
          }
          if(onlineCompany)
          {
            pushdata.map( el=>{
              delete el["onlyCompanyProvider"]
          })
            pushdata.push({ "onlyCompanyProvider": true})
          }
          else
          {
            pushdata.map( el=>{
              delete el["onlyCompanyProvider"]
          })
          }
          if(onlineTruested)
          {
            pushdata.map( el=>{
              delete el["onlyTrustedProvider"]
          })
           
            pushdata.push({"onlyTrustedProvider": true})
          }
          else
          {
            pushdata.map( el=>{
              delete el["onlyTrustedProvider"]
          })
          }
          if(CategorySelectedId != '')
          {
            pushdata.map( el=>{
              delete el["serviceCatgoryId"]
          })
         
            pushdata.push({"serviceCatgoryId": CategorySelectedId})
          }
          else
          {
            
            pushdata.map( el=>{
              delete el["serviceCatgoryId"]
          })
          }
        
          if(selectedMyCategory != '-1')
          {
            pushdata.map( el=>{
              delete el["serviceTypes"]
          })
         
            pushdata.push({"serviceTypes": selectedMyCategory.toString()})
          }
          else
          {
          
            pushdata.map( el=>{
              delete el["serviceTypes"]
          })
          }

          var stringData = JSON.stringify(pushdata);
          stringData = replaceAll(stringData,'{','')
          stringData= replaceAll(stringData,'}','')
         LoginData.Filter = stringData.toString()
         .replace('[','').replace(']','')
            console.log(LoginData.Filter)
            props.changeModal(false)
           props.Update(props.UpdateData+1)


         }}

         />

</ScrollView>
</View>


    <CenterModal showModal={showService} 
       closeModal={()=>setshowService(false)}  dataSource={props.CategoryType} 
       ModalStyle={{width:'60%',marginRight:'20%',marginLeft:'20%'}}
       ViewStyle={{height:hp('50%'),backgroundColor: 'white',
       borderRadius: 10,borderColor: 'white',width:'100%'}}
      //  Data = {props.CategoryType}  sendData={props.setCategoryType}  
       CategorySelected={CategorySelected}  setCategorySelected={setCategorySelected}
       CategorySelectedId={CategorySelectedId}  setCategorySelectedId={setCategorySelectedId} 
       />



        <CenterModal showModal={showPackage} 
       closeModal={()=>setshowPackage(false)}  dataSource={PackageType}
       ModalStyle={{width:'60%',marginRight:'20%',marginLeft:'20%'}}
       ViewStyle={{height:hp('50%'),backgroundColor: 'white',
       borderRadius: 10,borderColor: 'white',width:'100%'}}
       CategorySelected={PackageTypeSelected}  setCategorySelected={setPackageTypeSelected}
       CategorySelectedId={PackageTypeSelectedId}  setCategorySelectedId={setPackageTypeSelectedId}
        />



</Modal>


  




  )
}
const styles = StyleSheet.create({
  container: 
      {
      flex: 1
      },
    })



export default FilterModal;


