import { TOGGLE_DARKTHEME } from '../actions/types';

const INITIAL_STATE = {
  darkThemeEnabled: false 
}

 export const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_DARKTHEME:
      return { ...state, darkThemeEnabled: !state.darkThemeEnabled };
    default:
      return state;
  }
}