import React, { useEffect,useRef } from 'react';
import { Animated, View } from 'react-native';
// import Lottie from 'lottie-react-native';
import Video from 'react-native-video'


export default function Splash(props) {
  const animationProgress = useRef(new Animated.Value(0))

  useEffect(() => {

        // setTimeout(() => {
        //     props.navigation.replace('Controls')  
        // },8000);
  }, [])

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'gray'}}>
    <Video source={require('./../Images/Splash.mp4')}
                     style={{width:'100%',height:'100%'}}
                             repeat={false}
                             ignoreSilentSwitch={"ignore"}
                             onEnd={()=>{ props.navigation.replace('Controls')  }}
                             useNativeControls={true}
                             muted={false}
                             resizeMode="contain"   />
   </View>
  );
}