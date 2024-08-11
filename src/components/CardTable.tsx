import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface TableItem {
  Planet: string;
  Sign: string;
  SignLord: string;
  Degree: string;
  House: string;
}

interface CardTableProps {
  data: TableItem[];
}

const CardTable: React.FC<CardTableProps> = ({data}) => {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.tableHeader}>
        <Text style={[styles.headerText]}>Planet</Text>
        <Text style={styles.headerText}>Sign</Text>
        <Text style={styles.headerText}>Sign Lord</Text>
        <Text style={styles.headerText}>Degree</Text>
        <Text style={styles.headerText}>House</Text>
      </View>
      {data.map(item => (
        <View style={styles.tableRow}>
          <Text style={[styles.rowText]}>{item.Planet}</Text>
          <Text style={styles.rowText}>{item.Sign}</Text>
          <Text style={styles.rowText}>{item.SignLord}</Text>
          <Text style={styles.rowText}>{item.Degree}</Text>
          <Text style={styles.rowText}>{item.House}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    backgroundColor: 'rgba(47, 47, 47, 0.5)',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,

    margin: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#424b42',
    paddingVertical: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 14,
    color: 'white',
    flex: 1,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 8,
    alignItems: 'center',
  },
  rowText: {
    fontSize: 14,
    color: 'white',
    flex: 1,
    textAlign: 'center',
  },
  borderRight: {
    borderRightWidth: 1,
    borderRightColor: 'white',
  },
});

export default CardTable;
