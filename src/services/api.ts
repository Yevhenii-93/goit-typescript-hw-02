import axios from "axios";

import { ImageData } from "../types";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImagesApi = async (
  topik: string,
  currentPage: number
): Promise<ImageData[]> => {
  const response = await axios.get<{ results: ImageData[] }>(`/search/photos`, {
    params: {
      query: topik,
      page: currentPage,
      per_page: 10,
      client_id: "KoSiC5hiTAikIxrBYGkBPEKqdDRBs_ratr8eu5iwpY0",
    },
  });
  return response.data.results;
};
