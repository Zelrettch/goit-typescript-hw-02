import axios from "axios";

const API_KEY = "LF9TkEj0ZsmXJP4kvq9DeO5PzMMyd2Zn07lJBNkpYOY";

export type ImagesResponse = {
  total_pages: number;
  results: Image[];
};

export type Image = {
  description: string;
  id: string;
  urls: {
    small: string;
    full: string;
  };
};

export default async function getPage(
  page: number,
  query: string
): Promise<ImagesResponse> {
  const response = await axios.get<ImagesResponse>(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        client_id: API_KEY,
        page,
        query,
        per_page: 20,
      },
    }
  );
  return response.data;
}
