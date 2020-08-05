import React from 'react';
import {View, StyleSheet, TextInput, FlatList} from 'react-native';
import {dimensions, colors} from '../../styles/variables';
import {responsive} from '../../styles/mixins';
import {Header} from './Header';
import {RowView} from './RowView';
import Button from '../Button';
import Icon from 'react-native-vector-icons/Ionicons';

const data = [
  {
    id: '1',
    name: 'Arlene Robertson',
    desc: 'Manager',
  },
  {
    id: '2',
    name: 'Arlene Robertson',
    desc: 'Manager',
  },
  {
    id: '3',
    name: 'Arlene Robertson',
    desc: 'Manager',
  },
  {
    id: '4',
    name: 'Arlene Robertson',
    desc: 'Manager',
  },
  {
    id: '5',
    name: 'Arlene Robertson',
    desc: 'Manager',
  },
  {
    id: '6',
    name: 'Arlene Robertson',
    desc: 'Manager',
  },
  {
    id: '7',
    name: 'Arlene Robertson',
    desc: 'Manager',
  },
  {
    id: '8',
    name: 'Arlene Robertson',
    desc: 'Manager',
  },
  {
    id: '9',
    name: 'Arlene Robertson',
    desc: 'Manager',
  },
  {
    id: '10',
    name: 'Arlene Robertson',
    desc: 'Manager',
  },
  {
    id: '11',
    name: 'Arlene Robertson',
    desc: 'Manager',
  },
];

const AssignEmployee = ({
  onClickBack,
  searchValue,
  onChangeSearch,
  onClickRow,
  list,
  onClickAssign,
}) => {
  return (
    <View style={mainStyles.mainContainer}>
      <Header title={'Assign employee'} onClickBack={onClickBack} />
      <View style={mainStyles.innerView}>
        <View style={mainStyles.inputContainer}>
          <TextInput
            style={mainStyles.input1}
            placeholder={'Search members'}
            placeholderTextColor={'#A6A4A4'}
            onChangeText={(text) => onChangeSearch(text)}
            value={searchValue}
          />
          <Icon
            style={mainStyles.icon1}
            name="search"
            color={colors.light_grey}
            size={20}
          />
        </View>
        <FlatList
          style={{marginTop: responsive.vertical(5)}}
          data={data}
          renderItem={({item, i}) => (
            <RowView
              name={item.name}
              desc={item.desc}
              index={i}
              list={list}
              item={item}
              onClickRow={() => onClickRow(item, item.id)}
            />
          )}
        />
      </View>
      <View style={mainStyles.btnView}>
        <Button
          text="Assign"
          style={{marginTop: responsive.vertical(0)}}
          onPress={onClickAssign}
        />
      </View>
    </View>
  );
};

const mainStyles = StyleSheet.create({
  mainContainer: {
    width: dimensions.width,
    height: dimensions.height,
    backgroundColor: colors.white,
    // alignItems: 'center',
    // justifyContent: 'center',
    position: 'relative',
  },
  innerView: {
    position: 'relative',
    flex: 1,
  },
  inputContainer: {
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.light_grey,
    width: responsive.horizontal(320),
    marginLeft: responsive.horizontal(30),
    marginTop: responsive.vertical(30),
    fontSize: 18,
    color: colors.input_box_hint,
  },
  input1: {
    height: 45,
    paddingLeft: 12,
    fontSize: 18,
    color: colors.input_box_hint,
  },
  icon1: {
    position: 'absolute',
    right: 10,
  },
  btnView: {
    width: dimensions.width,
    height: responsive.vertical(90),
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 6,
      height: 2,
    },
    shadowOpacity: 0.8,
    elevation: 5,
  },
});

export default AssignEmployee;
