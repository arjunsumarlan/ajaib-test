import React, { PureComponent } from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';
import globalStyles from '../../assets/globalStyles';
import { height } from '../../assets/constants/constants'

export default class Portfolio extends PureComponent {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={globalStyles.centerContainer}>
        <Image 
          source={require('../../assets/images/Sorry.gif')} 
          style={{ width: height * 0.2, height: height * 0.2}}
          resizeMethod='resize'
          resizeMode='contain'
        />
        <Text style={{marginTop:15}}>No View or Function Required.</Text>
      </View>
    )
}
}
