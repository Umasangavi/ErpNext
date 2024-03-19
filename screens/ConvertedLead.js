import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, FlatList, Modal, TextInput } from 'react-native';
import axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ConvertedLead = ({ navigation }) => {
  const [convertedLead, setConvertedLeadData] = useState([]);
  const [selectedConvertedLeadDetails, setSelectedConvertedLeadDetails] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    fetchLeadData();

  }, []);

  const fetchLeadData = async () => {
    try {
      const response = await axios.get(
        'http://erp.irepute.in:8000//api/resource/Lead?fields=["name","title","company_name","industry","status"]&limit_start=0&limit_page_length=',
        {
          headers: {
            Authorization: 'token 97d10d655ba69bd:9a14ef3d34246c0'
          }
        }
      );
  
      const leadData = response.data.data.filter(lead => lead.status === "Converted");
      setConvertedLeadData(leadData);
    } catch (error) {
      console.error('Error fetching lead data:', error);
    }
  };
  
  const fetchAllLeadDetails = async (leadId) => {
    try {
      const response = await axios.get(`http://erp.irepute.in:8000/api/method/lead_count/${leadId}`, {
        headers: {
          Authorization: 'token 97d10d655ba69bd:9a14ef3d34246c0'
        }
      });
      const leadDetails = response.data.lead.lead_details[leadId]; 
      setSelectedConvertedLeadDetails(leadDetails);
      
      setIsModalVisible(true);
    } catch (error) {
      console.error('Error fetching lead details:', error);
    }
  };
  

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => fetchAllLeadDetails(item.name)}>
      <View style={styles.tableRow}>
        <Text style={[styles.cell, { fontSize: 14 }]}>{item.title ? item.title : '-'}</Text>
        <Text style={[styles.cell, { fontSize: 14 }]}>{item.status}</Text>
        <Text style={[styles.cell, { fontSize: 14 }]}>{item.industry || '-'}</Text>
        <Text style={[styles.cell, { fontSize: 14 }]}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.heading}>Converted Lead</Text>
      </View>
      <FlatList
        data={convertedLead}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.table}
        ListHeaderComponent={() => (
          <View style={styles.tableHeader}>
            <Text style={styles.columnHeader}>Title</Text>
            <Text style={styles.columnHeader}>Status</Text>
            <Text style={styles.columnHeader}>Industry</Text>
            <Text style={styles.columnHeader}>Name</Text>
          </View>
        )}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>ConvertedLead Details</Text>
            
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Full Name:</Text>
              <TextInput
                style={styles.input}
                value={selectedConvertedLeadDetails?.title || ''}
                placeholder="First Name" 
               
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email:</Text>
              <TextInput
                style={styles.input}
                value={selectedConvertedLeadDetails?.email || ''}  
                placeholder="Email"          
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Website:</Text>
              <TextInput
                style={styles.input}
                value={selectedConvertedLeadDetails?.website || ''} 
                placeholder="Website"                         
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Mobile Number:</Text>
              <TextInput
                style={styles.input}
                value={selectedConvertedLeadDetails?.mobile_no || ''}
                placeholder="Mobile Number"            
              />
            </View>

            {/* <View style={styles.inputContainer}>
              <Text style={styles.label}>Source:</Text>
              <TextInput
                style={styles.input}
                value={selectedConvertedLeadDetails?.source || ''}
                placeholder="Source"            
              />
            </View> */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Industry:</Text>
              <TextInput
                style={styles.input}
                value={selectedConvertedLeadDetails?.industry || ''}
                placeholder="Industry"            
              />
            </View>
            
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  backButton: {
    padding: 10,
    marginRight: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
  },
  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 10,
    borderRadius: 5,
    padding: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  cell: {
    flex: 1,
    fontSize: 16,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  columnHeader: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default ConvertedLead;
