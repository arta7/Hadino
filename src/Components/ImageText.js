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

export default ImageText =(props)=>{
  return (
   
    <View style={{flexDirection:'row-reverse',paddingHorizontal:25,alignItems:'center'}}>
    <Image 
    source={props.Source}
    style={{width:40,height:40,borderRadius:20}}
    resizeMode='stretch'
    />
    
    <Text style={{fontSize:wp('4%'),color:'black',marginHorizontal:'2%',fontFamily:'Digikala'}}>{props.Title}</Text>
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
