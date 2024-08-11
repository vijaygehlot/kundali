import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React, {useState} from 'react';
import TabBar from '../components/TabBar';
import LinearGradient from 'react-native-linear-gradient';
import FeatureTab from '../components/FeatureTab';
import Card from '../components/Card';
import CardTable from '../components/CardTable';
import Header from '../components/Header';

interface DataItem {
  id: number;
  title: string;
  body: string;
}

interface TableItem {
  Planet: string;
  Sign: string;
  SignLord: string;
  Degree: string;
  House: string;
}
const Home = () => {
  const data: DataItem[] = [
    {
      id: 1,
      title: 'Description',
      body: 'Ascendant is one of the most sought concepts in astrology when it comes to predicting the minute events in your life. At the time of birth, the sign that rises in the sky is the persons ascendant. it helps in making predictions about the minute events, unlike your moon or sun sign that help in making weekly, monthly or yearly prediction for you. Your ascendant is Pisces.',
    },
    {
      id: 2,
      title: 'Personally',
      body: 'Ascendant is one of the most sought concepts in astrology when it comes to predicting the minute events in your life. At the time of birth, the sign that rises in the sky is the persons ascendant. it helps in making predictions about the minute events, unlike your moon or sun sign that help in making weekly, monthly or yearly prediction for you. Your ascendant is Pisces.',
    },
    {
      id: 3,
      title: 'Career',
      body: 'Ascendant is one of the most sought concepts in astrology when it comes to predicting the minute events in your life. At the time of birth, the sign that rises in the sky is the persons ascendant. it helps in making predictions about the minute events, unlike your moon or sun sign that help in making weekly, monthly or yearly prediction for you. Your ascendant is Pisces.',
    },
  ];
  const tableData: TableItem[] = [
    {
      Planet: 'Ascendant',
      Sign: 'Pisces',
      SignLord: 'Jupiter',
      Degree: '13°13’24',
      House: '1',
    },
    {
      Planet: 'Sun',
      Sign: 'Sagittarius',
      SignLord: 'Jupiter',
      Degree: '13°13’24',
      House: '10',
    },
    {
      Planet: 'Moon',
      Sign: 'Aries',
      SignLord: 'Mars',
      Degree: '13°13’24',
      House: '2',
    },
    {
      Planet: 'Mercury',
      Sign: 'Capricorn',
      SignLord: 'Saturn',
      Degree: '13°13’24',
      House: '11',
    },
    {
      Planet: 'Venus',
      Sign: 'Capricorn',
      SignLord: 'Saturn',
      Degree: '13°13’24',
      House: '11',
    },
    {
      Planet: 'Mars',
      Sign: 'Capricorn',
      SignLord: 'Saturn',
      Degree: '13°13’24',
      House: '11',
    },
    {
      Planet: 'Jupiter',
      Sign: 'Sagittarius',
      SignLord: 'Jupiter',
      Degree: '13°13’24',
      House: '10',
    },
    {
      Planet: 'Saturn',
      Sign: 'Aquarius',
      SignLord: 'Jupiter',
      Degree: '13°13’24',
      House: '12',
    },
    {
      Planet: 'Rahu',
      Sign: 'Virgo',
      SignLord: 'Mercury',
      Degree: '13°13’24',
      House: '12',
    },
    {
      Planet: 'Ketu',
      Sign: 'Pisces',
      SignLord: 'Mercury',
      Degree: '13°13’24',
      House: '12',
    },
    {
      Planet: 'Neptune',
      Sign: 'Capricorn',
      SignLord: 'Saturn',
      Degree: '13°13’24',
      House: '12',
    },
    {
      Planet: 'Uranus',
      Sign: 'Capricorn',
      SignLord: 'Saturn',
      Degree: '13°13’24',
      House: '12',
    },
    {
      Planet: 'Pluto',
      Sign: 'Capricorn',
      SignLord: 'Saturn',
      Degree: '13°13’24',
      House: '12',
    },
  ];

  const [selectedTab, setSelectedTab] = useState(1);
  const [planetTabIndex, setPlanetTabIndex] = useState(1);
  const [kundliTabIndex, setKundliTabIndex] = useState(0);

  const renderContent = () => {
    switch (selectedTab) {
      case 0:
        return <Text style={styles.contentText}>Basic </Text>;
      case 1:
        return (
          <Image
            style={styles.chartImage}
            source={require('../assets/images/chart.png')}
          />
        );
      case 2:
        return <Text style={styles.contentText}>KP Content</Text>;
      case 3:
        return <Text style={styles.contentText}> Ashtakvarga Content</Text>;
      case 4:
        return <Text style={styles.contentText}>Dasha Content</Text>;
      case 5:
        return <Text style={styles.contentText}>Report Content</Text>;
      default:
        return <Text style={styles.contentText}>Content not available</Text>;
    }
  };

  const renderPlanetContent = () => {
    switch (planetTabIndex) {
      case 0:
        return <Text style={styles.contentText}>Sign Content</Text>;
      case 1:
        return <CardTable data={tableData} />;
      default:
        return (
          <Text style={styles.contentText}>Plants Content not available</Text>
        );
    }
  };

  const renderKundliContent = () => {
    switch (kundliTabIndex) {
      case 0:
        return (
          <>
            {data.map(item => (
              <Card key={item.id} title={item.title} body={item.body} />
            ))}
          </>
        );

      case 1:
        return <Text style={styles.contentText}>Planetary Content</Text>;
      case 2:
        return <Text style={styles.contentText}>Yoga Content</Text>;
      default:
        return (
          <Text style={styles.contentText}>Stars Content not available</Text>
        );
    }
  };
  const handleBackPress = () => {
    console.log('Back button pressed');
  };
  return (
    <LinearGradient
      colors={['#BBA42B8C', '#1b261b']}
      start={{x: 3.5, y: 0.9}}
      end={{x: 0, y: 0.8}}
      locations={[0.1, 1]}
      style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
        <Header title="Kundali" onBackPress={handleBackPress} />
        <TabBar onTabPress={setSelectedTab} />
        <View style={styles.contentContainer}>{renderContent()}</View>
        <FeatureTab
          title="Planets"
          data={['Sign', 'Nakshatra']}
          onTabPress={setPlanetTabIndex}
          defaultTab={1}
        />
        <View style={styles.contentContainer}>{renderPlanetContent()}</View>

        <FeatureTab
          title="Understanding your Kundli"
          data={['General', 'Planetary', 'Yoga']}
          defaultTab={0}
          onTabPress={setKundliTabIndex}
        />
        <View style={styles.contentContainer}>{renderKundliContent()}</View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContentContainer: {
    paddingBottom: 50,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    color: 'white',
    fontSize: 18,
    margin: 10,
  },
  chartImage: {
    width: '90%',
    borderRadius: 15,
    marginTop: 10,
  },
});
