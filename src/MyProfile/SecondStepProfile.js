import React,{useEffect, useState} from 'react';
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
import Modal from "react-native-modal";
import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import {Header,Icon} from 'react-native-elements'
import RoundList from '../Components/RoundList'
import Avatars from '../Components/Avatars';
import { FloatingAction } from "react-native-floating-action";
import VideoPlayer from 'react-native-video-controls';
import Headers from '../Components/Headers'
import Textinputs from '../Components/Textinputs';
import DaySelector from '../Components/DaySelector'
import AddLanModal from '../Components/AddLanModal'
import {Calendar,FakeData,ServiceType,LanguageList} from '../Data/StableData'
// import ImagePicker from 'react-native-image-crop-picker';
import CheckBox from '@react-native-community/checkbox';
import CenterModal from '../Components/CenterModal';



const SecondStepProfile =(props)=>{
  const[SliderValue,setSliderValue] =useState(6) 
  const[Counts,setCounts] =useState(0) 
  const[CalItems,setCalItems] =useState([]) 

  const[showLicense,setshowLicense] =useState(false)
  const[showGroup,setshowGroup] =useState(false)
  const[switchValue,setswitchValue] = useState(true)

  const[switchValue1,setswitchValue1] = useState(true)

  const[switchValue2,setswitchValue2] = useState(true)

  const [License,setLicense] = useState('')
  const [LicenseId,setLicenseId] = useState('')
  const [Group,setGroup] = useState('')
  const [GroupId,setGroupId] = useState('')

  const[showPicker,setshowPicker] = useState(false)

  const [LanValue,setLanValue] = useState('')
  const[showAddLan,setshowAddLan] = useState(false)
  const[ConvertionState,setConvertionState] = useState(false)
  const[GenTraState,setGenTraState] = useState(false)
  const[PriTraState,setPriTraState] = useState(false)



  const [TypeSelected1,setTypeSelected1] = useState([])
  const [TypeSelected2,setTypeSelected2] = useState('')
  const [TypeSelected3,setTypeSelected3] = useState('')

useEffect(()=>{

  setCalItems(Calendar)
  console.log('calendar:',CalItems)
},[Counts,TypeSelected1])
    



// let pickImage=async(useCamera)=> {
//   const opt = {
//     width: 300,
//     height: 400,
//     cropping: true,
//   }
//   try {
//     const imageSource1 = useCamera
//       ? await ImagePicker.openCamera(opt)
//       : await ImagePicker.openPicker(opt);
//       setshowPicker(false);

//       var fileImage = {
//         uri: imageSource1.path,
//         type:imageSource1.mime,
//         name:imageSource1.filename,
//        }
     
//        setLicense(fileImage)
      
        
//   }
//    catch {

//   }
// }



  return (
    <View style={styles.container}>
      <ScrollView>

   <Textinputs
       Title = 'مدرک تحصیلی اصلی '
       changeText = {()=>{}}
       values = {License}
       secure={false}
       TextStyle={styles.TextStyles}
       TitleStyle={styles.titleStyles}
       ErrorTitleStyle={{marginLeft:'10%'}}
       Edit={false}
       TextPress={()=>{setshowLicense(true)}}
      //  ErrorTitle={ErrorSubCategory}
      
     />

<Textinputs
       Title = 'رشته تحصیلی'
       changeText = {()=>{}}
       values = {Group}
       secure={false}
       TextStyle={styles.TextStyles}
       TitleStyle={styles.titleStyles}
       ErrorTitleStyle={{marginLeft:'10%'}}
       Edit={false}
       TextPress={()=>{setshowGroup(true)}}
      //  ErrorTitle={ErrorSubCategory} 
     />


<View style={{flexDirection:'row-reverse',justifyContent:'space-between'
       ,width:wp('90%'),marginHorizontal:wp('5%')}}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:wp('4%'),color:'black',fontFamily:'Digikala'}}>تصویر مدرک تحصیلی اصلی</Text>
          </View>
          <TouchableOpacity onPress={()=>{
            setshowPicker(true)
          }}
          style={{borderRadius:10,backgroundColor:'white',elevation:3,padding:10}}
          >

            <Text style={{fontSize:wp('4%'),color:'#cc3333',fontFamily:'Digikala'}}>جستجو</Text>
            </TouchableOpacity>

       </View>
       


       <View style={styles.switchMainView}>
           <View style={{width:'70%',marginHorizontal:wp('5%')}}>
          
             <Text style={styles.textStyle}>مایل به ارائه زمانبندی خدمات هستم</Text>
             </View>
           <View style={{width: '25%'}}>
           <Switch  
            value={switchValue}  
            onValueChange ={(switchValue1)=>{
              setswitchValue(!switchValue)     
            }}
             style={{}}
            thumbColor= {'white'}
            trackColor ={{ false: "#cc3333", true: "gray" }}
           /> 
           </View>
         </View>

         {!switchValue &&
<View style={{width:wp(100)}}>
<FlatList 
            data={CalItems}
            contentContainerStyle={{borderRadius:10,backgroundColor:'white',elevation:2,marginHorizontal:wp(5),marginBottom:5}}
            renderItem={({item,index})=>
<DaySelector setValue={setSliderValue} 
value={SliderValue}
disableState={item.StateValue}
Title={item.Title}
PressItem={()=>{
 item.StateValue = !item.StateValue
 setCounts(Counts+1)
}}
/>
            }
/>
</View>
}

         <View style={styles.switchMainView}>
           <View style={{width:'70%',marginHorizontal:wp('5%')}}>
          
             <Text style={styles.textStyle}>مایل به ارائه خدمات حضوری هستم</Text>
             </View>
           <View style={{width: '25%'}}>
           <Switch  
            value={switchValue1}  
            onValueChange ={(switchValue)=>{
              setswitchValue1(!switchValue1)     
            }}
             style={{}}
            thumbColor= {'white'}
            trackColor ={{ false: "#cc3333", true: "gray" }}
           /> 
           </View>
         </View>

         <View style={styles.switchMainView}>
           <View style={{width:'70%',marginHorizontal:wp('5%')}}>
          
             <Text style={styles.textStyle}>مایل به همکاری سطح بین الملل هستم</Text>
             </View>
           <View style={{width: '25%'}}>
           <Switch  
            value={switchValue2}  
            onValueChange ={(switchValue1)=>{
              setswitchValue2(!switchValue2)     
            }}
             style={{}}
            thumbColor= {'white'}
            trackColor ={{ false: "#cc3333", true: "gray" }}
           /> 
           </View>
         </View>






<CenterModal showModal={showLicense} 
       closeModal={()=>setshowLicense(false)}  dataSource={FakeData}
       ModalStyle={{width:'80%',marginHorizontal:'10%'}}
       ViewStyle={{height:hp('60%'),backgroundColor: 'white',
       borderRadius: 10,borderColor: 'white',width:'100%'}}
       ItemTitle='Title'
       CategorySelected={License}  setCategorySelected={setLicense}
       CategorySelectedId={LicenseId}  setCategorySelectedId={setLicenseId}
        />

<CenterModal showModal={showGroup} 
       closeModal={()=>setshowGroup(false)}  dataSource={FakeData}
       ModalStyle={{width:'80%',marginHorizontal:'10%'}}
       ViewStyle={{height:hp('60%'),backgroundColor: 'white',
       borderRadius: 10,borderColor: 'white',width:'100%'}}
       ItemTitle='Title'
       CategorySelected={Group}  setCategorySelected={setGroup}
       CategorySelectedId={GroupId}  setCategorySelectedId={setGroupId}
        />






{!switchValue2 &&
<View style={{width:wp('90%'),marginRight:wp('5%'),marginBottom:10,flexDirection:'row-reverse',alignItems:'center',justifyContent:'space-between'}}>
  <View>
    <Text style={{color:'black',fontSize:wp('4%'),fontWeight:'bold',textAlign:'center',fontFamily:'Digikala'}}>سطح مهارت زبان </Text>
    </View>

    <View >
    <TouchableOpacity style={{width:wp('20%'),height:50,justifyContent:'center'
            ,alignItems:'center',borderRadius:10,elevation:1,
            borderColor:'white',alignSelf:'center',marginHorizontal:wp('1%'),marginBottom:'10%'}}
            onPress={()=>{
              setshowAddLan(true)
            }}>
               <Text style={{fontFamily:'Digikala',textAlign:'center',color:'#cc3333',fontSize:wp('4%')}}>افزودن</Text>
            </TouchableOpacity>
    </View>
  </View>
  }

{!switchValue2 &&
  <View style={{width:wp(90),marginHorizontal:wp(5)
  ,elevation:2,height:'auto',padding:10,borderRadius:10,marginBottom:10}}>

    <View style={{flexDirection:'row-reverse',justifyContent:'space-between',alignItems:'center'
    ,width:'100%',borderRadius:10,height:50,backgroundColor:'gray',opacity:0.5}}>
      <View style={{width:'30%',justifyContent:'center',alignItems:'center'}}>
      <Text style={{color:'black',fontSize:wp(3),fontFamily:'Digikala'}}>زبان</Text>
      </View>
     <View>
      <Text style={{color:'black',fontSize:wp(3),fontFamily:'Digikala'}}>مکالمه</Text>
      </View>
      <View>
      <Text style={{color:'black',fontSize:wp(3),fontFamily:'Digikala'}}>ترجمه عمومی</Text>
      </View>
      <View>
      <Text style={{color:'black',fontSize:wp(3),fontFamily:'Digikala'}}>ترجمه تخصصی</Text>
      </View>
     
     

    </View>

    <FlatList 
              data={LanguageList}
              // numColumns={4}
              // contentContainerStyle={{flexDirection:'row-reverse',justifyContent:'space-between',alignItems:'center'
              // ,width:'100%',borderRadius:10}}
               renderItem={({item,index}) =>  
                <View style={{flexDirection:'row-reverse',justifyContent:'space-between',alignItems:'center'
                ,width:'100%',height:50}}>
                   <View style={{width:'30%',justifyContent:'center',alignItems:'center'}}>
      <Text style={{color:'gray',fontSize:wp(3.5),fontFamily:'Digikala'}}>{item.Title}</Text>
      </View>
      <View style={{justifyContent:'center',alignItems:'center',width:'20%'}}>
      <CheckBox
    disabled={!item.GenTraState}
    value={item.ConState}
  />
      </View>
      <View style={{justifyContent:'center',alignItems:'center',width:'20%'}}>
      <CheckBox
    disabled={!item.GenTraState}
    value={item.GenTraState}
  />
     
      </View>
      <View style={{justifyContent:'center',alignItems:'center',width:'20%'}}>
      <CheckBox
    disabled={!item.PriTraState}
    value={item.PriTraState}
  />
      </View>
                </View>


                }
              /> 



  </View>
}

<AddLanModal closeModal={()=>{setshowAddLan(false)}} 
showModal={showAddLan}
Conversation={ConvertionState}
setConversation={setConvertionState}
GeneralTra={GenTraState}
setGeneralTra={setGenTraState}
PrivateTra={PriTraState}
setPrivateTra={setPriTraState}
value={LanValue}
setValue={setLanValue}
/>




<View style={{width:wp('90%'),marginRight:wp('5%'),marginBottom:10}}>
    <Text style={{color:'black',fontSize:wp('4%'),fontWeight:'bold',fontFamily:'Digikala'}}>نحوه برقراری ارتباط : </Text>
  </View>

<FlatList 
              data={ServiceType}
              numColumns={3}
              contentContainerStyle={{borderRadius:10,backgroundColor:'white',elevation:2,marginVertical:wp(2)
              ,marginHorizontal:wp(5),marginBottom:5}}
               renderItem={({item,index}) =>  
                     <TouchableOpacity style={{width:('30%'),margin:'1%'
                     ,justifyContent:'center',alignItems:'center',borderRadius:wp(20)
                     ,elevation:TypeSelected1.filter(a=>a == item.id).length > 0  ? 2 : 0,paddingTop:20}}
                     onPress={()=>{
                        {
                          console.log(TypeSelected1)
                          var data1 = TypeSelected1;
                          var index = data1.indexOf(item.id);
                          if (index > -1) 
                          data1.splice(index, 1);
                          else
                          {
                          // var data1 = [];
                          data1.push(item.id)
                          }
                          setTypeSelected1(data1) 
                            setCounts(Counts+1)
                        }
                       
                      }}
                     >
                      
                         <View style={{marginBottom:'20%'}}>
                           <Icon name={item.iconName} size={40} color={item.Color} type={item.iconType} />
                           </View>
                           <View style={{marginBottom:'20%'}}>
                           <Text style={{fontFamily:'Digikala',fontSize:wp('3%')}}>{item.Title}</Text>
                           </View>
                       </TouchableOpacity>
                   }
              /> 


<TouchableOpacity style={{width:'90%',height:50,justifyContent:'center'
            ,alignItems:'center',borderRadius:10,elevation:2,borderColor:'#417288',backgroundColor:'#417288',alignSelf:'center',marginVertical:'10%'}}
            onPress={()=>{
              props.navigation.navigate('AccountControl')
            }}>
            
               <Text style={{fontFamily:'Digikala',textAlign:'center',color:'white',fontSize:wp('5%')}}>ثبت</Text>
            </TouchableOpacity>



            
<Modal
isVisible={showPicker}
onBackdropPress={()=>{setshowPicker(false)}}
>
<View style={styles.modalContainer}>
  <Text style={{ textAlign: "center", paddingVertical: 10,fontFamily:'Digikala' }}>
    انتخاب عکس
  </Text>
  <View style={styles.line} />
  <View style={styles.modalInner}>
    <TouchableOpacity
      style={styles.modalBtn}
      onPress={() => {

        // pickImage(false)
      }}
    >
      <Text style={styles.modalBtnText}>
        انتخاب از گالری
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.modalBtn}
      // onPress={() => {pickImage(true)}}
    >
      <Text style={styles.modalBtnText}>
        عکس
      </Text>
    </TouchableOpacity>
  </View>
</View>
</Modal>

</ScrollView>
       </View>

  )
}
const styles = StyleSheet.create({
  container: 
      {
      flex: 1,marginBottom:20,marginTop:20
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
    },
    voiceMsgContainer: {
      paddingVertical: 10,
      paddingHorizontal: 5,
      flexDirection: "row",
      marginVertical: 5,
      elevation: 2,
      borderRadius: 14,
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,
    },
  
    modalContainer: {
      backgroundColor: "white",
      borderRadius: 10,
      width: "80%",
      alignSelf: "center",
      height: 140,
    },
    modalInner: {
      flex: 1,
      justifyContent: "space-around",
      padding: 15,
    },
    modalBtn: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    modalBtnText: {
      fontSize:10,
      color: "#0B7CC1",fontFamily:'Digikala'
    },
    line: {
      backgroundColor: "#ddd",
      width: "100%",
      height: 1,
    },
    TextStyles:
    {
      textAlign:'right',color:'black',
      fontSize:wp('4%'),borderWidth:0.5,borderColor:'black',marginLeft:'10%',marginRight:'10%',fontFamily:'Digikala'
    },
    titleStyles:
    {
      marginRight:'10%',fontFamily:'Digikala'
    },
    switchMainView:
    {
       marginVertical:15, width: '100%', flexDirection: 'row-reverse'
     },
     textStyle:
     {
      color:'black',textAlignVertical: 'center', fontSize: wp('4%'),fontFamily:'Digikala'
    }


    })



export default SecondStepProfile;


