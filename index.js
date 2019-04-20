/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Route from './src/config/route'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Route);
