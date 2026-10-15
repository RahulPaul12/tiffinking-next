
import { baseUrl, apiKey } from "@/utils/constant";

const clientServer = async <T = any>(endpoint: string, options?: RequestInit): Promise<T> => {
  const cleanEndpoint = endpoint === "category" ? "item-category" : endpoint;
  const url = `${baseUrl}/${cleanEndpoint}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-api-key": apiKey,
      ...(options?.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
};

export default clientServer;
