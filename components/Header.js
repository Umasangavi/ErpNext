import React from 'react';
import { View, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

function Header({ openSidebar }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" translucent />
      <View style={styles.header}>
        <TouchableOpacity onPress={openSidebar} style={styles.menuIcon}>
          <MaterialIcons name="menu" size={24} color="black" />
        </TouchableOpacity>
        {/* <View style={styles.headerLeft}>
          <Ionicons name="search" size={24} color="black" />
        </View> */}
        <View style={styles.headerRight}>
          <MaterialIcons name="notifications" size={24} color="black" />
          <MaterialIcons name="email" size={24} color="black" />
          <Ionicons name="person-circle" size={24} color="black" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'transparent', // Ensure that status bar content is visible
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  menuIcon: {
    padding: 5,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent:'space-between'
  },
});

export default Header;
