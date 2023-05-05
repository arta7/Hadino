import React,{useEffect} from 'react';
import {
    ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,Image,TouchableOpacity
} from 'react-native';
import Backgound from './Background'
import TitleBar from './TitleBar'
import Body from './Body'
import HadigramComments from './HadigramComments'
import Headers from '../Components/Headers';
import {Drawer} from 'native-base';
import Sidebar from './../Main/Sidebar';
import {Header,Icon,Avatar} from 'react-native-elements'

import RoundList from './../Components/RoundList'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const StringBody ='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود...'


export default ShowItems =(props)=>{
  return (
   
    <TouchableOpacity style={{flexDirection:'row-reverse',width:wp(95),height:hp(30),borderRadius:10
    ,overflow:'hidden',elevation:3,marginHorizontal:wp(2.5),marginBottom:10}}
    onPress={()=>{props.navigation.navigate('HadigramItem')}}
    >
    <Image  source={require('./../Images/hoghoghi.jpg')}
         style={{width:'35%',height:'100%'}}
         resizeMode='stretch'/>
    <View style={{width:'65%',height:'100%'}}>
        <View style={{width:('90%'),marginHorizontal:('2.5%'),height:'75%',padding:10}}>
        <Text style={{color:'black',fontSize:wp('4%'),fontFamily:'Digikala'}}>{StringBody}</Text>
      </View>
      <View>
      <View style={{width:('100%'),marginBottom:5
        ,flexDirection:'row-reverse',justifyContent:'space-between'
        ,padding:10}}>
        <View style={{flexDirection:'row-reverse'}}
        
        >
        <Icon  name='comment-o' color={'gray'}  type='font-awesome'size={18} />
       
        <Text style={{fontSize:wp('4%'),color:'gray',marginHorizontal:'5%',fontFamily:'Digikala'}}>5</Text>
        </View>
      </View>
      </View>
    </View>
    
    </TouchableOpacity>
   
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

// export default App;
