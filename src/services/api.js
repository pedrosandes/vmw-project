import axios from "axios";
const URL_BASE = "https://valmediawiki.herokuapp.com";

export const getAllAgents = async () => {
  try {
    const response = await axios.get(`${URL_BASE}/agents/`);
    return response;
  } catch (error) {
    console.log(`Error ao fazer a requisição de todos os agentes ${error}`);
  }
};
