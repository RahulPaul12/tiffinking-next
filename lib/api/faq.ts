"use client"
import { useQuery } from "@tanstack/react-query";
import clientServer from "./clientServer";

export default function useFaq() {
    const query = useQuery<any[]>({
        queryKey: ["faq"],
        queryFn: async () => {
            const res = await clientServer<any[] | any>("faq");
            return res?.data ?? [];
        },
    });

    return {
        faq: query.data ?? [],
        isLoading: query.isLoading,
        isError: query.isError,
        error: query.error,
        refetch: query.refetch,
        query,
    };
}