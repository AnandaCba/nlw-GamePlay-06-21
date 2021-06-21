//Importando
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SignIn } from './src/screens/signin';

//Por padrão deve exportar um componente, nesse caso exportando um componente criado no 'index.tsx'
export default function App() {
  return (
    <SignIn />
  );
}