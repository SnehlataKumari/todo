import { createSlice } from '@reduxjs/toolkit';

const linkSlice = createSlice({
  name: 'link',
  initialState: {
    links: {}
  },
  reducers: {
    saveLink: (state, { payload }) => { 
      state.links[payload.hash] = {link: payload.link, count: 0};
    },

    deleteLink: (state, {payload}) => {
      delete state.links[payload.hash];
    },

    incrementCount: (state, { payload }) => {
      // console.log(payload);
       state.links[payload.hash].count += 1;
    }
    
  }
});


export const { saveLink, deleteLink, incrementCount } = linkSlice.actions;
export default linkSlice;
