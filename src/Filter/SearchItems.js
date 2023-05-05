import React,{useEffect,useState} from 'react';

import {Icon} from 'react-native-elements';
import { I18nManager,View ,Image,Text,StyleSheet,useWindowDimensions} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp}  from 'react-native-responsive-screen';

import Category from './Category'
import Order from './Order'
import { TabView,TabBar } from 'react-native-tab-view';
import { LoginData } from '../Redux/LoginData';
import axios from 'axios';
import { APIMaster } from '../API/APIMaster';

export default  SearchItems=(props)=> {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(1);
 
  const [routes] = useState([
   
    { key: 'Categories', title: 'به ترتیب' },
    { key: 'Orders', title: 'دسته بندی'},
  ]);

  

  const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case 'Categories':
        return <Category jumpTo={jumpTo}  navigation={props.navigation}
        CategoryUpdate={props.GetCategory}/>;
      case 'Orders':
        return <Category jumpTo={jumpTo} navigation={props.navigation}   CategoryUpdate={props.GetCategory}/>;
    }
  }
  const renderTabBar = props => (
    <TabBar
      {...props}
      renderLabel={({route, color}) => (
        <Text style={{ color: '#0ab076',fontSize:wp(4),fontWeight:'400',fontFamily:'Digikala'}}>
          {route.title}
        </Text>
      )}
      indicatorStyle={{ backgroundColor: '#0ab076' }}
      style={{ backgroundColor: 'white' }}
    />
  )
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
       initialLayout={{ width: 0,height:0 }}
      renderTabBar={renderTabBar}
    />
    
  );

}