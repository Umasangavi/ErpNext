import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Sidebar({ openSidebarToggle, openSidebar }) {

  const handleSidebarToggle = () => {
    openSidebar(); 
  };

  return (
    <View style={[styles.sidebar, openSidebarToggle && styles.sidebarOpen]}>
      <TouchableOpacity style={styles.overlay} onPress={handleSidebarToggle} />
      <View style={styles.sidebarContent}>
        <View style={styles.sidebarTitle}>
          <View style={styles.sidebarBrand}>
          <MaterialCommunityIcons name="home" size={24} color="black" style={styles.icon} />
            <Text>HOME</Text>
          </View>
          <TouchableOpacity onPress={handleSidebarToggle}> 
            <MaterialCommunityIcons name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.sidebarList}>
          <TouchableOpacity style={styles.sidebarListItem}>
            <MaterialCommunityIcons name="account-box-multiple-outline" size={24} color="black" style={styles.icon} />
            <Text>Accounting</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarListItem}>
            <MaterialCommunityIcons name="cash-plus" size={24} color="black" style={styles.icon} />
            <Text>Buying</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarListItem}>
            <MaterialCommunityIcons name="cash-multiple" size={24} color="black" style={styles.icon} />
            <Text>Selling</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarListItem}>
            <MaterialCommunityIcons name="stocking" size={24} color="black" style={styles.icon} />
            <Text>Stock</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarListItem}>
            <MaterialCommunityIcons name="account-box" size={24} color="black" style={styles.icon} />
            <Text>HR</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarListItem}>
            <MaterialCommunityIcons name="google-analytics" size={24} color="black" style={styles.icon} />
            <Text>Manufacturing</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarListItem}>
            <MaterialCommunityIcons name="quality-high" size={24} color="black" style={styles.icon} />
            <Text>Quality</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarListItem}>
            <MaterialCommunityIcons name="monitor-small" size={24} color="black" style={styles.icon} />
            <Text>CRM</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarListItem}>
            <MaterialCommunityIcons name="archive" size={24} color="black" style={styles.icon} />
            <Text>Projects</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarListItem}>
            <MaterialCommunityIcons name="account-circle" size={24} color="black" style={styles.icon} />
            <Text>Users</Text> 
          </TouchableOpacity>
         
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 200,
    backgroundColor: '#fff',
    zIndex: 1000,
    flexDirection: 'row',
  },
  sidebarOpen: {
    width: '60%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  sidebarContent: {
    flex: 1,
  },
  sidebarTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  sidebarBrand: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sidebarList: {
    paddingTop: 20,
  },
  sidebarListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  icon: {
    marginRight: 10,
  },
});

export default Sidebar;


