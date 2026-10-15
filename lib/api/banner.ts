import { useQuery } from "@tanstack/react-query";
import clientServer from "./clientServer";

export default function useBanner() {
    const query = useQuery<any[]>({
    queryKey: ["banner"],
    queryFn: async () => {
        const res = await clientServer<any[] | any>("banner");
        return res?.data ?? [];
    },
  });

  return {
    banner: query.data ?? [],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
    query,
  };
}