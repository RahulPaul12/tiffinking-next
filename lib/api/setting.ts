"use client"
import { useQuery } from "@tanstack/react-query";
import clientServer from "./clientServer";

export default function useSetting() {
    const query = useQuery<any[]>({
        queryKey: ["setting"],
        queryFn: async () => {
            const res = await clientServer<any[] | any>("setting");
            return res?.data ?? [];
        },
    });

    return {
        setting: query.data ?? [],
        isLoading: query.isLoading,
        isError: query.isError,
        error: query.error,
        refetch: query.refetch,
        query,
    };
}