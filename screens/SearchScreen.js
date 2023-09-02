import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text>Search page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginBottom: 15,
  },
});
