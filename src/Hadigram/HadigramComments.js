import React,{useEffect} from 'react';
import {
    ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Alert,
  View,TouchableOpacity,Image
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
import ImageText from '../Components/ImageText'
import MessageBoxes from './MessageBoxes'



export default HadigramComments =(props)=>{
  return (
      <>
     { 
    <View style={{width:wp('100%'),marginBottom:5
    ,flexDirection:'row-reverse',justifyContent:'space-between',marginTop:20
    ,borderBottomWidth:0.5,borderBottomColor:'gray',padding:10}}>
    <TouchableOpacity style={{flexDirection:'row-reverse'}}
     onPress={()=>{props.navigation.navigate('HadigramItem')}}
    >
    <Icon  name='comment-o' color={'gray'}  type='font-awesome'size={18} />
   
    <Text style={{fontSize:wp('4%'),color:'gray',marginHorizontal:'5%',fontFamily:'Digikala'}}>مشاهده نظرات</Text>
    </TouchableOpacity>
  </View>
  
    
}
   </>
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
