import { GET_ERRORS } from "../api/types";

const initialState = {};

// eslint-disable-next-line
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}
