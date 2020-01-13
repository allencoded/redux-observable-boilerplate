import { combineEpics } from 'redux-observable';
import { pingEpic } from '../ducks/ping';

export default combineEpics(
  pingEpic,
);