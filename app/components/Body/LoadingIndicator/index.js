import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

export default class LoadingIndicator extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size='large' color='#330066' animating />
      </View>
    );
  }
}
