// import React, { useState } from 'react';
import {StatusBar, View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import SnakeData from '../components/data';
const SnakeSearch = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedBodyShape, setSelectedBodyShape] = useState('');

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleBodyShapeChange = (shape) => {
    setSelectedBodyShape(shape);
  };

  const filteredSnakes = SnakeData.filter((Data) => {
    
    if (selectedColor && Data.bodyColor !== selectedColor) {
      return false;
    }
    if (selectedBodyShape && Data.style !== selectedBodyShape) {
      return false;
    }
    return true;
  });

  return (
    <View style={styles.main}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Snakes Search</Text>
      <View style={styles.filterContainer}>
        <View style={styles.filterSection}>
          <Text style={styles.filterHeading}>Color</Text>
          <Picker
            selectedValue={selectedColor}
            onValueChange={handleColorChange}
            style={styles.picker}
          >
            <Picker.Item label="Any" value="" />
            <Picker.Item label="brown" value="11" />
            <Picker.Item label="Black" value="12" />
            <Picker.Item label="Green" value="13" />
            <Picker.Item label="Brown / yellow" value="14" />
            <Picker.Item label="Red" value="15" />
            <Picker.Item label="Ash" value="16" />
            <Picker.Item label="Orange" value="17" />
            <Picker.Item label="Light Brown" value="18" />

          </Picker>
        </View>
        <View style={styles.filterSection}>
          <Text style={styles.filterHeading}>Shape</Text>
          <Picker
            selectedValue={selectedBodyShape}
            onValueChange={handleBodyShapeChange}
            style={styles.picker}
          >
            <Picker.Item label="Any" value="" />
            <Picker.Item label="වයිරම්" value="1" />
            <Picker.Item label="හරස් ඉරි (වළලු )" value="2" />
            <Picker.Item label="නැත" value="3" />
            <Picker.Item label="පුල්ලි" value="4" />
            <Picker.Item label="පැතිරුණු රටා" value="5" />
            <Picker.Item label="වර්ණවත් හරස් ඉරි (වළලු)" value="6" />
            <Picker.Item label="හරස් ඉරි (මුදු ) " value="7" />
            <Picker.Item label="හරස් ඉරි" value="8" />
          </Picker>
        </View>
      </View>
      <View style={styles.snakeContainer}>
        {filteredSnakes.map((Data) => (
          <View key={Data.id} style={styles.snakeCard}>
            <Image
              source={{ uri: Data.photo }}
              style={styles.snakeImage}
              resizeMode="cover"
            />
            <Text style={styles.snakeName}>{Data.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  heading: {
    textAlign: 'center',
    fontSize: 20,
    borderRadius: 25,
    fontWeight: '600',
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#2b2b2b',
    color:'white',
    marginTop:30,
  },
  filterContainer: {
    flexDirection: 'row',
  },
  filterSection: {
    flex: 1,
    backgroundColor: '#808080',
    padding: 4,
    borderRadius: 10,
    marginRight: 10,
    
  },
  filterHeading: {
    textAlign: 'center',
    fontWeight:'bold',
    color:'white',
  },
  picker: {
    borderRadius: 25,
    fontWeight:600,
  },
  snakeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'center',
  },
  snakeCard: {
    width: 300,
    height: 300,
    margin: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#c0c0c0',
    padding: 10,
    fontWeight: '600',
    borderRadius: 25,
    
  },
  snakeImage: {
    width: '100%',
    height: '90%',
    borderRadius:20,
  },
  snakeName: {
    textAlign: 'center',
    marginTop: 5,
    fontWeight:'bold',
  },
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    paddingTop: 20, 
  },
});

export default SnakeSearch;
