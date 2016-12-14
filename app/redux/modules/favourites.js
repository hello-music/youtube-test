const SAVE_VIDEO = 'SAVE_VIDEO';

export function saveVideo (video) {
  return {
    type: SAVE_VIDEO,
    video,
  };
}

export default function favourites (state = [], action) {
  switch (action.type) {
    case SAVE_VIDEO:
      return [...state, action.video];
    default :
      return state;
  }
}

