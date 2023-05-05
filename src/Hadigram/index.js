import React,{useEffect, useState,useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,TouchableOpacity,TextInput,FlatList,Image
} from 'react-native';
import Backgound from './Background'
import TitleBar from './TitleBar'
import Body from './Body'
import HadigramComments from './HadigramComments'
import Headers from '../Components/Headers';
import {Drawer} from 'native-base';
import Sidebar from './../Main/Sidebar';
import {Header,Icon,Avatar} from 'react-native-elements'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import RoundList from './../Components/RoundList'
import ShowItems from './ShowItems';




const data1 =[{id:1,Title:'قوانین و مقررات',Color:'black'},
{id:2,Title:'قیمت صعودی',Color:'#5a8cff'}
,{id:3,Title:'قیمت نزولی',Color:'#00b552'}]


export default Hadigram =(props)=>{
  
     const[showComments,setshowComments] = useState(true)
     const[SearchValue,setSearchValue] = useState('')
     const[showModal,setshowModal] = useState(false)
     const[selectedMyCategory,setselectedMyCategory] = useState(1)

     var drawer = useRef(null)

     let closeDrawer=()=>{
        if(drawer != null && drawer.current !=null && drawer.current._root != null )
        drawer.current._root.close()
      }


  return (
    <View style={styles.Container}>
           <Drawer ref={ drawer } 
 type='displace' side='right' content={<Sidebar navigator={props.navigation} closeItem={() => closeDrawer()}/>}
  onClose={() => closeDrawer()}
   ContainerStyle={{width:100}}
  > 
   
   <Headers TitleScreen='هادیگرام'
         ShowHeader={true} 
         navigation={props.navigation}
         drawers={drawer}
         showRightIcon={true}
         />


 <TouchableOpacity style={{width:wp('100%'),height:hp('7%'),flexDirection:'row'
    ,justifyContent:'space-between',borderBottomWidth:1,backgroundColor:'#0ab076'}}
    onPress={()=>{
      setshowModal(!showModal)
    }}
    >
      <View style={{width:'40%',justifyContent:'flex-start',
      marginLeft:wp('5%'),flexDirection:'row',alignItems:'center'}}> 
      <Icon  name='filter' type='antdesign' color='white'  />
      <Text style={{fontFamily:'Digikala',color:'white',fontSize:wp('4%')}}>فیلتر</Text>
      </View>

      <View style={{width:'40%',justifyContent:'flex-end',
      marginRight:wp('2%'),flexDirection:'row',alignItems:'center'}}> 
      <Icon  name='plus' type='entypo' color='white'  />
      </View>

    </TouchableOpacity>

    { showModal&&
      <>


    <View style={{width:wp('100%'),height:hp('10%')}}>
       <View style={{width:'80%',margin:'3%',flexDirection:'row',
       borderWidth:1,borderColor:'#0ab076',marginHorizontal:'10%'
       ,justifyContent:'space-between',borderRadius:10}}>
          <TouchableOpacity style={{width:'20%',justifyContent:'center'
       ,alignItems:'center',borderRightWidth:1,borderRightColor:'#0ab076'}}
       onPress={()=>{

       }}
       >
       <Icon name='search'  color='#0ab076' size={wp('8%')} />
        </TouchableOpacity>
       <View style={{width:'80%'}}>
       <TextInput 
         onChangeText={(v)=>{setSearchValue(v)}}
          value={SearchValue}
       style={{fontFamily:'Digikala',height:'100%',width:'100%',fontSize:wp('4.5%')}}
        placeholder='جستجو...'
        placeholderTextColor='#0ab076'
       />
       </View>
     
       </View>
    </View>

    </>
}
<View style={{width:wp('100%'),
       height:hp('8%'),borderBottomWidth:0.25,borderBottomColor:'gray',marginBottom:10}}>
           <FlatList 
         data={data1}
         horizontal={true}
         showsHorizontalScrollIndicator={true}
         contentContainerStyle={{flexDirection:'row-reverse'}}
         renderItem={({item,index}) =>  
         <RoundList ShowIcon={false}    
         Title={item.Title}
         ButtonStyle={{borderWidth:1
        ,borderRadius:20,borderColor:'gray'
       ,backgroundColor:selectedMyCategory == item.id ?  '#B00A44':'white',
        paddingLeft:wp('5%'),paddingRight:wp('5%'),margin:5,height:'60%'
        ,justifyContent:'center',alignItems:'center',alignSelf:'center'}}
       TitleStyle={{fontSize:wp('3%'),textAlign:'center',color:selectedMyCategory == item.id ? 'white' :  'gray'}}
       ButtonOperator={()=>{
        setselectedMyCategory(item.id)
       }}

       />

      }
      />

       </View>


    <ScrollView>


      <ShowItems  navigation={props.navigation}/>

      <ShowItems  navigation={props.navigation}/>
      <ShowItems  navigation={props.navigation}/>
      <ShowItems  navigation={props.navigation}/>
      <ShowItems  navigation={props.navigation}/>
      <ShowItems  navigation={props.navigation}/>

    </ScrollView>



   </Drawer>  
    </View>

   
   
  )
}

const styles = StyleSheet.create({
  Container: {
   flex:1
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

// export default App;
