import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Footer from '../../Footer';

export default class AuctionDetails extends Component {
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
      <View style={styles.detailsContainer}>
        <Text style={{fontSize: 27, color: 'blue', fontWeight: 'bold'}}>
          {this.state.time}
        </Text>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>
          {'\n' + this.state.storage_facility}
        </Text>
        <TouchableOpacity>
          <Text style={{fontSize: 27}}>
            {'\n' + this.state.address}
          </Text>
          <Text style={{fontSize: 27, textAlign: 'center'}}>
            {this.state.city + ', ' + this.state.state}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{fontSize: 25}}>
            {'\n' + this.state.phone}
          </Text>
        </TouchableOpacity>
        <Text>
          {'\n\n\nAuctioneer: ' + this.state.auctioneer}
        </Text>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
