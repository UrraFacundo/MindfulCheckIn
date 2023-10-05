import React, { useState } from 'react';


import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = () => {

  const [email, setEmail] = useState('');
  
  const [password, setPassword] = useState('');

  const handleLogin = () => {
   
    console.log('Correo electrónico:', email);
    
    console.log('Contraseña:', password);
  };

  return (
    
    <View style={styles.container}>
      
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        onChangeText={text => setEmail(text)}
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
         <Button title="Iniciar Sesión" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  