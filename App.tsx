// 초기 버전
// import React from 'react';
// import MainNavigator from './src/screens/MainNavigator';

// export default function App() {
//   return <MainNavigator />;
// }
// 리액트 내비게이션 기능 최소한으로 구현
/*
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import MainNavigator from './src/screens/MainNavigator'

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  )
}
*/
// 보통의 리액트 내비게이션용

import React from 'react';
import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/screens/MainNavigator';
enableScreens();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

// ToggleThemeProvider 컴포넌트 적용
/*
import 'react-native-gesture-handler'
import React, {useState, useCallback} from 'react'
import {enableScreens} from 'react-native-screens'
import {SafeAreaProvider} from 'react-native-safe-area-context'
// prettier-ignore
import {NavigationContainer, DefaultTheme, DarkTheme}
from '@react-navigation/native'
import {AppearanceProvider, useColorScheme} from 'react-native-appearance'
import {ToggleThemeProvider} from './src/contexts'
import MainNavigator from './src/screens/MainNavigator'

enableScreens()

export default function App() {
  const scheme = useColorScheme() // 'dark' 혹은 'light'
  const [theme, setTheme] = useState(
    scheme === 'dark' ? DarkTheme : DefaultTheme
  )

  const toggleTheme = useCallback(
    () => setTheme(({dark}) => (dark ? DefaultTheme : DarkTheme)),
    []
  )
  return (
    <AppearanceProvider>
      <ToggleThemeProvider toggleTheme={toggleTheme}>
        <SafeAreaProvider>
          <NavigationContainer theme={theme}>
            <MainNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </ToggleThemeProvider>
    </AppearanceProvider>
  )
}
*/
