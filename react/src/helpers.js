const axios = require("axios");

export const sendEmail = (userData) => {
  const method = "/send-email";
  axios.post(process.env.REACT_APP_NODE_URL + method, { ...userData })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => { console.log(err) })
}