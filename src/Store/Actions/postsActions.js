import axios from 'axios';
// axios.defaults.withCredentials = true;

// dispatch('NOTIF_HANDLER_LOADING');
// dispatch(notifHandler('success', res.data.message));
// dispatch(notifHandler('error', err.response.data.message));

export const fetchPosts = () => (dispatch) => {

    axios
        // .post(`http://localhost:8000/getPosts`)
        .post(`https://my-super-blog.herokuapp.com/getPosts`)

        .then((res) => {
            // console.log("GET_POSTS", res);
            dispatch({
                type: "GET_POSTS",
                payload: res.data,
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

export const getPostContent = (post) => (dispatch) => {

    const body = {
        post: post
    };
    axios
        // .post(`http://localhost:8000/getPostContent`, body)
        .post(`https://my-super-blog.herokuapp.com/getPostContent`, body)
        .then((res) => {
            // console.log("GET_POST_CONTENT", res);
            dispatch({
                type: "GET_POST_CONTENT",
                payload: res.data,
            });
        })
        .catch((err) => {
            console.log(err);
        });
};