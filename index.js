import { AppRegistry } from 'react-native';
import App from './src/App';

// get rid of “Remote debugger is in a background tab” warning
console.ignoredYellowBox = ['Remote debugger'];

AppRegistry.registerComponent('manager', () => App);

// How to add app icon?
//
// https://blog.bam.tech/developper-news/change-your-react-native-app-icons-in-a-single-command-line
//
// npm install -g yo generator-rn-toolbox
// brew install imagemagick
// yo rn-toolbox:assets --icon <path to your icon>
