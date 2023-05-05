import React, { Component } from "react";
import { StyleSheet, View, TextInput ,Text,TouchableOpacity} from "react-native";
import { Icon }  from "react-native-elements";
import {Slider} from '@miblanchard/react-native-slider';
import { widthPercentageToDP as wp } from "react-native-responsive-screen";



const SliderContainer = (props: {
    caption: string;
    children: React.ReactElement;
    sliderValue?: Array<number>;
    trackMarks?: Array<number>;
    vertical?: boolean;
}) => {
    const {caption, sliderValue, trackMarks} = props;
    const [value, setValue] = React.useState(
        sliderValue ? sliderValue : DEFAULT_VALUE,
    );
    let renderTrackMarkComponent: React.ReactNode;

    if (trackMarks?.length && (!Array.isArray(value) || value?.length === 1)) {
        renderTrackMarkComponent = (index: number) => {
            const currentMarkValue = trackMarks[index];
            const currentSliderValue =
                value || (Array.isArray(value) && value[0]) || 0;
            const style =
                currentMarkValue > Math.max(currentSliderValue)
                    ? trackMarkStyles.activeMark
                    : trackMarkStyles.inactiveMark;
            return <View style={style} />;
        };
    }

    const renderChildren = () => {
        return React.Children.map(
            props.children,
            (child: React.ReactElement) => {
                if (!!child && child.type === Slider) {
                    return React.cloneElement(child, {
                        onValueChange: setValue,
                        renderTrackMarkComponent,
                        trackMarks,
                        value,
                    });
                }

                return child;
            },
        );
    };

    return (
        <View style={styles.sliderContainer}>
            <View style={styles.titleContainer}>
                {/* <Text>{caption}</Text> */}
                <Text>{Array.isArray(value) ? value.join(' - ') : value}</Text>
            </View>
            {renderChildren()}
        </View>
    );
}
export const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        margin: 16,
        paddingBottom: 32,
    },
    sliderContainer: {
        paddingVertical: 16,
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    vertical: {
      
    }
});



export default  DaySelector=(props)=> {

    return (
        <View style={[{flexDirection:'row-reverse',alignItems:'flex-end',justifyContent:'space-between',alignSelf:'center',marginBottom:10},props.ButtonStyle]}
       >
       <View style={{width:wp(27)}}>
         <TouchableOpacity style={{borderRadius:wp(11),width:wp(22),height:wp(22),borderColor:'#0ab076',borderWidth:0.8
            ,elevation:2,justifyContent:'center',alignItems:'center',backgroundColor:props.disableState ? '#0ab076' : 'white'}}
            onPress={props.PressItem}
            >
            <Text style={{textAlign:'center',color:!props.disableState ?'gray':'white',fontFamily:'Digikala'}}>{props.Title}</Text>
 </TouchableOpacity>
 </View>
        <View style={{width:wp(60),marginHorizontal:wp(5)}}>
        <SliderContainer
                caption=''
                sliderValue={[6, 24]}>
        <Slider
                    value={props.value}
                    onValueChange={value => props.setValue(value)}
                    maximumValue={24}
                    minimumValue={6}
                    maximumTrackTintColor="grey"
                    minimumTrackTintColor={props.disableState ? "#0ab076" : 'grey'}
                    disabled={!props.disableState}
                    thumbTintColor={'white'}
                    step={1}
                    thumbStyle={{width: 30, height: 30,elevation:5}}
                    trackStyle={{backgroundColor:'white',elevation:3,height:10,borderRadius:10,fontFamily:'Digikala'}}
                   
                />
                 </SliderContainer>
        </View>
       
       </View>
    );
  
}

