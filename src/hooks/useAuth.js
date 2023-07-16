import { useSelector } from 'react-redux';
import {
  selectUserName,
  selectUserEmail,
  selectUserId,
  selectIsAuth,
  selectIsError,
  selectTextError,
  selectIsRefreshing,
} from '../redux/auth/selectors';

export const useAuth = () => {
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const userId = useSelector(selectUserId);
  const isAuth = useSelector(selectIsAuth);
  const isError = useSelector(selectIsError);
  const isRefreshing = useSelector(selectIsRefreshing);
  const textError = useSelector(selectTextError);

  return {
    userName,
    userEmail,
    userId,
    isAuth,
    isRefreshing,
    isError,
    textError,
  };
};
