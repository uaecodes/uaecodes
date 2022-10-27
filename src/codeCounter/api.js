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

export {getCount }