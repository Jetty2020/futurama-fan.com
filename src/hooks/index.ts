import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';
import { API_ENDPOINT } from '../constants';

export const useApiData = (path: string, pid?: string | string[] | undefined) => {
  if (pid) path += `/${pid}`
  return useSWR(`${API_ENDPOINT}${path}`, fetcher);
};
