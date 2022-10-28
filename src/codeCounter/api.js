import axios from "axios";

function getCount() {

  const response = axios.get(
    process.env.REACT_APP_API.replace("user_field_names=true", ""),
    {
      params: { size: 1 },
      headers: {
        Authorization: "Token " + process.env.REACT_APP_BACKEND_TOKEN,
      },
    }
  );

  const data = response.then((response) => response.data.count).catch(err => console.log(err));

  return data;
}


function getCodes() {

  const response = axios.get(
    process.env.REACT_APP_API.replace('361', '363'),
    {
      params: { size: 100 },
      headers: {
        Authorization: "Token " + process.env.REACT_APP_BACKEND_TOKEN,
      },
    }
  );

  const data = response.then((response) => response.data).catch(err => console.log(err));

  return data;
}

function postForm(name, email, nationality) {

  const response = axios.post(
    process.env.REACT_APP_API.replace('361', '364'),
       {
        "Name": name,
        "Email": email,
        "Nationality": nationality,
    },
    {
      headers: {
        Authorization: "Token " + process.env.REACT_APP_BACKEND_TOKEN,
      },
    }
  );

  const data = response.then((response) => response.data).catch(err => console.log(err));

  return data;
}

export {getCount, getCodes, postForm }