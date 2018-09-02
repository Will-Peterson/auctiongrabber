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

class AuctionDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: this.props.navigation.state.params.item.year,
      month: this.props.navigation.state.params.item.month,
      day: this.props.navigation.state.params.item.day,
      time: this.props.navigation.state.params.item.time,
      storage_facility: this.props.navigation.state.params.item.storage_facility,
      address: this.props.navigation.state.params.item.address,
      city: this.props.navigation.state.params.item.city,
      state: this.props.navigation.state.params.item.state,
      phone: this.props.navigation.state.params.item.phone,
      auctioneer: this.props.navigation.state.params.item.auctioneer
    }
  }
  render() {
    return (
      <View>
        <Text style={{fontSize: 27, color: 'blue', fontWeight: 'bold'}}>
          {this.state.time + '\n'}
        </Text>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>
          {this.state.storage_facility + '\n'}
        </Text>
        <TouchableOpacity>
          <Text style={{fontSize: 27}}>
            {this.state.address + '\n' + this.state.city + ', ' + this.state.state + '\n'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{fontSize: 25}}>
            {this.state.phone}
          </Text>
        </TouchableOpacity>
        <Text>
          {'\n\n\nAuctioneer: ' + this.state.auctioneer}
        </Text>
      </View>
    );
  }
}

class AuctionGrabber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      error: null,
      isLoading: true
    }
  }

  _renderItem = ({item}) => {
    return(
      <TouchableOpacity style={{flex:1, flexDirection: 'row', marginBottom: 3}}
        onPress={ () => {
          const { navigate } = this.props.navigation;
          navigate('Details', { item: item });
      }}>
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
      <View style={{height: 1, width: '100%', backgroundColor: 'black'}} />
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
        });
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
          error
        });
      });
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

export default createStackNavigator({
  Home: {
    screen: AuctionGrabber,
  },
  Details: {
    screen: AuctionDetails,
  },
});
