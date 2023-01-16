import axios from "axios";
import { Company } from "../components/CompaniesTable/types";

const API_URL = process.env.REACT_APP_API_URL;

export const API = axios.create({
  baseURL: API_URL,
});

export const companiesAPI = {
  getCompanies: async (): Promise<Company[] | undefined> => {
    try {
      const companies: Company[] = await API.get("/companies/")
        .then((res) => res.data.companies)
        .catch((err) => console.error("error ", err));

      return companies;
    } catch (err) {}
  },
};
