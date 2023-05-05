import React, { Component } from "react";
import { StyleSheet, View, TextInput ,Text,TouchableOpacity} from "react-native";
import { Icon }  from "react-native-elements";
export default class Buttons extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <TouchableOpacity style={this.props.ButtonStyle}
        onPress={this.props.ButtonOperator}
       >
         <View>
 <Text style={[{fontFamily:'Digikala'},this.props.titleStyle]}>
    {this.props.titleText}
 </Text>
 </View>
       </TouchableOpacity>
    );
  }
}

