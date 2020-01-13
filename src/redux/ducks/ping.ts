import { filter, delay, mapTo } from "rxjs/operators";

// Actions
enum Actions {
  PING = 'PING',
  PONG = 'PONG'
};

const initialState = {
  isPinging: false,
}

// Reducer
export default function reducer(state = initialState, action:any = {}) {
  switch(action.type) {
    case Actions.PING: {
      return {
        ...state,
        isPinging: true,
      }
    }
    case Actions.PONG: {
      return {
        ...state,
        isPinging: false,
      }
    }
    default:
      return state;
  }
} 

// Action Creators
export function startPing() {
  return { type: Actions.PING };
}

// side effects (epics)
export const pingEpic = (action$: any) => {
  return action$.pipe(
    filter((action: any) => action.type === "PING"),
    delay(1000), // Asynchronously wait 1000ms then continue
    mapTo({ type: "PONG" })
  );
};
