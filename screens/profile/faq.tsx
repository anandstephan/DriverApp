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

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1); // question 2 open by default

  const faqList = [
    { question: 'Question 1', answer: 'Lorem ipsum placeholder content.' },
    {
      question: 'Question 2',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    { question: 'Question 3', answer: 'Lorem ipsum placeholder content.' },
    { question: 'Question 4', answer: 'Lorem ipsum placeholder content.' },
    { question: 'Question 5', answer: 'Lorem ipsum placeholder content.' },
    { question: 'Question 6', answer: 'Lorem ipsum placeholder content.' },
    { question: 'Question 7', answer: 'Lorem ipsum placeholder content.' },
  ];

  const toggleCollapse = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>FAQs</Text>
      {faqList.map((item, index) => (
        <View key={index} style={styles.card}>
          <TouchableOpacity
            style={styles.header}
            onPress={() => toggleCollapse(index)}
          >
            <Text style={styles.question}>{item.question}</Text>
            <Icon
              name={activeIndex === index ? 'minus' : 'plus'}
              size={18}
              color="#000"
            />
          </TouchableOpacity>
          <Collapsible collapsed={activeIndex !== index}>
            <Text style={styles.answer}>{item.answer}</Text>
          </Collapsible>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  question: {
    fontSize: 16,
    fontWeight: '600',
  },
  answer: {
    marginTop: 10,
    fontSize: 14,
    color: '#333',
  },
});

export default FAQ;
