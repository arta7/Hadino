import React,{useEffect} from 'react';
import {
    ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


export default Background =(props)=>{
  return (
   
     <ImageBackground 
     source={require('./../Images/hoghoghi.jpg')}
     style={{width:wp(100),height:hp(35)}}
     resizeMode='stretch'
     >
   

     </ImageBackground>
   
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
