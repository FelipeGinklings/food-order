import { useCallback, useEffect, useState } from 'react';
import { MealData } from '../utils/types';

const sendHTTPRequest = async (url: string, config?: object) => {
  // Fetch data from the server
  const response = await fetch(url, config);
  const resData: MealData[] = await response.json();

  if (!response.ok) {
    throw new Error('Something went wrong!');
  }

  return resData;
};

const useHttp = (
  type: 'GET' | 'POST',
  url: string,
  config: object,
  initialValue?: []
) => {
  const [data, setData] = useState<MealData[]>(initialValue!);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<{ message: string }>();

  const sendRequest = useCallback(
    async (order?: string) => {
      setIsLoading(true);
      try {
        const resData = await sendHTTPRequest(url, {
          ...config,
          body: order,
        });
        setData(resData);
      } catch (error: unknown) {
        setError({
          message: (error as Error).message || 'Something went wrong!',
        });
      }
      setIsLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if (type === 'GET') {
      sendRequest();
    }
  }, [type, sendRequest]);

  return { data, sendRequest, isLoading, error };
};

export default useHttp;
