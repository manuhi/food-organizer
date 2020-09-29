import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, View, Text} from 'react-native';

const AddFoodScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.outer}>
      <ScrollView>
        <View>
          <Text style={styles.dummy}>Add Food!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: '#2b2b2b',
  },
  scrollView: {},
  dummy: {
    color: '#00BFFF',
    fontSize: 26,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default AddFoodScreen;
