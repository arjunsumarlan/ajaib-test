import {
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import {
  Easing,
  Animated
} from "react-native";
import {
  TransferDetails
} from "../../screens";
import DashboardTab from './DashboardTab'

const MainRoute = createStackNavigator({
  TransferDetails: {
    screen: TransferDetails,
    navigationOptions: {
      header: null
    }
  },
  Dashboard: {
    screen: DashboardTab,
    navigationOptions: {
      header: null
    }
  }
}, {
  initialRouteName: "Dashboard",
  transitionConfig: () => {
    return {
      transitionSpec: {
        duration: 500,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: (sceneProps) => {
        const { layout, position, scene } = sceneProps;
        const sceneIndex = scene.index;
        const width = layout.initWidth;
        const translateX = position.interpolate({
          inputRange: [sceneIndex -1 , sceneIndex, sceneIndex + 1],
          outputRange: [width, 0, 0]
        })
        return { transform: [{ translateX }] }
      },
    }
  },
})

export default createAppContainer(MainRoute);