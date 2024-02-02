import React,{useEffect,useState} from 'react';

import {Icon} from 'react-native-elements';
import { I18nManager,View ,Image,Text,StyleSheet,useWindowDimensions} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp}  from 'react-native-responsive-screen';

import Introduction from './Introduction'
import LicenseItem from './LicenseItem'
import { TabView,TabBar } from 'react-native-tab-view';


export default  AboutItem=(props)=> {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(1);
 
  const [routes] = useState([
    { key: 'LicenseItem', title: 'مجوزات'},
    { key: 'Introduction', title: 'معرفی پارک سگال' },
   
  ]);

  

  const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case 'Introduction':
        return <Introduction jumpTo={jumpTo}  navigation={props.navigation}
        CategoryUpdate={props.GetCategory}/>;
      case 'LicenseItem':
        return <LicenseItem jumpTo={jumpTo} navigation={props.navigation}   CategoryUpdate={props.GetCategory}/>;
    }
  }
  const renderTabBar = props => (
    <TabBar
      {...props}
      renderLabel={({route, color}) => (
        <Text style={{ color: '#cc3333',fontSize:wp(4),fontWeight:'400',fontFamily:'Digikala'}}>
          {route.title}
        </Text>
      )}
      indicatorStyle={{ backgroundColor: '#cc3333' }}
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