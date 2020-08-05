import React, {useState} from 'react';
import CreateTask from '../../components/CreateTask';
import {navigate, navigateAndReset} from '../../navigators/NavigationService';
import ScreenNames from '../../navigators/ScreenNames';
import DocumentPicker from 'react-native-document-picker';

const CreateTaskContainer = (props) => {
  console.log(
    'props',
    props &&
      props.navigation &&
      props.navigation.state &&
      props.navigation.state.params,
  );
  const {list} =
    props &&
    props.navigation &&
    props.navigation.state &&
    props.navigation.state.params;
  const [title, setTitle] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState('');
  const [desc, setDesc] = useState('');
  const [docName, setDocName] = useState('');

  const onChangeTitle = (text) => {
    setTitle(title);
  };

  const onShowCalendar = (val) => {
    setShowCalendar(val);
  };

  const onChangeDate = (val) => {
    setDate(val.toString());
    setShowCalendar(false);
  };

  const onChangeDesc = (val) => {
    setDesc(val);
  };

  const onPickDoc = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setDocName(res.name.toString());
      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size,
      );
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };

  const onDeleteDoc = () => {
    setDocName('');
  };

  const onClickAssign = () => {
    navigate(ScreenNames.AssignEmployeeContainer);
  };
  return (
    <CreateTask
      title={title}
      onChangeTitle={onChangeTitle}
      showCalendar={showCalendar}
      onShowCalendar={onShowCalendar}
      dateValue={date}
      onChangeDate={onChangeDate}
      desc={desc}
      list={list}
      docName={docName}
      onPickDoc={onPickDoc}
      onChangeDesc={onChangeDesc}
      onDeleteDoc={onDeleteDoc}
      onClickAssign={onClickAssign}
    />
  );
};

export default CreateTaskContainer;
