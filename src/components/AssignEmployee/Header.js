import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {dimensions, colors} from '../../styles/variables';
import {responsive} from '../../styles/mixins';
import Icon from 'react-native-vector-icons/Ionicons';

export const Header = (props) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={props.onClickBack}>
        <Icon
          style={{marginTop: responsive.vertical(3)}}
          name="ios-chevron-back"
          color={colors.white}
          size={25}
        />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: dimensions.width,
    height: responsive.vertical(90),
    paddingTop: 20,
    // flex: 1,
    flexDirection: 'row',
    paddingLeft: responsive.horizontal(30),
    backgroundColor: colors.purple,
  },
  headerTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: responsive.horizontal(30),
  },
});
