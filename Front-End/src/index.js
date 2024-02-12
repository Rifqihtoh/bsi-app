// import { View, Text } from "react-native";
// import RowLayout from "./components/RowLayout";
// import ColumnLayout from "./components/ColumnLayout";
// import BasicScrollView from "./components/BasicScrollview";
// import BasicFlatList from "./components/BasicFlatList";
// import BasicFL from "./components/BasicFL";
// import FlexBox from "./components/FlexBox";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/Home";
import DetailsScreen from "./screens/Details";
import OneScreen from "./screens/One";
import SynchComp from "./screens/SynchComp";
import AsynchComp from "./screens/AsynchComp";
import AsyncAwaitPromiseExample from "./screens/Promise";
import FetchScreen from "./screens/network/Fetch";
import AxiosScreen from "./screens/network/Axios";
import FetchPostScreen from "./screens/network/FetchPost";
import AxiosPostScreen from "./screens/network/AxiosPost";
import Landing1 from "./screens/Landing1";
import Topup from "./screens/Topup";
import ReduxConcept from "./screens/reduxConcept";
import IntegrasiRedux from "./screens/integrasiRedux";

const Stack = createStackNavigator();

export default function AppSrc() {
  return (
    <>
      {/* <RowLayout /> */}
      {/* <ColumnLayout /> */}
      {/* <BasicScrollView /> */}
      {/* <BasicFlatList /> */}
      {/* <BasicFL /> */}
      {/* <FlexBox /> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="One" component={OneScreen} />
          <Stack.Screen name="Synchronous" component={SynchComp} />
          <Stack.Screen name="Asynchronous" component={AsynchComp} />
          <Stack.Screen name="Promise" component={AsyncAwaitPromiseExample} />
          <Stack.Screen name="Fetch" component={FetchScreen} />
          <Stack.Screen name="Axios" component={AxiosScreen} />
          <Stack.Screen name="Fetch-Post" component={FetchPostScreen} />
          <Stack.Screen name="Axios-Post" component={AxiosPostScreen} />
          <Stack.Screen name="Landing" component={Landing1} />
          <Stack.Screen name="Topup" component={Topup} />
          <Stack.Screen name="Redux" component={ReduxConcept} />
          <Stack.Screen name="Integrasi-Redux" component={IntegrasiRedux} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
