"use client"
import { useQuery } from "@tanstack/react-query";
import clientServer from "./clientServer";

export default function useAbout() {
    const query = useQuery<any[]>({
        queryKey: ["about"],
        queryFn: async () => {
            const res = await clientServer<any[] | any>("about-us");
            return res?.data ?? [];
        },
    });

    return {
        about: query.data ?? [],
        isLoading: query.isLoading,
        isError: query.isError,
        error: query.error,
        refetch: query.refetch,
        query,
    };
}