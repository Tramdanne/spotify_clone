import axios from "axios";

const DEEZER_BASE_URL = "https://api.deezer.com";

export async function callDeezerApi(
  path: string,
  params: Record<string, string | number | boolean | undefined> = {},
) {
  const response = await axios.get(`${DEEZER_BASE_URL}${path}`, { params });
  return response.data;
}
