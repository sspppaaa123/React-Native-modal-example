import React, {Component} from 'react';
import {Modal, Text, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight, View, StyleSheet, ScrollView} from 'react-native';

export default class ModalExample extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {this.setModalVisible(false)}}>

        <TouchableOpacity 
            style={styles.container} 
            activeOpacity={1} 
            onPressOut={() => {this.setModalVisible(false)}}
          >
      
          <TouchableWithoutFeedback>
                <View style={styles.modalContainer}>
                  <Text style={{color:'yellow'}}>"Hello spandana"</Text>
                </View>
              </TouchableWithoutFeedback>
    
          </TouchableOpacity>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles=StyleSheet.create ({
  container: {
    alignItems: 'center',
    backgroundColor: '#ede3f2',
    padding: 50
 },
  modalContainer: {
     alignItems: 'center',
     backgroundColor: 'blue',
     justifyContent:'center',
  }
});
