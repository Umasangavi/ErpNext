import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'; 

const Home = () => {
  const [counts, setCounts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchLeadCounts();
  }, []);

  const fetchLeadCounts = async () => {
    try {
      const response = await axios.get('http://erp.irepute.in:8000/api/method/lead_count', {
        headers: {
          Authorization: 'token 97d10d655ba69bd:9a14ef3d34246c0'
        }
      });

      const countData = response.data.lead;
      
      setCounts(countData);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  const handleTotalLeadPress = () => {
    navigation.navigate('TotalLead');
  };

  const handleLeadPress = () => {   
    navigation.navigate('Lead');
  };

  const handleOpenLeadPress = () => {
    navigation.navigate('OpenLead');
  };

  const handleRepliedLeadPress = () => {
    navigation.navigate('RepliedLead');
  };

  const handleOpportunityLeadPress = () => {
   navigation.navigate('OpportunityLead');
  };
  const handleQuotationLeadPress = () => {
    navigation.navigate('QuotationLead');
  };
  const handleLostQuotationLeadPress = () => {
    navigation.navigate('LostQuotationLead');
  };
  const handleInterestedLeadPress = () => {
    navigation.navigate('InterestedLead');
  };
  const handleConvertedLeadPress = () => {
    navigation.navigate('ConvertedLead');
  };
  const handleDoNotContactLeadPress = () => {
    navigation.navigate('DoNotContactLead');
  };
  

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Dashboard</Text>
        <View style={styles.cardContainer}>        
           <TouchableOpacity onPress={handleTotalLeadPress} style={styles.card}>
              <Text style={styles.title}>{"Accounts"}</Text>
              <Text style={styles.count}>{counts.total_lead_count}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLeadPress}  style={styles.card}>
              <Text style={styles.title}>{"Lead"}</Text>
              <Text style={styles.count}>{counts.Lead_lead_count}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleOpenLeadPress} style={styles.card}>
              <Text style={styles.title}>{"Open Lead"}</Text>
              <Text style={styles.count}>{counts.open_lead_count}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRepliedLeadPress} style={styles.card}>
              <Text style={styles.title}>{"Replied Lead"}</Text>
              <Text style={styles.count}>{counts.replied_lead_count}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleOpportunityLeadPress} style={styles.card}>
              <Text style={styles.title}>{"Opportunity Lead"}</Text>
              <Text style={styles.count}>{counts.opportunity_lead_count}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleQuotationLeadPress} style={styles.card}>
              <Text style={styles.title}>{"Quotation Lead"}</Text>
              <Text style={styles.count}>{counts.quotation_lead_count}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLostQuotationLeadPress} style={styles.card}>
              <Text style={styles.title}>{"Lost Quotation Lead"}</Text>
              <Text style={styles.count}>{counts.lost_quotation_lead_count}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleInterestedLeadPress} style={styles.card}>
              <Text style={styles.title}>{"Interested Lead"}</Text>
              <Text style={styles.count}>{counts.interested_lead_count}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleConvertedLeadPress} style={styles.card}>
              <Text style={styles.title}>{"Converted Lead"}</Text>
              <Text style={styles.count}>{counts.converted_lead_count}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDoNotContactLeadPress} style={styles.card}>
              <Text style={styles.title}>{"Do Not Contact Lead"}</Text>
              <Text style={styles.count}>{counts.donotcontact_lead_count}</Text>
            </TouchableOpacity>
          
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    marinRight:10,
    width: '47%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  count: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    
   
  },
});

export default Home;
