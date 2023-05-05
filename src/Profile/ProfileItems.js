import React,{useEffect} from 'react';

import {Icon} from 'react-native-elements';
import { I18nManager,View ,Image,Text,StyleSheet,useWindowDimensions} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp}  from 'react-native-responsive-screen';

import Resume from './Resume'
import Services from './Services'
import Posts from './Posts'
import { TabView,TabBar } from 'react-native-tab-view';


export default  ProfileItems=(props)=> {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Resume', title: 'رزومه ' },
    { key: 'Services', title: 'سرویس ها' },
    { key: 'Posts', title: 'پست ها' },
  ]);

  const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case 'Resume':
        return <Resume jumpTo={jumpTo}  navigation={props.navigation}
         userId={props.userId} dataResume={props.dataResume} />;
      case 'Services':
        return <Services jumpTo={jumpTo} navigation={props.navigation}
         userId={props.userId} dataResume={props.dataResume} />;
        case 'Posts':
        return <Posts jumpTo={jumpTo} navigation={props.navigation} />;
    }
  }
  const renderTabBar = props => (
    <TabBar
      {...props}
      renderLabel={({route, color,focused}) => (
        <Text style={{fontFamily:'Yekan',fontSize:wp('3.5%'), color: focused ?  '#ef7145' : 'black'}}>
          {route.title}
        </Text>
      )}
      indicatorStyle={{ backgroundColor: '#ef7145' }}
      style={{ backgroundColor: 'white' }}
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
