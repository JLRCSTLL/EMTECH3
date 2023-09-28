import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, ImageBackground, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
    setEnteredGoalText('');
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('/Users/jio/Documents/Emtech3/renzo/estetik.jpeg')}
        style={styles.backgroundImage}
      >
        <View style={styles.appContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>CASA's GOALS</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder='Your course goals!'
              style={styles.textInput}
              onChangeText={(text) => setEnteredGoalText(text)}
              value={enteredGoalText}
            />
            <TouchableOpacity
              style={styles.addButton}
              onPress={addGoalHandler}
            >
              <Text style={styles.addButtonLabel}>Add Goal</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.goalListContainer}>
            <FlatList
              data={courseGoals}
              renderItem={(itemData) => (
                <View style={styles.goalItems}>
                  <Text style={styles.goalText}>{itemData.item.text}</Text>
                </View>
              )}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 50,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 250, 240, 0.7)',
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  textInput: {
    flex: 1,
    marginRight: 10,
    borderBottomWidth: 1,
    borderColor: 'black',
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
  addButton: {
    backgroundColor: 'rgba(255, 235, 205, 0.7)',
    padding: 10,
    borderRadius: 5,
  },
  addButtonLabel: {
    fontSize: 18,
    color: '#333',
  },
  goalListContainer: {
    marginTop: 20,
  },
  goalItems: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  goalText: {
    fontSize: 18,
  },
});
