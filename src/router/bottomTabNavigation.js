import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  PostsScreen,
  CreatePostsScreen,
  ProfileScreen,
} from '../../mainScreens';

import {
  PostsIcon,
  CreatePostsIcon,
  ProfileIcon,
  LogoutIcon,
  ArrowLeftIcon,
} from '../../../utils/svgIcons';
import { styles } from './HomeScreenStyles';
import { TouchableOpacity } from 'react-native';
const MainTab = createBottomTabNavigator();

const TabRouter = () => {
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  const dispatch = useDispatch();
  const [loggingOut, setLoggingOut] = useState(false);
  const logOut = () => dispatch(signout());
  const onLogout = () => {
    if (loggingOut) {
      logOut();
      setLoggingOut(false);
    } else {
      setLoggingOut(true);
      Alert.alert(
        'Confirm Logout',
        'Are you sure you want to log out of the app?',
        [
          { text: 'Yes', onPress: logOut },
          { text: 'NO', onPress: () => setLoggingOut(false) },
        ],
      );
    }
  };

  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyles,
        headerRightContainerStyle: styles.exitBtn,
        tabBarActiveTintColor: '#FF6C00',
      }}
    >
      <MainTab.Screen
        name="Публікації"
        component={PostsScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: styles.headerTitleStyle,
          tabBarIcon: ({ focused, color, size }) => (
            <PostsIcon color={color} width={40} height={40} />
          ),
          headerRight: () => (
            <TouchableOpacity>
              <LogoutIcon width={24} height={24} />
            </TouchableOpacity>
          ),
        }}
      />
      <MainTab.Screen
        name="Створити публікацію"
        component={CreatePostsScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: styles.headerTitleStyle,
          tabBarIcon: ({ focused, color, size }) => {
            return <CreatePostsIcon width={70} height={40} color={color} />;
          },
          headerLeftContainerStyle: styles.headerLeftContainerStyle,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeftIcon width={24} height={24} />
            </TouchableOpacity>
          ),
        }}
      />
      <MainTab.Screen
        name="Профіль"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <ProfileIcon width={40} height={40} color={color} />;
          },
        }}
      />
    </MainTab.Navigator>
  );
};

export default TabRouter;
