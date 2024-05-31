import axios from "axios";

const client = async (req, url, data = null) => {
  try {
    const config = {
      url: url,
      method: req,
      data: data,
      baseURL: "https://crafty-canvas-server-side.vercel.app",
    };
    return await axios(config);
  } catch (error) {
    return error;
  }
};
export default client;
// "http://localhost:6969",
