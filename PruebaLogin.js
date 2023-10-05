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
 