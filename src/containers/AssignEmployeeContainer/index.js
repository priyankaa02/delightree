import React, {useState, useEffect} from 'react';
import AssignEmployee from '../../components/AssignEmployee';
import {navigate, navigateAndReset} from '../../navigators/NavigationService';
import ScreenNames from '../../navigators/ScreenNames';

const AssignEmployeeContainer = () => {
  const [list, setList] = useState([]);
  const onClickBack = () => {
    navigate(ScreenNames.CreateTaskContainer);
  };

  useEffect(() => {
    //
  }, [list]);

  const onClickRow = (item, id) => {
    if (list.indexOf(item) === -1) {
      setList([...list, item]);
    } else {
      const updatedList = list.filter((item) => item.id !== id);
      setList(updatedList);
    }
  };

  const onClickAssign = () => {
    navigate(ScreenNames.CreateTaskContainer, {list});
  };

  return (
    <AssignEmployee
      onClickBack={onClickBack}
      list={list}
      onClickRow={onClickRow}
      onClickAssign={onClickAssign}
    />
  );
};

export default AssignEmployeeContainer;
