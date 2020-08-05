import CreateTaskContainer from '../containers/CreateTaskContainer';
import AssignEmployeeContainer from '../containers/AssignEmployeeContainer';
import ReviewTaskContainer from '../containers/ReviewTaskContainer';
import {ScreenNames} from './ScreenNames';

export const ScreenPaths = {
  [ScreenNames.CreateTaskContainer]: CreateTaskContainer,
  [ScreenNames.AssignEmployeeContainer]: AssignEmployeeContainer,
  [ScreenNames.ReviewTaskContainer]: ReviewTaskContainer,
};
