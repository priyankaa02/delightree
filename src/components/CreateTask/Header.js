import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {dimensions, colors} from '../../styles/variables';
import {responsive} from '../../styles/mixins';

export const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: dimensions.width,
    height: responsive.vertical(90),
    paddingTop: 20,
    paddingLeft: responsive.horizontal(30),
    backgroundColor: colors.purple,
  },
  headerTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
});
