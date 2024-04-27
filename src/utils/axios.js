import axios from "axios";

const client = async (req, url, data = null) => {
  try {
    const config = {
      url: url,
      method: req,
      baseURL: "http://localhost:6969",
      data: data,
    };
    return await axios(config);
  } catch (error) {
    return error;
  }
};
export default client;
