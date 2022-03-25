const initState = {
  // allPosts: [],
  // content: [],
};

const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return {
        ...state,
        allPosts: action.payload,
      };

      case 'GET_POST_CONTENT':
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default postsReducer;