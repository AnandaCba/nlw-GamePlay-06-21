//Importando
import React from 'react';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';
import {StatusBar } from 'react-native';

import { Routes } from './src/routes';
import {Background} from './src/components/Background'

//Por padrão deve exportar um componente, nesse caso exportando um componente criado no 'index.tsx'
export default function App() {
  //IMportando fontes
  const [FontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });
 
  //Condição para segurar o app enquanto carrerga fonte.
  if(!FontsLoaded){
    //Segura a tela de splash antes de inciar o App para carregar fontes
    return <AppLoading/>
  };

  return (
    //Iniciando o App
    <Background>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Routes/>
    </Background>
  );
}