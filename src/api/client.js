import axios from "axios";

const client = axios.create({
  baseURL: "https://monkfish-app-ui7y2.ondigitalocean.app/api",
});

export default client;
