import { useState, useEffect } from "react";
import apiClient, { CanceledError } from "../services/api-client";


interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData =<T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });
    return () => controller.abort();
  }, []);
  return { data, error };
};

export default useData;
