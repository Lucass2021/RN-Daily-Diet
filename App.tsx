import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold  } from '@expo-google-fonts/nunito-sans';
import { StatusBar } from 'react-native';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold  })

  return (
    <>
      <StatusBar 
        barStyle="light-content" 
      />
      {fontsLoaded ? <Routes/> : <Loading/>}
    </>
  );
}

