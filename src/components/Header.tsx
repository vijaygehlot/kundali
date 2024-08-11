import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Image,
} from 'react-native';

interface HeaderProps {
  title: string;
  onBackPress: () => void;
}

const Header: React.FC<HeaderProps> = ({title, onBackPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
        <Image
          style={styles.arrowImage}
          source={require('../assets/images/CaretLeft.png')}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: 5,
    paddingTop: Platform.OS === 'ios' ? 40 : 20,
    height: Platform.OS === 'ios' ? 80 : 60,
  },
  backButton: {
    padding: 8,

    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,

    fontSize: 18,
    color: 'white',
  },
  arrowImage: {
    height: 25,
    width: 25,

    alignSelf: 'center',
  },
});

export default Header;
