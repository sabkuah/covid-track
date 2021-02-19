import { API_KEY } from "dotenv";

const options = {
  method: "GET",
  url: "https://covid-193.p.rapidapi.com/statistics",
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
  },
  parameters: ["Canada"],
};

export default options;
