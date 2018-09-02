import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from 'react-native';
import LoadingIndicator from './LoadingIndicator';

export default class AuctionGrabber extends Component {
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
      <View style={styles.auctionSeperator} />
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
      this.state.isLoading ? <LoadingIndicator /> :
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
  },
  auctionSeperator: {
    height: 1,
    width: '100%',
    backgroundColor: 'black'
  }
});
