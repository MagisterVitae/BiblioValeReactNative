import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerItem, createDrawerNavigator } from "@react-navigation/drawer";
import { useSafeArea } from "react-native-safe-area-context";

import Home from "../screens/Home";
// import BookList from "../screens/BookList";
import Library from '../screens/Library';
import BookDetail from '../screens/BookDetail';

const Drawer = createDrawerNavigator();

function CustomDrawerContent({ drawerPosition, navigation }) {
  const insets = useSafeArea();
  return (
    <ScrollView
      contentContainerStyle={[
        {
          paddingTop: insets.top + 4,
          paddingLeft: drawerPosition === "left" ? insets.left : 0,
          paddingRight: drawerPosition === "right" ? insets.right : 0,
        },
      ]}
      style={styles.container}
    >
      <DrawerItem
        label="Home"
        style={styles.menuItem}
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
      <DrawerItem
        label="Nuovo libro"
        style={styles.menuItem}
        onPress={() => {
          navigation.navigate("Blog");
        }}
      />
      <DrawerItem
        label="Catalogo"
        style={styles.menuItem}
        onPress={() => {
          navigation.navigate("Library");
        }}
      />
      <DrawerItem
        label="Statistiche"
        style={styles.menuItem}
        onPress={() => {
          navigation.closeDrawer();
        }}
      />
      <DrawerItem
        label="Configurazione"
        onPress={() => {
          navigation.closeDrawer();
        }}
      />
    </ScrollView>
  );
}
export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Library" component={Library}/>
        <Drawer.Screen name="BookDetail" component={BookDetail}/>
        {/* <Drawer.Screen name="Blog" component={Blog} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  menuItem:{
    fontWeight: 'bold',
    fontSize: 24,
    color: "#D9D5DC"
  }
});
