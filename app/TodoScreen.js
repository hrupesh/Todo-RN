import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons';

export default function TodoScreen() {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>Todo's</Text>
      </View>
      <Icon.Button name="facebook" backgroundColor="#3b5998">
        Login with Facebook
      </Icon.Button>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#512DF8',
    padding: 15,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    marginBottom: 25,
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    letterSpacing: 6,
  },
});
