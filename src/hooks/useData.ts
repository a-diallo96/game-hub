import { useState, useEffect } from "react";
import apiClient, { CanceledError } from "../services/api-client";
import { AxiosRequestConfig } from "axios";


interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData =<T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps? :any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then((res) => {
        setData(res.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });
    return () => controller.abort();
  }, deps? [...deps] :[]);
  return { data, error };
};

export default useData;
