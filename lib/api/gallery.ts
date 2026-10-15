"use client"
import { useQuery } from "@tanstack/react-query";
import clientServer from "./clientServer";

export default function useGallery() {
    const query = useQuery<any[]>({
        queryKey: ["gallery"],
        queryFn: async () => {
            const res = await clientServer<any[] | any>("image-gallery");
            return res?.data ?? [];
        },
    });

    return {
        gallery: query.data ?? [],
        isLoading: query.isLoading,
        isError: query.isError,
        error: query.error,
        refetch: query.refetch,
        query,
    };
}