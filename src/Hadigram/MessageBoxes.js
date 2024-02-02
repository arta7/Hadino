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
import Textinputs from '../Components/Textinputs'
export default MessageBoxes =(props)=>{
  return (
   
    <View style={{borderWidth:0.3,borderColor:'gray',width:wp('100%'),alignItems:'center',height:hp(10),flexDirection:'row-reverse'}}>
    <TouchableOpacity style={{width:wp(15),height:'80%',marginVertical:'10%',justifyContent:'center',alignItems:'center',
    marginHorizontal:'2%',borderWidth:1,borderColor:'#cc3333',borderRadius:10}}>
      <Icon  color={'#cc3333'} name="paper-plane" type='entypo' size={25}/>
    </TouchableOpacity>
    <Textinputs
     Title = ''
     changeText = {()=>{}}
     values = {''}
     secure={false}
     placeHolder='نوشتن نظر ...'
     placeHolderColor='#cc3333'
     TextStyle={{width:wp(75),height:'90%',marginVertical:'5%',fontFamily:'Digikala',marginHorizontal:'2%',borderWidth:1,borderColor:'#cc3333',borderRadius:10}}
     TitleStyle={{marginRight:'0%'}}
     Edit={true}
   />

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
