import { useSearchParams } from 'react-router-dom';

export const useFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setFilter = (region: string | null) =>
    setSearchParams({ region: region ? region : '' });

  const filtered = searchParams.get('region')
    ? searchParams.get('region')
    : null;

  return { filtered, setFilter };
};
