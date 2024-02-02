import React,{useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity, Alert,Image,ActivityIndicator,
   FlatList,DeviceEventEmitter,AppState,ImageBackground,Dimensions 
} from 'react-native';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
  import Buttons from './../Components/Buttons'
  import Textinputs from './../Components/Textinputs';
  import LableList from './../Components/LableList';
  import RoundList from './../Components/RoundList'
  import ScreenChoose from './../Components/ScreenChoose';
  import Avatars from '../Components/Avatars';
  import { SwiperFlatList } from 'react-native-swiper-flatlist';
  import Headers from '../Components/Headers';
import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import {Header,Icon} from 'react-native-elements'
// import { SwiperFlatList }= from 'react-native-swiper-flatlist';
import {Drawer} from 'native-base';
import Sidebar from './Sidebar';
import {SliderList,SliderList2} from './../Data/StableData'
import Swiper from 'react-native-swiper'
import Carousel from 'react-native-snap-carousel';
const { width } = Dimensions.get('window')


const Home =(props)=>{

  const[dataType,setdataType]=useState([])
  const[dataPopular,setdataPopular]=useState([])
  const[UsersCount,setUsersCount] = useState(0)
  const[ProviderCount,setProviderCount] = useState(0)
  const[ServicesCount,setServicesCount] = useState(0)
  const[showLoader,setshowLoader] = useState(false)
 
  var drawer = useRef(null)
  


let renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: 'black',fontSize: 12,fontFamily:'Digikala' }}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  )
}

let closeDrawer=()=>{
  if(drawer != null && drawer.current !=null && drawer.current._root != null )
  drawer.current._root.close()
}

let _renderItem =({ item })=> {
  return (
    <View style={styles.itemContainer}>
      {/* <Text style={styles.itemLabel}>{`Item ${item}`}</Text> */}
      <Image
         style={{width:'100%',height:'130%',alignSelf:'center',justifyContent:'center',alignItems:'center'}}
          source={item.address}
          resizeMode='cover'
        />   
          <Text style={{marginTop:20}}>lorem episum</Text>
    </View>
  );
}


useEffect(()=>{
  
 
  

  },[])
  




  return (
    <View style={styles.container}>
  
      <Drawer ref={ drawer } 
 type='displace' side='right' content={<Sidebar navigator={props.navigation} closeItem={() => closeDrawer()}/>}
  onClose={() => closeDrawer()}
   ContainerStyle={{width:100}}
  > 
      <ScrollView>

      <View>

    <Headers TitleScreen=''
         ShowHeader={true} navigation={props.navigation}
         drawers={drawer}
         showRightIcon={true}
         />
     </View>
 <View style={{height:hp(28),elevation:1
 ,borderRadius:10,width:wp(90),marginHorizontal:wp(5),marginTop:-20}}>
<Swiper
        style={styles.wrapper}
        renderPagination={renderPagination}
        loop={true}
        autoplay
        autoplayTimeout={5}
        >
         {
         SliderList.map((item)=>
         <View style={{flex:1}}>
           <Image
          style={styles.child}
          source={item.address}
          resizeMode='cover'
        />    
        </View>      
         )
        }
      </Swiper>
      </View>



   

   <View style={{width:wp('90%'),marginHorizontal:wp('5%'),marginBottom:5,flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
    <Text style={{color:'black',fontSize:wp('4%'),fontFamily:'Digikala'}}>خدمات</Text>
    <View>

    </View>
  
  </View>
         

        <View style= {styles.ScreenView}>
        
          <ScreenChoose Title={'شتابدهنده'} AvatarTitle={''}
          SubTitle='مشاوره و خدمات '
          Size={hp('7%')}
          SubTitleStyle={{color:'#535353',fontSize:wp('2.2%'),textAlign:'center',backgroundColor:'transparent'}}
          //  Icon={require('./../Images/Maliatchie.png')}
          TitleStyle={styles.titleStyles}
          ContainerStyle={{marginTop:4,backgroundColor:'transparent'}}
          ButtonStyle={styles.buttonStyle}
          
          ButtonOperator={()=>{props.navigation.navigate('Search')}}
          />
          <ScreenChoose Title={'کسب و کار'}  
          SubTitle='مشاوره کسب و کار'
          ContainerStyle={{marginTop:6,backgroundColor:'transparent'}}
          Size={hp('6%')}
          SubTitleStyle={{color:'#535353',fontSize:wp('2.2%'),textAlign:'center',backgroundColor:'transparent'}}
          // Icon={require('./../Images/bimeim.png')}
          TitleStyle={[styles.titleStyles,{marginTop:15}]}
           ButtonOperator={()=>{props.navigation.navigate('Search')}}
           ButtonStyle={styles.buttonStyle}
          />

<ScreenChoose Title={'استارتاپ'} AvatarTitle={''}
SubTitle='مشاوره و خدمات استارتاپ'
Size={hp('7%')}
ContainerStyle={{marginTop:4,backgroundColor:'transparent'}}
SubTitleStyle={{color:'#535353',fontSize:wp('2.2%'),textAlign:'center'}}
//  Icon={require('./../Images/Vakilan-png.png')}
 TitleStyle={styles.titleStyles}

ButtonStyle={styles.buttonStyle}

ButtonOperator={()=>{props.navigation.navigate('Search')}}
/>
        </View>

{/* <View style= {styles.ScreenView}>
        

<ScreenChoose Title={'کاویدان'}  
SubTitle='موتور جستجوی قوانین و مقررات'
Size={hp('7%')}
ContainerStyle={{marginTop:4,backgroundColor:'transparent'}}
SubTitleStyle={{color:'#535353',fontSize:wp('2.2%'),textAlign:'center'}}
 Icon={require('./../Images/Vakilan-png.png')}
 TitleStyle={styles.titleStyles}
ButtonStyle={styles.buttonStyle}
ButtonOperator={()=>{props.navigation.navigate('Search')}}
/>
{!showLoader?
<ScreenChoose Title={'...'}  
SubtitleStyles={{color:'transparent',borderRadius:0,width:0,height:0,opacity:0}}
 TitleStyle={[{width:50,height:50,borderRadius:25,backgroundColor:'transparent',
 elevation:1,color:'black',fontSize:wp(7),textAlign:'center',alignSelf:'center',
 justifyContent:'center',alignItems:'center',alignContent:'center'}]}
ButtonStyle={[styles.buttonStyle,{backgroundColor:'transparent',elevation:0}]}
ButtonOperator={()=>{setshowLoader(true)}}
/>
:
<ScreenChoose Title={'هادینو'}  
SubTitle='مشاوره نو'
Size={hp('6%')}
ContainerStyle={{marginTop:9,backgroundColor:'transparent'}}
SubTitleStyle={{color:'#535353',fontSize:wp('2.2%'),textAlign:'center'}}
 Icon={require('./../Images/HadinoIcon.png')}
 TitleStyle={styles.titleStyles}
ButtonStyle={styles.buttonStyle}
ButtonOperator={()=>{props.navigation.navigate('Search')}}
/>

}

<ScreenChoose Title={''}  
// ContainerStyle={{marginTop:4,backgroundColor:'transparent'}}
SubtitleStyles={{borderRadius:0,width:0,height:0,opacity:0}}
//  TitleStyle={[{width:50,height:50,borderRadius:25,backgroundColor:'trasnparent',justifyContent:'center',alignItems:'center'}]}
 ButtonStyle={[styles.buttonStyle,{opacity:0,backgroundColor:'transparent'}]}

/>






</View> */}

<View style={{width:wp('90%'),marginHorizontal:wp('5%'),marginBottom:5,flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
    <Text style={{color:'black',fontSize:wp('4%'),fontFamily:'Digikala'}}>تازه ها</Text>
    <View>

    </View>
  
  </View>

  <View >

        <Carousel
       autoplay={true}
       loop={true}
          data={SliderList2}
          renderItem={_renderItem}
          sliderWidth={wp(100)}
          itemWidth={wp(40)}
          useScrollView={true}   
          // autoplayInterval={3500}      
          // autoplayDelay={3500} 
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}

          
        />
      
      
      </View>

    

   


</ScrollView>
</Drawer>
       </View>

  )
}

const styles = StyleSheet.create({
container: 
    {
    flex: 1,backgroundColor:'white',overflow:'hidden'
    },
ImageView:
    {
     justifyContent:'center',alignItems:'center',alignSelf:'center'
     ,width:wp('40%'),height:wp('40%')
    },
ScreenView:
  {
    flexDirection:'row-reverse',width:wp('90%'),marginLeft:wp('5%')
   ,marginRight:wp('5%'),justifyContent:'space-between',marginTop:10
   //,marginBottom:10
  },
TitleScreenStyle:
    {
    width:wp('90%'),marginLeft:wp('5%'),marginRight:wp('5%'),marginTop:hp('9%')
    ,flexDirection:'row',justifyContent:'space-between',marginBottom:hp('1%')
    },
    TitleScreenStyle1:
    {
    width:wp('90%'),marginLeft:wp('5%'),marginRight:wp('5%'),marginTop:hp('2%'),marginBottom:hp('2%')
    },
TopScreenStyle:
    {
    width:wp('100%'),height:hp('10%')
    },
PopularStyle:
    {
    width:wp('60%'),height:hp('20%'),marginLeft:wp('2%')
   ,marginRight:wp('2%'),borderRadius:5,borderWidth:0.5,borderColor:'gray',padding:10,marginBottom:20
    },
PopularItemStyle:
    {
    width:'50%',height:'100%',justifyContent:'center'
    },
PopularListStyle:
    {
        flexDirection:'row',justifyContent:'space-between',height:'50%',width:'100%'
    },
    titleStyles:
    {
      color:'white',fontSize:wp('3.3%'),
           alignItems:'flex-start',margin:10,backgroundColor:'transparent',fontFamily:'Digikala'
     },
          child: { 
          overflow:'hidden',
          width: undefined,
          height: '100%',
          aspectRatio: 1,
          alignSelf: 'center',
          
        },
        itemContainer: {
          width: wp(30),
          height: hp(12),
          alignItems: 'center',
          justifyContent: 'center',elevation:2,borderRadius:10,marginBottom:50,backgroundColor:'#e2fab1'
          //'#fcee6d'
        },
  text: { fontSize: wp(5), textAlign: 'center' },
  wrapper: {
    backgroundColor:'#fcee6d',overflow:'hidden'
  },
  slide: {
    flex: 1,
    justifyContent: 'center'
    
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  image: {
    width,
    flex: 1
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 5,
    right: '10%',overflow:'hidden'
  },
  paginationText: {
    color: 'black',
    fontSize: 12,fontFamily:'Digikala'
  },
buttonStyle:
  {width:'32%',height:hp('18%'),
backgroundColor:'#cc3333',borderRadius:10,alignItems:'center'}

  
});
export default Home;


