// This function doesn't automatically get registered or picked up my redux

// To make sure this is picked up by redux, we have to use dispatch(myfunction)
// This returned an action.

// Action creator
export const selectSong = (song) => {
  // Return an action
  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};
