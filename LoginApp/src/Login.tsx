import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import {useUser} from './components/UserProvider';

function Login(): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useUser();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username} // Bind the input value to the username state
          onChangeText={text => setUsername(text)} // Update the username state on input change
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password} // Bind the input value to the password state
          onChangeText={text => setPassword(text)} // Update the password state on input change
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Login"
            onPress={() => {
              console.log('Username:', username);
              console.log('Password:', password);
              login('test');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  form: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  buttonContainer: {
    // Center the button horizontally
    alignItems: 'center',
  },
});

export default Login;
