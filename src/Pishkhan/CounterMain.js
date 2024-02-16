import React,{useEffect,useState,useRef} from 'react';

import {Icon} from 'react-native-elements';
import { FlatList,View ,Image,Text,StyleSheet,ScrollView,SectionList, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp}  from 'react-native-responsive-screen';
import CustomList from './../Components/CustomList'
import {SectionList1,SectionItems} from './../Data/StableData'
import Headers from '../Components/Headers';
import {Drawer} from 'native-base';
import Sidebar from './../Main/Sidebar';

export default  CounterMain  =(props)=> {
  
  const[ activeSections,setactiveSections]=useState([])
  const[selectedindex,setselectedindex] = useState(0)
  const[selecteditem,setselecteditem] = useState(0)

  var drawer = useRef(null)

  


  const Item = ({ item,index }) => (
    <>
    {selectedindex==0 &&
    <TouchableOpacity style={[styles.item,{borderRightColor: index == selecteditem  && selectedindex==0 ? 'green' :'transparent'
    ,borderRightWidth:index == selecteditem  && selectedindex==0 ? 5:0}]}
    onPress={()=>{
      setselecteditem(index)
    }}
    >
      <Text style={styles.title}>{item}</Text>
    </TouchableOpacity>
    }
   </>


  );

  let closeDrawer=()=>{
    if(drawer != null && drawer.current !=null && drawer.current._root != null )
    drawer.current._root.close()
  }

   let _renderSectionTitle = (section) => {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  };

  let _renderHeader = (section,index,IsActive) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
       

      </View>
    );
  }
  let _renderContent = (item) => {

    item.map((item1)=>{
      return (
      // console.log('jsn',item1)
        <Item item={item1} />
      );
    })
   
  };

  let _updateSections = (activeSections,index) => {
    setactiveSections(activeSections)
  };

   return(
    <View style={{flex:1}}>
    <Drawer ref={ drawer } 
 type='displace' side='right' content={<Sidebar navigator={props.navigation} closeItem={() => closeDrawer()}/>}
  onClose={() => closeDrawer()}
   ContainerStyle={{width:100}}
  > 
      
      <Headers TitleScreen='پیشخوان'
         ShowHeader={true} 
         navigation={props.navigation}
         drawers={drawer}
         showRightIcon={true}
         />
    
    
      <CustomList
      _SectionList={
    
        <SectionList
        sections={SectionList1}

        keyExtractor={(item, index) => item + index}
        renderItem={({ section: { data },index}) => 
        <Item item={data[index]} index={index} />
      }
        renderSectionHeader={({section: {title,id,icon,type}}) => (
          <TouchableOpacity style={{width:'100%',height:80,justifyContent:'center',
          alignItems:'center',backgroundColor:id == selectedindex ? 'white' :'#e6e6e6'
          ,elevation:10,borderRightColor:id == selectedindex ? '#cc3333' :'transparent'
          ,borderRightWidth:id == selectedindex ? 5:0}}
          onPress={()=>{setselectedindex(id)}}
          >
            <Icon name={icon} type={type} color={id == selectedindex ? '#cc3333' :'black'} size={wp(5)}/>
          <Text style={{textAlign:'center',fontSize:wp(4),fontFamily:'Digikala',color:id == selectedindex ? '#cc3333' :'black'}}>{title}</Text>
          </TouchableOpacity>
        )}
      />
      }
     
      _SectionItem={
        <View style={{flex:1}}>
            { 
          
          <FlatList
          data={SectionItems.filter(a=>a.selectedIndex == selectedindex)}
          numColumns={2}
          renderItem={({item,index})=>
            <TouchableOpacity style={{width:wp(30),height:hp(20)}}>
              <View style={{width:'80%',marginHorizontal:'10%',height:'70%',justifyContent:'center',alignItems:'center',borderRadius:10,borderWidth:0.5}}>
              <Image  
              source={item.images}
              style={{width:'80%',height:'80%'}}
              resizeMode='stretch'
              />
               <View style={{width:'80%',marginHorizontal:'10%',height:'25%',marginTop:'1%',justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontFamily:'Digikala',fontSize:wp(4),color:'black'}}>{item.title}</Text>
              </View>
              </View>
             
              </TouchableOpacity>
          

          }
          />
        }
          </View>
      }

        />

</Drawer>
    </View>
   )
    }

const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      item: {
        backgroundColor: "#8A8A8A",
        padding: 20
        ,borderBottomWidth:0.5,borderBottomColor:'black'
        ,justifyContent:'center',alignItems:'center'
      },
      header: {
        fontSize: 32,
        backgroundColor: "#fff",height:50
      },
      title: {
        fontSize: wp(4),color:'white',fontFamily:'Digikala'
      }
    });
    
  