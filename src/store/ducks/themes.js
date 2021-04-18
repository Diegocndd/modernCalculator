import { colors } from '../../constants/themes';

export const Types = {
  SET_THEME : 'SET_THEME',
};

const initialState = {
  firstColor: colors.base1,
  secondColor: colors.base2,
};

export default function themes(state = initialState, action) {
  switch (action.type) {
    case Types.SET_THEME:
      const fstColor = action.payload.firstColor;
      const sndColor = action.payload.secondColor;
      return ({firstColor: fstColor, secondColor: sndColor});
    default:
      return state;
  }
}
  
export function set_theme(firstColor, secondColor) {
  return {
    type: Types.SET_THEME,
    payload: {
      firstColor,
      secondColor
    },
  }
};
