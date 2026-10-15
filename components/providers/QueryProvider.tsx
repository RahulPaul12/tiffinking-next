"use client";

import clientServer from "@/lib/api/clientServer";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

interface Settings {
  primary_color: string;
}

function SettingsLoader() {
  const { data } = useQuery<{ data: { theme_primary_color?: string } }>({
    queryKey: ["settings"],
    queryFn: () => clientServer("setting"),
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    const color = data?.data?.theme_primary_color;

    if (!color || !/^#([\da-f]{3}|[\da-f]{6})$/i.test(color)) {
      return;
    }

    document.documentElement.style.setProperty("--primary", color);
    document.documentElement.style.setProperty("--color-primary", color);
  }, [data?.data?.theme_primary_color]);

  return null;
}


export default function QueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <SettingsLoader />
      {children}
    </QueryClientProvider>
  );
}
