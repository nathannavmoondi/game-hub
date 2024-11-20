import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "64d44b80c06e49ffad807077f15617c4",
  },
});
