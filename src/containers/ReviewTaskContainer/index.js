import React from 'react';
import ReviewTask from '../../components/ReviewTask';
import {navigate, navigateAndReset} from '../../navigators/NavigationService';
import ScreenNames from '../../navigators/ScreenNames';

const ReviewTaskContainer = () => {
  const onClickHome = () => {
    navigate(ScreenNames.CreateTaskContainer);
  };
  return <ReviewTask onClickHome={onClickHome} />;
};

export default ReviewTaskContainer;
