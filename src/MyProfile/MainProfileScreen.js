import React, { Component } from 'react';
import { AppRegistry,StyleSheet,View, Text,ScrollView,Alert,ActivityIndicator ,TouchableOpacity} from 'react-native';

import FirstStepProfile from './FirstStepProfile'
import ViewPager from 'react-native-pager-view';
import SecondStepProfile from './SecondStepProfile'
import StepIndicator from 'react-native-step-indicator';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
// import ThirdStepProfile from './ThirdStepProfile';
import axios from 'axios';
// import {APIMaster} from  '../API/APIMaster';
// import {LoginData} from '../Redux/LoginData';
// import Swiper from 'react-native-swiper';

const PAGES = ['FirstStepProfile','SecondStepProfile'];

const firstIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 1,
  currentStepStrokeWidth: 5,
  stepStrokeCurrentColor: '#B00A44',
  stepStrokeWidth: 2,
  stepStrokeFinishedColor: '#B00A44',
  stepStrokeUnFinishedColor: '#B00A44',
  separatorFinishedColor: '#B00A44',
  separatorUnFinishedColor: '#B00A44',
  stepIndicatorFinishedColor: '#B00A44',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: 'transparent',
  stepIndicatorLabelFinishedColor: 'transparent',
  stepIndicatorLabelUnFinishedColor: 'transparent',
  labelColor: '#999999',
  labelSize: 20,
  currentStepLabelColor: '#B00A44',
}

const getStepIndicatorIconConfig = ({ position, stepStatus }) => {
    const iconConfig = {
      name: 'feed',
      color: stepStatus === 'finished' ? 'white' : 'white',
      size: 20,
    };
    switch (position) {
      case 0: {
        iconConfig.name = 'check';
        break;
      }
      case 1: {
        iconConfig.name = 'check';
        break;
      }
      // case 2: {
      //   iconConfig.name = 'check';
      //   break;
      // }
     
    }
    return iconConfig;
  }

export default class MainProfileScreen extends Component {

  constructor() {
    super();
    this.state = {
      currentPage:0,showIndicator:false,Category:[],
      SubCategory:[],FirstPageItem:{},SecondPageItem:{},ThirdPageItem:{},unlimitedStatus:-1
   
    }
  }
  componentWillReceiveProps(nextProps,nextState) {
    if(nextState.currentPage != this.state.currentPage) {
      if(this.viewPager) {
        this.viewPager.setPage(nextState.currentPage)
      }
    }
  }
  renderViewPagerPage = (data1) => {

    return( data1 == 'FirstStepProfile' ?
    
    <ScrollView>
      
      <FirstStepProfile currentpage={this} 
      // data={this.props.navigation.state.params.data} 
      navigation={this.props.navigation} />
      </ScrollView>
      :
      //data1 == 'SecondStepProfile' ? 
      <ScrollView>
      <SecondStepProfile currentpage={this}   
      //data={this.props.navigation.state.params.data} 
        navigation={this.props.navigation} />
      </ScrollView>

     
     )
  }



  componentDidMount()
  {
      // console.log('data resume : ',PAGES)
     // console.log(this.props.navigation.state.params.CategorySelectedId)
    
  }

  render() {
    return (
      
        this.state.showIndicator == false ? 
<View style={styles.container}>
{/* <TouchableOpacity style={{position:'absolute',left:5,top:10,width:50,height:40,backgroundColor:'#0ab076',borderRadius:10,justifyContent:'center'}}
onPress={()=>{this.props.navigation.navigate('Login')}}
>
        <Text style={{textAlign:'center',fontFamily:'Digikala',fontSize:wp(4),color:'white'}}>ورود</Text>
      </TouchableOpacity> */}
   
        <View style={styles.stepIndicator}>

          <StepIndicator 
          stepCount={2}
          customStyles={firstIndicatorStyles} 
          currentPosition={this.state.currentPage} 
          renderStepIndicator={this.renderStepIndicator}
          />
        </View>
       
        <ViewPager
           style={{flex:1}}
          ref={(viewPager) => {this.viewPager = viewPager}}
          onPageSelected={(page) => {
            this.setState({currentPage:page.nativeEvent.position})
            console.log('current Page : ',page.nativeEvent.position)
            //  this.componentDidMount()
          }}
          scrollEnabled ={true}
          >
       

            {PAGES.map((page1) =>  this.renderViewPagerPage(page1))}
          
            </ViewPager>
      </View>

      : 
      <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
       
   
      <ActivityIndicator 
      size='large' color='white'
     />
      </View>
     
    );
  }

 

  renderStepIndicator = params => (
    <MaterialIcon {...getStepIndicatorIconConfig(params)} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  stepIndicator: {
    marginVertical:50
  },
  page: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});