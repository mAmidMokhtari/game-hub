import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "09e8abfbc24f4c31ada16ec2921a090f",
  },
});
