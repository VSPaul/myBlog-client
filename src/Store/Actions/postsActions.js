import axios from 'axios';
// axios.defaults.withCredentials = true;

// dispatch('NOTIF_HANDLER_LOADING');
// dispatch(notifHandler('success', res.data.message));
// dispatch(notifHandler('error', err.response.data.message));

export const fetchPosts = () => (dispatch) => {

    axios
        .post(`http://localhost:8000/getPosts`)
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
        .post(`http://localhost:8000/getPostContent`, body)
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

// export const newAccount = (more, id) => (dispatch) => {

//     const body = {
//         bank_name: more.name,
//         IBAN: more.iban,
//         visible_name: more.visibleName,
//         balance: more.balance,
//         adds: more.additionals,
//         idSoc: more.societyId
//         //idSoc: id,
//     };
//     // console.log(body);
//     // return
//     axios
//         .post(`${process.env.REACT_APP_URL_BACKEND}/addAccount`, body)
//         .then((res) => {
//             // console.log("ADD_ACCOUNT", res);
//             dispatch(getAccounts());
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// };

// export const editAccount = (more, idSoc, idAcc) => (dispatch) => {

//     const body = {
//         bank_name: more.name,
//         IBAN: more.iban,
//         visible_name: more.visibleName,
//         balance: more.balance,
//         adds: more.additionals,
//         idSoc: more.idSoc,
//         idAccount: idAcc,
//     };

//     axios
//         .post(`${process.env.REACT_APP_URL_BACKEND}/editAccount`, body)
//         .then((res) => {
//             // console.log("EDIT_ACCOUNT", res);
//             dispatch(getAccounts());
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// };

// export const deleteAccount = (id) => (dispatch) => {

//     const body = {
//         idAccount: id,
//     };

//     axios
//         .post(`${process.env.REACT_APP_URL_BACKEND}/deleteAccount`, body)
//         .then((res) => {
//             // console.log("DELETE_ACCOUNT", res);
//             dispatch(getAccounts());
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// };


// // COMMISSIONS
// export const getCommissions = () => (dispatch) => {

//     axios
//         .get(`${process.env.REACT_APP_URL_BACKEND}/getAdditionalTypes`)
//         .then((res) => {
//             // console.log("GET_COMMISSIONS", res);
//             dispatch({
//                 type: "GET_COMMISSIONS",
//                 payload: res.data,
//             });
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// };

// export const newCommission = (more, idUser, idSoc, idAcc) => (dispatch) => {

//     const body = {
//         cat_AdditionalType: more.cat,
//         name_AdditionalType: more.name,
//         amount_AdditionalType: more.amount,
//         idUser: idUser,
//         idSociety: idSoc,
//         idAccount: idAcc,
//     };
//     console.log("BODY NEW COMMISSION", body);

//     axios
//         .post(`${process.env.REACT_APP_URL_BACKEND}/addAdditionalType`, body)
//         .then((res) => {
//             // console.log("ADD_COMMISSION", res);
//             dispatch(getCommissions());
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// };

// export const newAdditional = (more) => (dispatch) => {

//     const body = {
//         cat_AdditionalType: more.cat,
//         name_AdditionalType: more.name,
//         amount_AdditionalType: more.amount,
//     };
//     console.log("BODY NEW ADDITIONAL", body);
//     //return
//     axios
//         .post(`${process.env.REACT_APP_URL_BACKEND}/addAdditionalType`, body)
//         .then((res) => {
//             // console.log("ADD_COMMISSION", res);
//             dispatch(getCommissions());
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// };

// export const editCommission = (more, idUser, idSoc, idAcc, idAdditionalType) => (dispatch) => {

//     const body = {
//         cat_AdditionalType: more.cat,
//         name_AdditionalType: more.name,
//         amount_AdditionalType: more.amount,
//         idUser: idUser,
//         idSociety: idSoc,
//         idAccount: idAcc,
//         idAdditionalType: idAdditionalType,
//     };

//     axios
//         .post(`${process.env.REACT_APP_URL_BACKEND}/editAdditionalType`, body)
//         .then((res) => {
//             // console.log("EDIT_COMMISSION", res);
//             dispatch(getCommissions());
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// };

// export const updateCommissionAmount = (more, idAcc, idAdditionalType) => (dispatch) => {

//     const body = {
//         idAccount: idAcc,
//         idAdditionalType: idAdditionalType,
//         amount: more.amount
//     };

//     axios
//         .post(`${process.env.REACT_APP_URL_BACKEND}/updateAdditionalTypeAmount`, body)
//         .then((res) => {
//             // console.log("EDIT_COMMISSION", res);
//             dispatch(getCommissions());
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// };

// export const deleteCommission = (id) => (dispatch) => {

//     const body = {
//         idAdditionalType: id,
//     };

//     axios
//         .post(`${process.env.REACT_APP_URL_BACKEND}/deleteAdditionalType`, body)
//         .then((res) => {
//             // console.log("DELETE_COMMISSION", res);
//             dispatch(getCommissions());
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// };

// const notifHandler = (flag, msg) => (dispatch) => {
//     const obj = {
//         flag: flag,
//         msg: msg,
//     };
//     dispatch({
//         type: 'NOTIF_HANDLER_DASH',
//         payload: obj,
//     });
//     setInterval(() => {
//         dispatch({
//             type: 'NOTIF_HANDLER_DASH',
//             payload: undefined,
//         });
//     }, 3000)
// };
