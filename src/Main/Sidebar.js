 import React, { useState, useEffect } from 'react';
 import {StyleSheet, Text, TouchableOpacity, View, Image,Switch} from 'react-native';
 
 import { Icon,Avatar } from 'react-native-elements';
 
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 import axios from 'axios';
import { ScrollView } from 'react-navigation';



 
 const Sidebar = (props) => {
  const[switchValue,setswitchValue] = useState(false)
  
useEffect(()=>{
  // CheckUserState()
},[])


// let CheckUserState=()=>{
//   if(LoginData.id != '')
//   {
//     var axiosConfig = {
//       headers:{
//         "accept": "*",
//         'Authorization' :  LoginData.type + ' ' + LoginData.token
//               }
//      }
//     axios.get(APIMaster.URL + APIMaster.Account.IsUserActive+'?userId='+LoginData.id
//       ,axiosConfig)
//     .then( (response)=> {
//       console.log('data ',response.data.result.data)

//       if(response.data.result.data)
//       {
//           setswitchValue(true)
          
//       }
//     }).catch( (error)=> {
//       // if(error.response.status == 401)
//       //       {
//       //         console.log('Online Error ',error)  
//       //         props.navigator.replace('Login')
//       //       }
//       //       else
//       //       {
//             console.log('Online Error ',error)  
//       //       }
//     })
//   }
// }
     
  // let ChangeUserState=()=>{
  //   console.log('LoginData',LoginData.token)
  //   const options = {
  //     method: 'PUT',
  //     headers: { "accept": "*",
  //     'Authorization' : LoginData.type + ' ' + LoginData.token },
  //     url:APIMaster.URL + APIMaster.Account.ActiveORDeactiveUser
  //   };
  // axios(options)
  // .then( (response)=> {     
          
  //   setswitchValue(!switchValue)
          
  // })
  // .catch( (error)=> {
  //   if(error.response.status == 401)
  //         {
  //           console.log('Online Error ',error)  
  //           props.navigator.replace('Login')
  //         }
  //         else
  //         {
  //           //setdataSource(response.data)
  //         console.log('Online Error ',error)  
  //         }
  // })
  //  }




   return (
     <View style={styles.SidbarStyle}>
 {/* <LinearGradient colors={ColorRange} style={{height:('100%')}}> */}
      <ScrollView>



        <View style={{flexDirection:'row-reverse',width:'90%',marginTop:'5%'}}>
         
      
        <View style={{width:'30%',marginLeft:'10%',marginRight:'10%'}}>
        <Avatar
    rounded
    size={120}
    title={''}
    source={require('./../Images/Avatar.png')}
    activeOpacity={0.9}
    // containerStyle={{borderWidth:5,borderColor:'white'}}
    avatarStyle={{resizeMode:'contain'}}
  />
      </View>
      <View style={{width:'40%',justifyContent:'center'}}>
      <Text style={{color:'white',fontSize:wp(5),fontFamily:'Digikala'}}>بیژن شعبانی</Text>
      </View>
        </View>
        <View style={{borderWidth:0.3,width:'100%',height:0,marginTop:'5%',borderColor:'gray'}}>

</View>

        <View style={{flexDirection:'row-reverse',width:'90%',alignItems:'center',marginTop:'10%',marginHorizontal:'5%'}}>
          <View style={{width:'45%'}}>

          <Text style={{color:'white',fontSize:wp(3.5),fontFamily:'Digikala'}}>کد عضویت</Text>
          </View>
      
          <View style={{width:'30%',flexDirection:'row',alignItems:'center'}}>
      <Text style={{color:'white',fontSize:wp(3.5),marginLeft:'5%',fontFamily:'Digikala'}}>123313</Text>
      <TouchableOpacity>
      <Icon name='content-copy' color={'gray'} size={20}/>
      </TouchableOpacity>
      </View>
        </View>

        <View style={{flexDirection:'row-reverse',width:'100%',alignItems:'center',marginTop:'5%'}}>
        <View style={{width:'40%',marginHorizontal:'5%'}}>

          <Text style={{color:'white',fontSize:wp(3.5),fontFamily:'Digikala'}}>وضعیت عضویت</Text>
          </View>
      
          <View style={{width:'20%'}}>
          <View style={{width:'100%',height:30,backgroundColor:'red',borderRadius:20,justifyContent:'center'}}>
          <Text style={{color:'white',fontSize:wp(2),textAlign:'center',fontWeight:'bold',fontFamily:'Digikala'}}>تعلیق </Text>
          </View>
      </View>
        </View>

        <View style={{borderWidth:0.3,width:'100%',height:0,marginTop:'5%',borderColor:'gray'}}>

        </View>

      
 
       <View style={{width: '98%', height: hp('70%'), marginBottom: 5,
        marginLeft: 5, marginRight: 5,marginTop:hp('5%'),alignSelf:'flex-end'}}>
        

        <View style={{marginBottom: 15, width: '98%'
         , flexDirection: 'row-reverse',marginLeft:10,justifyContent:'space-between'}}>
           <View style={{flexDirection:'row-reverse',width:'75%'}}>
           <Icon name="power" color='white' type="materialicon" size={hp('4%')}/>
             <Text style={{fontFamily:'Digikala',marginRight:5,color:'white',
              textAlignVertical: 'center', fontSize: wp('4%')}}>فعال</Text>
               
             </View>
           <View style={{width: '20%',justifyContent:'center'}}>
           <Switch  
            value={switchValue}  
            onValueChange ={(switchValue1)=>{
             
              setswitchValue(!switchValue)
              // ChangeUserState()
             
            }}
            // style={props.switchStyle}
            thumbColor= {!switchValue  ? 'white' : 'gray'}
           /> 
           </View>
         </View>
        
          {
         <TouchableOpacity style={styles.TouchStyle} onPress={()=>{
           props.closeItem()
           props.navigator.navigate('Wallet')
           }}>
         <Icon name="credit-card" color='white' type="materialicon" size={hp('4%')}/>
             <Text style={{fontFamily:'Digikala',marginRight:5,color:'white'
             ,textAlignVertical: 'center', fontSize: wp('4%')}}>کیف پول</Text>
         </TouchableOpacity>
 }
          {
         <TouchableOpacity style={styles.TouchStyle} onPress={()=>{
           props.closeItem()
           props.navigator.navigate('Cooperation')
           }}>
         <Icon name="handshake-o" color='white' type="font-awesome" size={hp('3%')}/>
             <Text style={{fontFamily:'Digikala',marginRight:5,color:'white'
             ,textAlignVertical: 'center', fontSize: wp('4%')}}>فرصت همکاری</Text>
         </TouchableOpacity>
 }

{
         <TouchableOpacity style={styles.TouchStyle} onPress={()=>{
          //  props.closeItem()
          //  props.navigator.navigate('Wallet')
           }}>
         <Icon name="notifications" color='white' type="materialicon" size={hp('4%')}/>
             <Text style={{fontFamily:'Digikala',marginRight:5,color:'white'
             ,textAlignVertical: 'center', fontSize: wp('4%')}}>اعلانات</Text>
         </TouchableOpacity>
 }

{
         <TouchableOpacity style={styles.TouchStyle} onPress={()=>{
          //  props.closeItem()
          //  props.navigator.navigate('Wallet')
           }}>
         <Icon name="person" color='white' type="materialicon" size={hp('4%')}/>
             <Text style={{fontFamily:'Digikala',marginRight:5,color:'white'
             ,textAlignVertical: 'center', fontSize: wp('4%')}}>پروفایل</Text>
         </TouchableOpacity>
 }

{
         <TouchableOpacity style={styles.TouchStyle} onPress={()=>{
          //  props.closeItem()
          //  props.navigator.navigate('Wallet')
           }}>
         <Icon name="settings" color='white' type="materialicon" size={hp('4%')}/>
             <Text style={{fontFamily:'Digikala',marginRight:5,color:'white'
             ,textAlignVertical: 'center', fontSize: wp('4%')}}>تنظیمات</Text>
         </TouchableOpacity>
 }

           {
         <TouchableOpacity style={styles.TouchStyle} onPress={()=>{
          //  props.closeItem()
          //  props.navigator.navigate('Wallet')
           }}>
         <Icon name="heart" color='white' type="antdesign" size={hp('4%')}/>
             <Text style={{fontFamily:'Digikala',marginRight:5,color:'white'
             ,textAlignVertical: 'center', fontSize: wp('4%')}}>علاقه مندیها</Text>
         </TouchableOpacity>
 }
  { 
         <TouchableOpacity style={styles.TouchStyle} onPress={()=>{
          props.closeItem()
          props.navigator.navigate('ChatScreen')
          }}>
           <Icon name="questioncircle" color='white' type="antdesign" size={hp('4%')}/>
             <Text style={{fontFamily:'Digikala',marginRight:5,color:'white'
             ,textAlignVertical: 'center', fontSize: wp('4%')}}>پشتیبانی</Text>
         </TouchableOpacity>
 }
 {
         <TouchableOpacity style={styles.TouchStyle} onPress={()=>{
           props.closeItem()
           props.navigator.navigate('Guid')
           }}>
         <Icon name="question" color='white' type="font-awesome" size={hp('4%')}/>
             <Text style={{fontFamily:'Digikala',marginRight:5,color:'white'
             ,textAlignVertical: 'center', fontSize: wp('4%')}}>راهنمایی و شرایط</Text>
         </TouchableOpacity>
 }

{
         <TouchableOpacity style={styles.TouchStyle} onPress={()=>{
           props.closeItem()
          props.navigator.navigate('About')
           }}>
         <Icon name="info" color='white' type="font-awesome" size={hp('4%')}/>
             <Text style={{fontFamily:'Digikala',marginRight:5,color:'white'
             ,textAlignVertical: 'center', fontSize: wp('4%')}}>درباره ما</Text>
         </TouchableOpacity>
 }
 
       
         
        
       </View>  
       </ScrollView>
       
     </View>
   );
 };
 
 
 const styles = StyleSheet.create({
   SidbarStyle:{
     flex: 1, // maximiz
     backgroundColor: '#cc3333'
   },
   TextStyle: {
    //  fontFamily: Font.FontSansR, 
     fontSize: wp('4%'), 
     color: 'white',
     width: '100%',
     textAlign: 'right',
     textAlignVertical: 'center'
   },
   TextInputStyle: {
     width: wp('80%'), 
     height: hp('6%'),
     marginLeft: wp('10%'), 
     marginRight: wp('10%'), 
     backgroundColor:'#d9d9d9', 
     borderRadius: 30,
     textAlign: 'center',
     fontSize: wp('3%'),
     elevation: 1
   },
   TitleText: {
    //  fontFamily: Font.FontSansB, 
     fontSize: wp('7%'), 
     color: '#2196F3',
     width: '100%',
     height: '35%',
     textAlign: 'right',
     textAlignVertical: 'center'
   },
   ButtonStyle: {
     width: wp('80%'), 
     height: hp('6%'),
     marginLeft: wp('10%'), 
     marginRight: wp('10%'), 
     backgroundColor:'#2196F3', 
     borderRadius: 30,
     alignItems: 'center',
     justifyContent: 'center'
   },
   ButtonTextStyle: {
    //  fontFamily: Font.FontSansR, 
     fontSize: wp('4%'), 
     marginRight: 30,
     justifyContent: 'center',
     alignItems: 'flex-end',
     color: 'white',
     elevation: 1
   },
   TouchStyle:
   {
    marginBottom:15, width: '98%'
         , flexDirection: 'row-reverse',marginLeft:10
   }
 });
 
 export default Sidebar;
 