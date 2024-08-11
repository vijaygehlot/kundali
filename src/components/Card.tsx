import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface CardProps {
  title: string;
  body: string;
}

const Card: React.FC<CardProps> = ({title, body}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2f382f',
    borderRadius: 8,
    padding: 16,
    marginVertical: 10,
    margin: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  body: {
    fontSize: 14,
    color: 'white',
    lineHeight: 25,
  },
});

export default Card;
