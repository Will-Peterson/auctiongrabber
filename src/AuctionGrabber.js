import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default createStackNavigator({
  Home: {
    screen: AuctionGrabber
  },
});

class AuctionGrabber extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
      isLoading: true
    }
  }

  _renderItem = ({item}) => {
    return(
      <TouchableOpacity style={{flex:1, flexDirection: 'row', marginBottom: 3}}>

        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: 'blue'}}>
            {item.time}
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>
            {item.day} {item.month}
          </Text>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>
            {item.storage_facility}
          </Text>
          <Text style={{fontSize: 16}}>
            {item.address}
          </Text>
          <Text style={{fontSize: 16}}>
            {item.city}, {item.state}
          </Text>
          <Text style={{fontSize: 16}}>
            {item.phone}
          </Text>
          <Text style={{fontSize: 16, fontStyle: 'italic'}}>
            {item.auctioneer}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  _renderSeparator = () => {
    return (
      <View style={{height: 1, width: '100%', backgroundColor: 'black'}}>
      </View>
    );
  }

  componentDidMount() {
    const url = 'http://www.7pb.net/storageAuctions.php'
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.auctions,
          isLoading: false
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {

    return (
      this.state.isLoading
      ?
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size='large' color='#330066' animating />
      </View>
      :
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={this._renderSeparator}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});
