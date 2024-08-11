import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const tabNames = ['Basic ', 'Chart', 'KP', 'Ashtakvarga', 'Dasha', 'Report'];

const TabBar = ({onTabPress}: {onTabPress: (tabIndex: number) => void}) => {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleTabPress = (index: number) => {
    setSelectedTab(index);
    onTabPress(index);
  };

  return (
    <View style={styles.container}>
      {tabNames.map((tab, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleTabPress(index)}
          style={styles.tab}>
          <Text
            style={[
              styles.tabText,
              selectedTab === index && styles.selectedTabText,
            ]}>
            {tab}
          </Text>
          {index < tabNames.length - 1 && (
            <Text style={styles.separator}>|</Text>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#34341d',
    borderBottomRightRadius: 10,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    fontSize: 16,
  },
  selectedTabText: {
    fontWeight: 'bold',
  },
  separator: {
    color: 'white',
    marginHorizontal: 6,
  },
});

export default TabBar;
