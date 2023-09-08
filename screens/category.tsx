import React from 'react';
import {StatusBar, ScrollView, View, StyleSheet, SafeAreaView } from 'react-native';
import PoisonSliders from '../components/poisonSliders';


const Category = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView contentContainerStyle={styles.container}>
        
        <PoisonSliders title=" උග්‍ර විෂ " rawsCount={1} slidesPerView={1} poisonType="1" />
        <PoisonSliders title=" මද විෂ " rawsCount={1} slidesPerView={1} poisonType="2" />
        <PoisonSliders title=" සුළු විෂ  " rawsCount={1} slidesPerView={1} poisonType="3" />
        <PoisonSliders title=" නිර් විෂ  " rawsCount={1} slidesPerView={1} poisonType="4" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 2,
    paddingBottom: 20,
    marginHorizontal:20,
    justifyContent:'center',
    
    
  },

});

export default Category;
