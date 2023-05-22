import BarLoader from 'react-spinners/BarLoader';
import ClipLoader from 'react-spinners/ClipLoader';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';

export const Loader = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <BarLoader
      color="#409bfc"
      cssOverride={{}}
      height={6}
      loading={isLoading}
      width={300}
    />
  );
};

export const HendleLoader = () => {
  return <ClipLoader color="#2349f2" size={10} />;
};
