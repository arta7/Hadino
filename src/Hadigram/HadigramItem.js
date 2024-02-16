import React,{useEffect, useState,useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';
import Backgound from './Background'
import TitleBar from './TitleBar'
import Body from './Body'
import HadigramComments from './HadigramComments'
import Headers from '../Components/Headers';
import {Drawer} from 'native-base';
import Sidebar from './../Main/Sidebar';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
import ImageText from '../Components/ImageText'
import MessageBoxes from './MessageBoxes'

const StringBody ='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود...'

const BodyString = 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در'


export default HadigramItem =(props)=>{
  
     const[showComments,setshowComments] = useState(true)
 
     var drawer = useRef(null)

     let closeDrawer=()=>{
        if(drawer != null && drawer.current !=null && drawer.current._root != null )
        drawer.current._root.close()
      }


  return (
    <View style={styles.Container}>

   
   <Headers TitleScreen=''
         ShowHeader={false} navigation={props.navigation}
        //  drawers={drawer}
         showRightIcon={false}
         />
 <ScrollView>

    <Backgound />
    
     <TitleBar Title={'شرکت نرم افزاری'} LikeNumber={186}/>
    
    <Body BodyString={StringBody} />
    
    <View style={{borderBottomWidth:1,borderBottomColor:'gray'}}>
    <MessageBoxes />

     <View style={{width:wp(100),height:hp(30)}}>
    
      <ImageText Source={require('./../Images/Vakilan-png.png')} Title ='کاربر1'/>
      <Body BodyString={BodyString} />
      <ImageText Source={require('./../Images/Maliatchie.png')} Title ='1شرکت نرم افزاری'/>
      <View style={{width:wp(100),borderWidth:0.3,borderColor:'gray',marginTop:20}}>
      </View>
        </View>

          <View style={{width:wp(100),height:hp(30)}}>
          <ImageText Source={require('./../Images/Avatar.png')} Title ='کاربر2'/>
          <Body BodyString={BodyString} />
          <ImageText Source={require('./../Images/Maliatchie.png')} Title ='2شرکت نرم افزاری'/>
          <View style={{width:wp(100),borderWidth:0.3,borderColor:'gray',marginTop:20}}>
          </View>

          </View>

</View>
    {/* <HadigramComments showItems={showComments} changeShowItems={setshowComments}/>  */}
   
    </ScrollView>


    </View>

   
   
  )
}

const styles = StyleSheet.create({
  Container: {
   flex:1
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
