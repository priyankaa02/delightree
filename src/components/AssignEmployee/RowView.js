import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {dimensions, colors} from '../../styles/variables';
import {responsive} from '../../styles/mixins';
import Icon from 'react-native-vector-icons/Ionicons';
import Image from 'react-native-fast-image';

export const RowView = (props) => {
  return (
    <TouchableOpacity style={styles.header} onPress={() => props.onClickRow()}>
      <Image
        source={{
          uri: 'https://homepages.cae.wisc.edu/~ece533/images/monarch.png',
        }}
        style={styles.img}
        resizeMode={'cover'}
      />
      {props.list.indexOf(props.item) !== -1 && (
        <View style={styles.circle}>
          <Icon
            style={styles.icon1}
            name="checkmark"
            color={colors.white}
            size={10}
          />
        </View>
      )}
      <View>
        <Text style={styles.headerTitle}>{props.name}</Text>
        <Text style={styles.desc}>{props.desc}</Text>
      </View>
    </TouchableOpacity>
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
  },
  headerTitle: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: responsive.horizontal(10),
    marginTop: responsive.vertical(5),
  },
  desc: {
    color: colors.light_grey,
    fontSize: 14,
    marginLeft: responsive.horizontal(10),
  },
  img: {
    width: responsive.horizontal(50),
    height: responsive.horizontal(50),
    borderRadius: responsive.horizontal(50) / 2,
  },
  circle: {
    width: responsive.horizontal(20),
    height: responsive.horizontal(20),
    borderRadius: responsive.horizontal(20) / 2,
    backgroundColor: colors.purple,
    borderColor: colors.white,
    borderWidth: 1,
    position: 'absolute',
    top: responsive.vertical(60),
    left: responsive.horizontal(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
