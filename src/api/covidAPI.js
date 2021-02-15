import axios from "axios";
import { API_KEY } from "@env";

export default axios.create({
  baseUrl: "https://covid-193.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "35062213abmsh4851657f6e21028p101833jsn397fb1c7ac58",
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
  },
});
