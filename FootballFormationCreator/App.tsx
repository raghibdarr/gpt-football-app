// Import required modules from the React and React Native libraries
import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

// Define the App component as a functional component
const App: React.FC = () => {
  // Declare the state for the formation using the useState hook
  const [formation, setFormation] = useState<string>('4-4-2');

  // Define a function to handle the formation change when the button is pressed
  const handleFormationChange = () => {
    setFormation('4-3-3');
  };

  // Return the JSX structure for the app's user interface
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Football Formation Creator</Text>
      <Text style={styles.formation}>Current Formation: {formation}</Text>
      <TouchableOpacity style={styles.button} onPress={handleFormationChange}>
        <Text style={styles.buttonText}>Change Formation</Text>
      </TouchableOpacity>
    </View>
  );
};

// Define the styles for the app's UI components using the StyleSheet.create method
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  formation: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

// Export the App component as the default export for this module
export default App;
