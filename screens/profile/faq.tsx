import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import Icon from 'react-native-vector-icons/Feather'; // install if not present: react-native-vector-icons
import Colors from '../../constants/color';
import Fonts from '../../constants/font';
import Header from '../services/components/Header';
import { useRoute } from '@react-navigation/native';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1); // question 2 open by default

  const route = useRoute()
  
  // const faqList = [
  //   { question: 'Question 1', answer: 'Lorem ipsum placeholder content.' },
  //   {
  //     question: 'Question 2',
  //     answer:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  //   },
  //   { question: 'Question 3', answer: 'Lorem ipsum placeholder content.' },
  //   { question: 'Question 4', answer: 'Lorem ipsum placeholder content.' },
  //   { question: 'Question 5', answer: 'Lorem ipsum placeholder content.' },
  //   { question: 'Question 6', answer: 'Lorem ipsum placeholder content.' },
  //   { question: 'Question 7', answer: 'Lorem ipsum placeholder content.' },
  // ];

  const toggleCollapse = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <View style={styles.outerContainer}>
      <Header title='FAQ'/>
    <ScrollView style={styles.container}>
      <Text style={styles.title}>FAQs</Text>
      {route.params.faqs.map((item, index) => (
        <View key={index} style={styles.card}>
          <TouchableOpacity
            style={styles.header}
            onPress={() => toggleCollapse(index)}
          >
            <Text style={styles.question}>{item.question}</Text>
            <Icon
              name={activeIndex === index ? 'minus' : 'plus'}
              size={16}
              color="#000"
            />
          </TouchableOpacity>
          <Collapsible collapsed={activeIndex !== index}>
            <Text style={styles.answer}>{item.answer}</Text>
          </Collapsible>
        </View>
      ))}
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer:{
    flex:1,
    backgroundColor: Colors.appBackground
  },
  container: {
    padding: 20,
    backgroundColor: Colors.appBackground
    // flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    fontFamily:Fonts.poppinsBold
  },
  card: {
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    // borderWidth:2
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // width:"100%"
  },
  question: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily:Fonts.poppinsRegular
  },
  answer: {
    marginTop: 10,
    fontSize: 14,
    color: '#333',
    fontFamily:Fonts.poppinsLight
  },
});

export default FAQ;
