import { useState, useEffect } from 'react';
import { Cart } from '../store/typings';
import { BASE_URL } from '../utils/constants';

export const useNetwork = (endPoint: string) => {
  const [data, setData] = useState<Array<Cart>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setIsLoading(false);
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}${endPoint}`);
        const responseJSON = await response.json();
        if (error) {
          setError('');
        }
        setData(responseJSON);
      } catch (ex) {
        setIsLoading(false);
        setError('Something went wrong...');
      }
    };
    fetchData();
  }, []);

  return {
    data,
    error,
    isLoading,
  };
};
