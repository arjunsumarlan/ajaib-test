import React from "react";
import {
  View,
  Text
} from "react-native";
import colors from "../constants/colors";
import globalStyles from '../globalStyles'
import TouchableItem from './TouchableItem'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default Header = (props, otherProps) => (
    <View style={[globalStyles.headerContainer, { ...props.otherStyle }]} {...otherProps} >
        <View style={{ width: '20%', alignContent: 'center', justifyContent: 'center', ...props.headerRightStyle }}>
            {
                props.back ?
                <TouchableItem onPress={props.onBackPress} >
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name="chevron-left" size={27} color={props.iconColor || colors.white} />
                    </View>
                </TouchableItem>
                :
                null
            }
        </View>
        <View style={{ width: '60%', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 18, color: colors.white }}>{props.title}</Text>
        </View>
        <View style={{ width: '20%', alignContent: 'center', justifyContent: 'center', ...props.headerRightStyle }}>
            {props.headerRight}
        </View>
    </View>
)