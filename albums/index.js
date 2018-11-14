// Import a library to help create a component
import React from 'react';
import { AppRegistry,
          View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
// Error: Unexpected block statement sorrounding arrow body
// const App = () => {
//   return (
//     <Text>Some Random Text</Text>
//   );
// };

// corrected form
const App = () => (
  <View>
    <Header headerText={'Norman Joya!'} />
    <AlbumList />
  </View>
);

// render a component to the device
AppRegistry.registerComponent('albums', () => App);
