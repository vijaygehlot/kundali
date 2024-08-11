// components/FeatureTab.tsx
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface FeatureTabProps {
  title: string;
  data: string[];
  onTabPress: (tabIndex: number) => void;
  defaultTab: number;
}

const FeatureTab: React.FC<FeatureTabProps> = ({
  title,
  data,
  onTabPress,
  defaultTab,
}) => {
  const [selectedTab, setSelectedTab] = useState(defaultTab);

  const handleTabPress = (index: number) => {
    setSelectedTab(index);
    onTabPress(index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.tabContainer}>
        {data.map((tab, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleTabPress(index)}
            style={[styles.tab, selectedTab === index && styles.selectedTab]}>
            {selectedTab === index ? (
              <LinearGradient
                colors={['#70E1F5', '#FFD194']}
                style={styles.gradient}>
                <Text style={[styles.tabText, {color: 'black'}]}>{tab}</Text>
              </LinearGradient>
            ) : (
              <Text style={styles.tabText}>{tab}</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginVertical: 20,
  },
  title: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  tab: {
    marginHorizontal: 5,

    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: '#1b261b',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 40,
  },
  selectedTab: {
    borderColor: 'transparent',
  },
  gradient: {
    width: '100%',
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 16,
    color: 'white',
  },
});

export default FeatureTab;
