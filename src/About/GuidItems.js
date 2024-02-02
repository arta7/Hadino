import React,{useEffect,useState} from 'react';

import {Icon} from 'react-native-elements';
import { I18nManager,View ,Image,Text,StyleSheet,useWindowDimensions} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp}  from 'react-native-responsive-screen';

import Questions from './Questions'
import Rules from './Rules'
import Privacy from './Privacy'
import { TabView,TabBar } from 'react-native-tab-view';


export default  GuidItems=(props)=> {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(2);
 
  const [routes] = useState([
    { key: 'Questions', title: 'پرسش  متداول'},
    { key: 'Rules', title: 'قوانین و مقررات' },
    { key: 'Privacy', title: 'حریم خصوصی' },
   
  ]);

  

  const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case 'Questions':
        return <Questions jumpTo={jumpTo}  navigation={props.navigation}
        CategoryUpdate={props.GetCategory}/>;
      case 'Rules':
        return <Rules jumpTo={jumpTo} navigation={props.navigation}   CategoryUpdate={props.GetCategory}/>;
        case 'Privacy':
          return <Privacy jumpTo={jumpTo} navigation={props.navigation}   CategoryUpdate={props.GetCategory}/>;
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