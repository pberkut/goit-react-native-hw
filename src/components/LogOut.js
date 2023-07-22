import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { palette } from '../utils/paletteVariables';
import { authLogOut } from '../redux/auth/authOperations';
import { useDispatch } from 'react-redux';

export function LogOut({ styles }) {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles}
      onPress={() => dispatch(authLogOut())}
    >
      <Icon name="sign-out" size={24} color={palette.gray} />
    </TouchableOpacity>
  );
}
