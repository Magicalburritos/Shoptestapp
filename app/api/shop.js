import axios from "axios";
import { apiKey } from "@env";
const baseUrl = "https://api2.shop.com/AffiliatePublisherNetwork/v2";

export default axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "application/json",
    api_Key: apiKey,
  },
});
