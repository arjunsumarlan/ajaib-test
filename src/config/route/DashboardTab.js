  import React from 'react';
  import {
    createBottomTabNavigator
  } from "react-navigation";
  import {
    Image,
    View,
    Text
  } from 'react-native'
  import {
    Portfolio,
    Invest,
    Advisor,
    Chat,
    Settings
  } from "../../screens";
  import { normalize } from 'react-native-elements'
  import colors from '../../assets/constants/colors'
  import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
  
  export default MainRoute = createBottomTabNavigator(
    {
      Portfolio: {
        screen: Portfolio,
        navigationOptions: {
          showLabel: false,
          tabBarIcon: ({ tintColor }) =>
            <View style={{justifyContent:'center', alignItems:'center'}}>
              <MaterialCommunityIcons
                name="signal-cellular-3" 
                color={tintColor}
                size={normalize(20)}
              />
              <Text style={{fontSize:10, color:tintColor}}>Portfolio</Text>
            </View>
      }
    },
      Invest: {
        screen: Invest,
        navigationOptions: {
          showLabel: false,
          tabBarIcon: ({ tintColor }) => 
            <View style={{justifyContent:'center', alignItems:'center'}}>
              <Image 
                source={require('../../assets/images/data-transfer.png')} 
                style={{ width: normalize(20), height: normalize(20), tintColor}}
                resizeMethod='resize'
                resizeMode='contain'
              />
              <Text style={{fontSize:10, color:tintColor}}>Invest</Text>
            </View>
      }
    },
      Advisor: {
        screen: Advisor,
        navigationOptions: {
          showLabel: false,
          tabBarIcon: ({ tintColor }) => 
            <View style={{justifyContent:'center', alignItems:'center'}}>
              <MaterialCommunityIcons
                name="account" 
                color={tintColor}
                size={normalize(20)}
              />
              <Text style={{fontSize:10, color:tintColor}}>Advisor</Text>
            </View>
      }
    },
      Chat: {
        screen: Chat,
        navigationOptions: {
          showLabel: false,
          tabBarIcon: ({ tintColor }) => 
            <View style={{justifyContent:'center', alignItems:'center'}}>
              <MaterialCommunityIcons
                name="help-circle" 
                color={tintColor}
                size={normalize(20)}
              />
              <Text style={{fontSize:10, color:tintColor}}>Chat</Text>
            </View>
      }
    },
      Settings: {
        screen: Settings,
        navigationOptions: {
          showLabel: false,
          tabBarIcon: ({ tintColor }) => 
            <View style={{justifyContent:'center', alignItems:'center'}}>
              <MaterialCommunityIcons
                name="settings" 
                color={tintColor}
                size={normalize(20)}
              />
              <Text style={{fontSize:10, color:tintColor}}>Settings</Text>
            </View>
      }
    },
  },{
    tabBarOptions: {
        activeTintColor: colors.blue,
        showLabel: false
    },
  })