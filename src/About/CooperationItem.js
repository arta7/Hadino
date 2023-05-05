import React,{useEffect,useState} from 'react';

import {Icon} from 'react-native-elements';
import { I18nManager,View ,Image,Text,StyleSheet,useWindowDimensions} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp}  from 'react-native-responsive-screen';

import LicenseItem from './LicenseItem'
import Privacy from './Privacy'
import { TabView,TabBar } from 'react-native-tab-view';


export default  CooperationItem=(props)=> {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(1);
 
  const [routes] = useState([
    { key: 'Privacy', title: 'توسعه هادینو' },
    { key: 'LicenseItem', title: 'مشاور حرفه ای'},
    
   
  ]);

  

  const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case 'Privacy':
        return <Privacy jumpTo={jumpTo}  navigation={props.navigation}
        CategoryUpdate={props.GetCategory}/>;
      case 'LicenseItem':
        return <LicenseItem jumpTo={jumpTo} navigation={props.navigation}   CategoryUpdate={props.GetCategory}/>;
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