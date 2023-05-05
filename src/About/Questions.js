import React, { Component } from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Icon }  from "react-native-elements";
import { widthPercentageToDP } from 'react-native-responsive-screen';




const SECTIONS = [
  {
    title: 'شرایط ایجاد حساب کاربری در هادینو چیست؟',
    content: 'Lorem ipsum...',
    index:0
  },
  {
    title: 'نحوه ایجاد درخواست خدمات در هادینو چگونه است؟',
    content: 'Lorem ipsum...',
    index:1
  },
  {
    title: 'مراحل ثبت درخواست دریافت وجه چیست؟',
    content: 'Lorem ipsum...',
    index:2
  },
  {
    title: 'چگونه کیف پول خود را شارژ کنیم؟',
    content: 'Lorem ipsum...',
    index:3
  },
];

export default class Questions extends Component {
  state = {
    activeSections: [],
  };

  _renderSectionTitle = (section) => {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  }
 

  _renderHeader = (section,index,IsActive) => {
    return (
      <View style={styles.header}>
        {
          !IsActive  ?
          <Icon name='keyboard-arrow-down' color='#0ab076'/>
          :
          <Icon name='keyboard-arrow-up' color='#0ab076'/>
          
        }
        <Text style={styles.headerText}>{section.title}</Text>
       

      </View>
    );
  }

  _renderContent = (section) => {
    return (
      <View style={styles.content}>
        <Text style={{fontFamily:'Digikala'}}>{section.content}</Text>
      </View>
    );
  }

  _updateSections = (activeSections,index) => {
    this.setState({
      activeIndex: index,
    })
    this.setState({ activeSections }); 
  };

  render() {
    return (
      <Accordion
        sections={SECTIONS}
        activeSections={this.state.activeSections}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        onChange={this._updateSections}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',marginTop:20
    // paddingTop: Constants.statusBarHeight,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: 'white',
    padding: 10,flexDirection:'row',justifyContent:'space-between'
    // width:widthPercentageToDP(95),marginHorizontal:widthPercentageToDP(2.5),borderWidth:0.5,borderColor:'gray'
    ,marginTop:10
    //,borderRadius:10
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',fontFamily:'Digikala'
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',marginBottom:5,borderBottomWidth:0.3,borderBottomColor:'gray'
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});