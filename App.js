import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native"
import 'react-native-gesture-handler';
// import Tabs from "./navigation/tabs";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Home } from "./screens";
import {TotalLead,Lead,OpenLead, RepliedLead, OpportunityLead, QuotationLead, LostQuotationLead, InterestedLead, ConvertedLead, DoNotContactLead}from './screens';

const Stack = createStackNavigator()

const App = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const openSidebar = () => {
    console.log("Opening sidebar");
    setOpenSidebarToggle(!openSidebarToggle);
  };
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" options={{ title: 'Home' }} >
          {() => (
            <View style={styles.container}>
              <Header openSidebar={openSidebar} />
              <View style={styles.contentContainer}>
                {openSidebarToggle && (
                  <Sidebar
                    openSidebarToggle={openSidebarToggle}
                    openSidebar={openSidebar}
                  />
                )}
                <Home />
              </View>
            </View>
          )}
        </Stack.Screen>
        <Stack.Screen name="TotalLead" component={TotalLead} />
        <Stack.Screen name="Lead" component={Lead} />
        <Stack.Screen name="OpenLead" component={OpenLead} />
        <Stack.Screen name="RepliedLead" component={RepliedLead} />
        <Stack.Screen name="OpportunityLead" component={OpportunityLead} />
        <Stack.Screen name="QuotationLead" component={QuotationLead} />
        <Stack.Screen name="LostQuotationLead" component={LostQuotationLead} />
        <Stack.Screen name="InterestedLead" component={InterestedLead} />
        <Stack.Screen name="ConvertedLead" component={ConvertedLead} />
        <Stack.Screen name="DoNotContactLead" component={DoNotContactLead} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    position: 'relative',
  },
});

export default App;
