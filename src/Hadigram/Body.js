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

export default Body =(props)=>{
  return (
   
    <View style={{width:wp('95%'),marginHorizontal:wp('2.5%'),marginBottom:5
    ,marginTop:5,padding:5}}>
    <Text style={{color:'black',fontSize:wp('4%'),fontFamily:'Digikala'}}>{props.BodyString}</Text>
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
