import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.footerContainer}>
        <Text>
          This is the footer
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF9800',
    position: 'absolute',
    bottom: 0
  }
});
