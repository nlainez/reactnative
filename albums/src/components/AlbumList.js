import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// Functional Component
// const AlbumList = () => (
//   <View>
//     <Text>Album List!!!</Text>
//   </View>
// );

// Class Component
class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => {
        this.setState({ albums: response.data });
      });
  }

  renderAlbums() {
    return this.state.albums.map(album => 
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    return (
      <View>
        { this.renderAlbums() }
      </View>
    );
  }
}

// Exporting Functional/Class Component
export default AlbumList;
