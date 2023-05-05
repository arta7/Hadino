import React,{useEffect} from 'react';
import {
    ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Alert,
  View,TouchableOpacity
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';

export default TitleBar =(props)=>{
  return (
   
    <View style={{width:wp('90%'),marginHorizontal:wp('5%'),marginBottom:5
    ,flexDirection:'row-reverse',justifyContent:'space-between',marginTop:20}}>
    <Text style={{color:'black',fontSize:wp('5%'),fontFamily:'Digikala'}}>{props.Title}</Text>
    <View style={{flexDirection:'row',width:'30%'}}>
    <TouchableOpacity style={{marginHorizontal:'5%'}}
    onPress={()=>{Alert.alert('test')}}
    >
    <Icon  name='hearto' color={'red'}  type='antdesign' />
    </TouchableOpacity>
    <Text style={{color:'black',fontSize:wp('4%'),color:'red',fontFamily:'Digikala'}}>{props.LikeNumber}</Text>
    </View>
  </View>

   
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
