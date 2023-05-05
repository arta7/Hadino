import React,{useEffect} from 'react';

import {Icon} from 'react-native-elements';
import { I18nManager,View ,Image,Text,StyleSheet,useWindowDimensions} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp}  from 'react-native-responsive-screen';
import { TabView,TabBar } from 'react-native-tab-view';


import Transaction from './Transaction'
import CardList from './CardList'





export default  WalletItem=(props)=> {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Transaction', title: 'تراکنش ها ' },
    { key: 'Cards', title: 'کارت ها' },
    // { key: 'Statisticts', title: 'Statisticts' },
  ]);

  const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case 'Transaction':
        return <Transaction jumpTo={jumpTo}  navigation={props.navigation}/>
      case 'Cards':
        return <CardList jumpTo={jumpTo} navigation={props.navigation}/>
        // case 'Statisticts':
        //     return <Transaction jumpTo={jumpTo} navigation={props.navigation}/>
    }
  }
  const renderTabBar = props => (
    <TabBar
      {...props}
      renderLabel={({route, color,focused}) => (
        <Text style={{fontFamily:'Digikala', color: focused ?  '#ef7145' : 'black'}}>
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
