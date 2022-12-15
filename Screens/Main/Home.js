import CreateScreen from "../Main/CreateScreen";
import ProfileScreen from "../Main/ProfileScreen";
import PostsScreen from "../Main/PostsScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import icons
import GridIcon from "../../assets/img/gridIcon.svg";
import NewIcon from "../../assets/img/newIcon.svg";
import UserIcon from "../../assets/img/userIcon.svg";

const HomeTabs = createBottomTabNavigator();

const Home = () => {
  return (
    <HomeTabs.Navigator tabBarOptions={{ showLabel: false }}>
      <HomeTabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: () => <GridIcon width={40} height={40} />,
          headerShown: false,
        }}
      />
      <HomeTabs.Screen
        name="Create"
        component={CreateScreen}
        options={{
          tabBarIcon: () => <NewIcon width={70} height={40} />,
          headerShown: false,
        }}
      />

      <HomeTabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <UserIcon width={40} height={40} />,
          headerShown: false,
        }}
      />
    </HomeTabs.Navigator>
  );
};

export default Home;
