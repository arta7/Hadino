import React,{useEffect} from 'react';

import {Icon} from 'react-native-elements';
import { I18nManager,View ,Image,Text,StyleSheet,useWindowDimensions} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp}  from 'react-native-responsive-screen';

import Details from './Details'
import Comments from './Comments'
import { TabView,TabBar } from 'react-native-tab-view';


export default  ProfileServiceItems=(props)=> {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Details', title: 'جزییات'},
    { key: 'Comments', title: 'پست ها'}
  ]);

  const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case 'Details':
      
        return <Details jumpTo={jumpTo} 
         navigation={props.navigation}
         userId={props.userId} 
         dataResume={props.dataResume} DetailsId ={props.DetailsId} serviceTypes={props.serviceTypes}
         dataImage={props.dataImage}
         />
      case 'Comments':
        return <Comments jumpTo={jumpTo}
         navigation={props.navigation} userId={props.userId}/>

 
    }
  }
  const renderTabBar = props => (
    <TabBar
      {...props}
      renderLabel={({route, color,focused}) => (
        <Text style={{fontFamily:'Yekan', color: focused ? 
         '#ef7145' : 'black'}}>
          {route.title}
        </Text>
      )}
      indicatorStyle={{ backgroundColor: '#ef7145',flex:1 }}
      style={{ backgroundColor: 'white',flex:1}}
    />
  )
  return (
    
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
      swipeEnabled = {false}
    />
    
  );

}
