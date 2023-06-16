import { NavigationContainer } from '@react-navigation/native';
import useRoute from './mainNavigation';

const RootRouter = () => {
  const routing = useRoute();
  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default RootRouter;
