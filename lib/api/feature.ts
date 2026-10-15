"use client"
import { useQuery } from "@tanstack/react-query";
import clientServer from "./clientServer";

export default function useFeature() {
    const query = useQuery<any[]>({
        queryKey: ["feature"],
        queryFn: async () => {
            const res = await clientServer<any[] | any>("why-best");
            return res?.data ?? [];
        },
    });

    return {
        feature: query.data ?? [],
        isLoading: query.isLoading,
        isError: query.isError,
        error: query.error,
        refetch: query.refetch,
        query,
    };
}