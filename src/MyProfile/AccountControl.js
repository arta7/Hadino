import React, { useEffect,useRef, useState } from 'react';
import { Animated, View,Text,ScrollView,StyleSheet,Image,TouchableOpacity,FlatList,Switch } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import Accordion from 'react-native-collapsible/Accordion';
import { Icon }  from "react-native-elements";
import Textinputs from '../Components/Textinputs'
import {Departments,Groups,Duty,CityList,StateList,Calendar,FakeData,ServiceType,LanguageList} from '../Data/StableData'
import CenterModal from '../Components/CenterModal';
import MultiSelector from '../Components/MultiSelector';
import DaySelector from '../Components/DaySelector'
import AddLanModal from '../Components/AddLanModal'
import Modal from "react-native-modal";
import CheckBox from '@react-native-community/checkbox';


const GenderData =[{title:'مرد',id:'0'},{title:'زن',id:'1'},]


const _departmentData =[]
const _groupData = []
const _dutyData = []

export default function AccountControl(props) {
  const animationProgress = useRef(new Animated.Value(0))
  const[activeSections,setactiveSections] =useState([])
  const[Name,setName]= useState('')
  const[Family,setFamily]= useState('')
  const[NationalCode,setNationalCode]=useState('')
  const[Gender,setGender] = useState('')
  const[GenderId,setGenderId] = useState('')

  const[_departemnt,_setDepartment] = useState([])
  const[_departemntId,_setDepartmentId] = useState('')
  const[_state,_setState]=useState('')
  const[_stateId,_setStateId] = useState('')

  const[_city,_setCity]=useState('')
  const[_cityId,_setCityId] = useState('')
  const[_groups,_setGroups] = useState([])
  const[_groupsId,_setGroupsId] = useState('')

  const[_duty,_setDuty] = useState([])
  const[_dutyId,_setDutyId] = useState('')

  const[Address,setAddress] = useState('')
  const[BirthDate,setBirthDate]=useState('')
 

  const[ShowGender,setShowGender] =useState(false)
  const[showState,setshowState] =useState(false)
  const[showCity,setshowCity] =useState(false)
  const[showDepartment,setshowDepartment] =useState(false)
  const[showGroup,setshowGroup] =useState(false)
  const[showDuty,setshowDuty] =useState(false)

  const[showDate,setshowDate] =useState(false)
  const[SliderValue,setSliderValue] =useState(6) 
  const[Counts,setCounts] =useState(0) 
  const[CalItems,setCalItems] =useState([]) 

  const[showLicense,setshowLicense] =useState(false)
  // const[showGroup,setshowGroup] =useState(false)
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

  const SECTIONS = [
    {
      title: 'مشخصات کاربری',
      icon:'user-circle',
      iconType:'font-awesome',
      content: <View>

    <Textinputs
       Title = 'کد عضویت '
       changeText = {(v)=>{setName(v)}}
       values = {'111232'}
       secure={false}
       TextStyle={styles.TextStyles}
       ErrorTitleStyle={{marginLeft:'10%'}}
       TitleStyle={styles.titleStyles}
       Edit={false}
     />

      </View>,
      index:0
    },
    {
      title: 'اطلاعات فردی',
      icon:'information',
      iconType:'material-community',
      content: <View>
        <Textinputs
       Title = 'نام '
       changeText = {(v)=>{setName(v)}}
       values = {Name}
       secure={false}
       TextStyle={styles.TextStyles}
       ErrorTitleStyle={{marginLeft:'10%'}}
       TitleStyle={styles.titleStyles}
       Edit={true}
      //  ErrorTitle={ErrorServiceName}
      
     />
         <Textinputs
       Title = 'نام خانوادگی '
       changeText = {(v)=>{setFamily(v)}}
       values = {Family}
       secure={false}
       TextStyle={styles.TextStyles}
       ErrorTitleStyle={{marginLeft:'10%'}}
       TitleStyle={styles.titleStyles}
       Edit={true}
      //  ErrorTitle={ErrorServiceName}
      
     />

<Textinputs
       Title = 'کد ملی '
       changeText = {(v)=>{setNationalCode(v)}}
       values = {NationalCode}
       secure={false}
       TextStyle={styles.TextStyles}
       ErrorTitleStyle={{marginLeft:'10%'}}
       TitleStyle={styles.titleStyles}
       Edit={true}
      //  ErrorTitle={ErrorServiceName}
      
     />
          <Textinputs
       Title = 'تاریخ تولد '
       changeText = {()=>{}}
       values = {BirthDate}
       secure={false}
       TextStyle={styles.TextStyles}
       TitleStyle={styles.titleStyles}
       ErrorTitleStyle={{marginLeft:'10%'}}
       Edit={false}
       TextPress={()=>{setshowDate(true)}}
      //  ErrorTitle={ErrorSubCategory}
      
     />

         <Textinputs
       Title = 'جنسیت '
       changeText = {()=>{}}
       values = {Gender}
       secure={false}
       TextStyle={styles.TextStyles}
       TitleStyle={styles.titleStyles}
       ErrorTitleStyle={{marginLeft:'10%'}}
       Edit={false}
       TextPress={()=>{setShowGender(true)}}
      //  ErrorTitle={ErrorSubCategory}
      
     />

            </View>,
      index:1
    },
    {
      title: 'تحصیلات دانشگاهی',
      icon:'university',
      iconType:'font-awesome',
      content: <View>
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

            <Text style={{fontSize:wp('4%'),color:'#0ab076',fontFamily:'Digikala'}}>جستجو</Text>
            </TouchableOpacity>

       </View>
            </View>,
      index:2
    },
    {
      title: 'آدرس و موقعیت مکانی',
      icon:'place',
      iconType:'material',
      content: <View>
    
<Textinputs
       Title = 'استان'
       changeText = {()=>{}}
       values = {_state}
       secure={false}
       TextStyle={styles.TextStyles}
       TitleStyle={styles.titleStyles}
       ErrorTitleStyle={{marginLeft:'10%'}}
       Edit={false}
       TextPress={()=>{setshowState(true)}}
      //  ErrorTitle={ErrorSubCategory}
      
     />

    <Textinputs
       Title = 'شهر'
       changeText = {()=>{}}
       values = {_city}
       secure={false}
       TextStyle={styles.TextStyles}
       TitleStyle={styles.titleStyles}
       ErrorTitleStyle={{marginLeft:'10%'}}
       Edit={false}
       TextPress={()=>{setshowCity(true)}}
      //  ErrorTitle={ErrorSubCategory}
      
     />
    
         <Textinputs
       Title = 'آدرس'
       changeText = {(v)=>{setAddress(v)}}
       values = {Address}
       secure={false}
       TextStyle={styles.TextStyles}
       ErrorTitleStyle={{marginLeft:'10%'}}
       TitleStyle={styles.titleStyles}
       Edit={true}
       TouchStyle={{height:200}}
       multiline={true}
       //ErrorTitle={ErrorServiceName}
      
     />

            </View>,
      index:3
    },
    {
      title: 'زمانبندی و شیوه همکاری',
      icon:'calendar-times-o',
      iconType:'font-awesome',
      content: <View>
      

   
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
            trackColor ={{ false: "#0ab076", true: "gray" }}
           /> 
           </View>
         </View>

         {
         !switchValue &&
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

            </View>,
      index:4
    },
    {
      title: 'سطح مهارت زبان خارجی',
      icon:'language',
      iconType:'font-awesome',
      content: <View>
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
            trackColor ={{ false: "#0ab076", true: "gray" }}
           /> 
           </View>
         </View>

         
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
               <Text style={{fontFamily:'Digikala',textAlign:'center',color:'#0ab076',fontSize:wp('4%')}}>افزودن</Text>
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

            </View>,
      index:5
    },
    {
      title: 'دپارتمان کاری و مهارت',
      icon:'social-skillshare',
      iconType:'foundation',
      content: <View>
    
<Textinputs
       Title = 'دپارتمان کاری '
       changeText = {()=>{}}
       values = {_departemnt}
       secure={false}
       TextStyle={styles.TextStyles}
       TitleStyle={styles.titleStyles}
       ErrorTitleStyle={{marginLeft:'10%'}}
       Edit={false}
       TextPress={()=>{setshowDepartment(true)}}
      //  ErrorTitle={ErrorSubCategory}
     />
                <View>
          <FlatList 
            data={_departemnt}
            contentContainerStyle={{flexDirection:'row-reverse',flexWrap:'wrap',borderWidth:_departemnt.length>0 ? 0.5:0
            ,borderRadius:10,borderColor:'grey',marginHorizontal:'10%'}}
            renderItem={({item,index})=>
                <TouchableOpacity 
                style={{ alignSelf:"flex-start",padding:10,
                borderRadius:10,backgroundColor:'#0ab076',margin:10}} 
                 >
                 <Text style={{fontFamily:'Digikala',textAlign:'right',color:'white',
            fontSize:wp('3%')}}>{item.title}</Text>
                </TouchableOpacity>
            }

            />
            </View>


    <Textinputs
       Title = 'گروه تخصصی '
       changeText = {()=>{}}
       values = {_groups}
       secure={false}
       TextStyle={styles.TextStyles}
       TitleStyle={styles.titleStyles}
       ErrorTitleStyle={{marginLeft:'10%'}}
       Edit={false}
       TextPress={()=>{setshowGroup(true)}}
      //  ErrorTitle={ErrorSubCategory}
      
     />

<View>
          <FlatList 
            data={_groups}
            contentContainerStyle={{flexDirection:'row-reverse',flexWrap:'wrap'
            ,borderWidth:_groups.length>0 ? 0.5:0,borderRadius:10,borderColor:'grey',marginHorizontal:'10%'}}
            renderItem={({item,index})=>
                <TouchableOpacity 
                style={{ alignSelf:"flex-start",padding:10,
                borderRadius:10,backgroundColor:'#0ab076',margin:10}} 
                 >
                 <Text style={{fontFamily:'Digikala',textAlign:'right',color:'white',
            fontSize:wp('3%')}}>{item.title}</Text>
                </TouchableOpacity>
            }

            />
            </View>



    <Textinputs
       Title = 'مهارت ها'
       changeText = {()=>{}}
       values = {_duty}
       secure={false}
       TextStyle={styles.TextStyles}
       TitleStyle={styles.titleStyles}
       ErrorTitleStyle={{marginLeft:'10%'}}
       Edit={false}
       TextPress={()=>{setshowDuty(true)}}
      //  ErrorTitle={ErrorSubCategory}
      
     />

<View>
          <FlatList 
            data={_duty}
            contentContainerStyle={{flexDirection:'row-reverse',flexWrap:'wrap'
            ,borderWidth:_duty.length>0 ? 0.5:0,borderRadius:10,borderColor:'grey',marginHorizontal:'10%'}}
            renderItem={({item,index})=>
                <TouchableOpacity 
                style={{ alignSelf:"flex-start",padding:10,
                borderRadius:10,backgroundColor:'#0ab076',margin:10}} 
                 >
                 <Text style={{fontFamily:'Digikala',textAlign:'right',color:'white',
            fontSize:wp('3%')}}>{item.title}</Text>
                </TouchableOpacity>
            }

            />
            </View>




            </View>,
      index:6
    }
  ];


  let  _renderSectionTitle = (section) => {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  }

  let _renderHeader = (section,index,IsActive) => {
    return (
      <View style={styles.header}>
        {
          !IsActive  ?
          <Icon name='keyboard-arrow-left' color='#0ab076'/>
          :
          <Icon name='keyboard-arrow-up' color='#0ab076'/>
          
        }
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        
        <Text style={styles.headerText}>{section.title}</Text>
        <Icon name={section.icon} type={section.iconType} color='black' size={25}/>

        </View>
        
       

      </View>
    );
  }

let  _renderContent = (section) => {
    return (
      <>
          {section.content}
          </>
         
    );
  }

 let  _updateSections = (activeSections,index) => {
    setactiveSections(activeSections)
  };


  useEffect(() => {

  }, [])

  return (
    <View style={{flex: 1}}>
        <ScrollView style={{bottom:20}}>
        <View style={{width:wp(100),height:hp(40),justifyContent:'center',alignItems:'center',borderWidth:0.5
        ,borderBottomColor:'gray',backgroundColor: '#F5FCFF'}}>

            <View style={{borderRadius:70,width:140,justifyContent:'center',alignItems:'center'
            ,height:140,elevation:1}}>
              <Image 
              source={require('./../Images/Avatar.png')}
            style={{width:'100%',height:'100%'}}
            
              />
                 </View>

            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'gray',fontSize:wp(4),fontFamily:'Digikala'}}>
                     نام کاربری  1344424
                </Text>
                <Text style={{color:'gray',fontSize:wp(4),fontFamily:'Digikala'}}>
                   20000 تومان
                </Text>
            </View>
        </View>

      
        <Accordion
        sections={SECTIONS}
        activeSections={activeSections}
        renderHeader={_renderHeader}
        renderContent={_renderContent}
        onChange={_updateSections}
      />
     

        </ScrollView>

        <CenterModal showModal={ShowGender} 
       closeModal={()=>setShowGender(false)}  dataSource={GenderData}
       ModalStyle={{width:'60%',marginRight:'20%',marginLeft:'20%'}}
       ViewStyle={{height:hp('30%'),backgroundColor: 'white',
       borderRadius: 10,borderColor: 'white',width:'100%'}}
       ItemTitle='Title'
       CategorySelected={Gender}  setCategorySelected={setGender}
       CategorySelectedId={GenderId}  setCategorySelectedId={setGenderId}
        />


<CenterModal showModal={showState} 
       closeModal={()=>setshowState(false)}  dataSource={StateList}
       ModalStyle={{width:'80%',marginHorizontal:'10%'}}
       ViewStyle={{height:hp('60%'),backgroundColor: 'white',
       borderRadius: 10,borderColor: 'white',width:'100%'}}
       ItemTitle='Title'
       CategorySelected={_state}  setCategorySelected={_setState}
       CategorySelectedId={_stateId}  setCategorySelectedId={_setStateId}
        />


<CenterModal showModal={showCity} 
       closeModal={()=>setshowCity(false)}  dataSource={CityList}
       ModalStyle={{width:'80%',marginHorizontal:'10%'}}
       ViewStyle={{height:hp('60%'),backgroundColor: 'white',
       borderRadius: 10,borderColor: 'white',width:'100%'}}
       ItemTitle='Title'
       CategorySelected={_city}  setCategorySelected={_setCity}
       CategorySelectedId={_cityId}  setCategorySelectedId={_setCityId}
        />

<MultiSelector showModal={showDepartment} 
       closeModal={()=>setshowDepartment(false)}  dataSource={Departments}
       ModalStyle={{width:'80%',marginHorizontal:'10%'}}
       ViewStyle={{height:hp('60%'),backgroundColor: 'white',
       borderRadius: 10,borderColor: 'white',width:'100%'}}
       selectedItem={_departemnt}  setselectedItem={_setDepartment}
       data={_departmentData}
        />

<MultiSelector showModal={showGroup} 
       closeModal={()=>setshowGroup(false)}  dataSource={Groups}
       ModalStyle={{width:'80%',marginHorizontal:'10%'}}
       ViewStyle={{height:hp('60%'),backgroundColor: 'white',
       borderRadius: 10,borderColor: 'white',width:'100%'}}
       selectedItem={_groups}  setselectedItem={_setGroups}
       data={_groupData}
        />

<MultiSelector showModal={showDuty} 
       closeModal={()=>setshowDuty(false)}  dataSource={Duty}
       ModalStyle={{width:'80%',marginHorizontal:'10%'}}
       ViewStyle={{height:hp('60%'),backgroundColor: 'white',
       borderRadius: 10,borderColor: 'white',width:'100%'}}
       selectedItem={_duty}  setselectedItem={_setDuty}
       data={_dutyData}
        />


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





{/* <FlatList 
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
              />  */}


                   
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



  
   </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',marginTop:20
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    marginBottom: 20,
  },
  header: {
    backgroundColor: 'white',
    padding: 10,flexDirection:'row',justifyContent:'space-between'
    ,marginTop:10,borderBottomColor:'gray',borderBottomWidth:0.5,marginTop:10,marginHorizontal:wp(2)
    //,borderRadius:10
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,fontFamily:'Digikala',marginHorizontal:10
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',marginBottom:5,borderBottomWidth:0.3,borderBottomColor:'gray'
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
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
  TextStyles:
  {
    textAlign:'right',color:'black',
    fontSize:wp('4%'),borderWidth:0.5,borderColor:'black',marginLeft:'10%',marginRight:'10%',fontFamily:'Digikala'
  },
  titleStyles:
  {marginRight:'10%',fontFamily:'Digikala'
},
switchMainView:
{
   marginVertical:15, width: '100%', flexDirection: 'row-reverse'
 },
});