"use client";

import { useQuery } from "@tanstack/react-query";
import clientServer from "./clientServer";

export interface CategoryItem {
  id: number | string;
  name: string;
  title: string;
  slug: string;
  description?: string;
  status?: number;
  thumb?: string;
  cover?: string;
  image: string;
}

interface RawCategory {
  id: number | string;
  name?: string;
  title?: string;
  slug?: string;
  description?: string;
  status?: number;
  thumb?: string;
  cover?: string;
  image?: string;
}

interface CategoryApiResponse {
  data: RawCategory[];
}

export const useCategory = () => {
  const query = useQuery<CategoryItem[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await clientServer<CategoryApiResponse>("item-category");
      const list = Array.isArray(res) ? res : res?.data ?? [];

      return list.map((item: RawCategory) => ({
        id: item.id,
        name: item.name || item.title || "",
        title: item.title || item.name || "",
        slug: item.slug || "",
        description: item.description || "",
        status: item.status,
        thumb: item.thumb,
        cover: item.cover,
        image: item.image || item.thumb || item.cover || "/images/category/lunch.png",
      }));
    },
  });

  return {
    categories: query.data ?? [],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
    query,
  };
};

export default useCategory;