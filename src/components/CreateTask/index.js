/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Keyboard,
} from 'react-native';
import {dimensions, colors} from '../../styles/variables';
import {responsive} from '../../styles/mixins';
import Text from 'react-native-text';
import Icon from 'react-native-vector-icons/AntDesign';
import SimpleIcons from 'react-native-vector-icons/Entypo';
import Image from 'react-native-fast-image';
import Button from '../Button';
import CalendarPicker from 'react-native-calendar-picker';
import {Header} from './Header';
import Moment from 'moment';

const mainStyles = StyleSheet.create({
  container: {
    width: dimensions.width,
    height: dimensions.height,
    backgroundColor: colors.white,
    // alignItems: 'center',
    // justifyContent: 'center',
    position: 'relative',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    // textAlign: 'center',
    color: colors.black,
    marginLeft: responsive.horizontal(30),
    marginTop: responsive.vertical(30),
  },
  innerView: {
    position: 'relative',
    flex: 1,
  },
  icon: {
    padding: 10,
    paddingBottom: 8,
  },
  input: {
    width: responsive.horizontal(320),
    marginLeft: responsive.horizontal(30),
    marginTop: responsive.vertical(20),
    padding: 8,
    paddingLeft: 12,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.light_grey,
    backgroundColor: colors.white,
    color: colors.input_box_hint,
    fontSize: 18,
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
  btn: {
    marginTop: responsive.vertical(100),
    alignSelf: 'center',
    fontFamily: 'OpenSans-Regular',
  },
  behind: {
    // alignItems: 'center',
    // justifyContent: 'center',
    width: dimensions.width,
    // height: responsive.vertical(500),
    backgroundColor: colors.white,
    position: 'absolute',
    left: 0,
    // top: 0,
    bottom: 60,
    // height: '100%',
  },
  img: {
    width: responsive.horizontal(50),
    height: responsive.horizontal(50),
    borderRadius: responsive.horizontal(50) / 2,
    marginLeft: -20,
  },
  circle: {
    width: responsive.horizontal(55),
    height: responsive.horizontal(55),
    borderRadius: responsive.horizontal(55) / 2,
    backgroundColor: colors.purple,
    borderColor: colors.white,
    borderWidth: 1,
    marginLeft: responsive.horizontal(-10),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const CreateTask = ({
  onClickCreate,
  title,
  onChangeTitle,
  dateValue,
  onChangeDate,
  onShowCalendar,
  showCalendar,
  desc,
  onChangeDesc,
  docName,
  list,
  onPickDoc,
  onDeleteDoc,
  onClickAssign,
}) => {
  console.log('docname', docName);
  return (
    <ScrollView style={mainStyles.container}>
      <Header title="Create task" />
      <View style={mainStyles.innerView}>
        <Text style={mainStyles.label}>Summary</Text>
        <TextInput
          onChangeText={(text) => onChangeTitle(text)}
          value={title}
          style={mainStyles.input}
          placeholder={'Title'}
          placeholderTextColor={'#A6A4A4'}
        />
        <TouchableOpacity
          style={mainStyles.inputContainer}
          onPress={() => onShowCalendar(true)}>
          <TextInput
            style={mainStyles.input1}
            placeholder={'Due date'}
            placeholderTextColor={'#A6A4A4'}
            onKeyPress={Keyboard.dismiss()}
            // onChangeText={() => onShowCalendar(true)}
            value={dateValue && Moment(dateValue).format('DD.MM.yyyy')}
          />
          <Icon
            style={mainStyles.icon1}
            name="calendar"
            color={colors.light_grey}
            size={20}
          />
        </TouchableOpacity>
        {list && list.length > 0 ? (
          <>
            <Text style={mainStyles.label}>Employee</Text>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: responsive.vertical(50),
                marginTop: responsive.vertical(10),
              }}>
              {list.map((item, index) => {
                return (
                  <Image
                    source={{
                      uri:
                        'https://homepages.cae.wisc.edu/~ece533/images/monarch.png',
                    }}
                    style={mainStyles.img}
                    resizeMode={'cover'}
                  />
                );
              })}
              <TouchableOpacity
                style={mainStyles.circle}
                activeOpacity={0.8}
                onPress={() => onClickAssign()}>
                <Icon name="plus" color={colors.white} size={25} />
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: responsive.vertical(20),
            }}>
            <Text style={mainStyles.label}>Employee</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => onClickAssign()}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Icon
                style={{
                  marginTop: responsive.vertical(30),
                  marginRight: responsive.horizontal(-20),
                }}
                name="plus"
                color={colors.purple}
                size={25}
              />
              <Text
                style={[
                  mainStyles.label,
                  {
                    color: colors.purple,
                    marginRight: responsive.horizontal(25),
                  },
                ]}>
                Assign
              </Text>
            </TouchableOpacity>
          </View>
        )}
        <Text style={mainStyles.label}>Description</Text>
        <View style={mainStyles.input}>
          <TextInput
            onChangeText={(text) => onChangeDesc(text)}
            value={desc}
            maxLength={500}
            // style={mainStyles.input}
            placeholder={'Text'}
            multiline={true}
            numberOfLines={5}
            placeholderTextColor={'#A6A4A4'}
          />
          <Text
            style={{
              fontSize: 12,
              color: 'grey',
              textAlign: 'right',
              position: 'absolute',
              right: 5,
              bottom: 5,
            }}>
            {desc ? desc.length : 0}/500
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: responsive.vertical(10),
          }}>
          <Text style={mainStyles.label}>Attachment</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onPickDoc()}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <SimpleIcons
              style={{
                marginTop: responsive.vertical(30),
                marginRight: responsive.horizontal(-20),
              }}
              name="attachment"
              color={colors.purple}
              size={20}
            />
            <Text
              style={[
                mainStyles.label,
                {color: colors.purple, marginRight: responsive.horizontal(25)},
              ]}>
              Add
            </Text>
          </TouchableOpacity>
        </View>
        {docName !== '' && (
          <View
            style={{
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: responsive.horizontal(320),
              marginTop: responsive.vertical(20),
              padding: 5,
              borderWidth: 1,
              borderRadius: 5,
              borderColor: colors.light_grey,
            }}>
            <SimpleIcons
              name="attachment"
              style={{marginTop: 2}}
              color={colors.black}
              size={20}
            />
            <Text style={{fontSize: 18, color: 'grey'}}>{docName}</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => onDeleteDoc()}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Icon
                style={{
                  marginTop: responsive.vertical(5),
                  marginRight: responsive.horizontal(10),
                }}
                name="delete"
                color="red"
                size={18}
              />
            </TouchableOpacity>
          </View>
        )}
        <Button text="Create task" />
      </View>
      <View style={mainStyles.behind}>
        {showCalendar && (
          <CalendarPicker
            onDateChange={(date) => onChangeDate(date)}
            selectedDayColor={colors.purple}
            selectedDayTextColor={colors.purple}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default CreateTask;
TouchableOpacity;
