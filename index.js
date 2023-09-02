import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import React, { useCallback, useRef } from 'react';
import 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import Drawer from './components/drawer/Drawer';
import Navigator from './components/Navigator';

function AppContainer() {
  const drawerRef = useRef();

  return (
    <PaperProvider>
        <NavigationContainer>
          <Drawer ref={drawerRef}>
            <Navigator getDrawerRef={useCallback(() => drawerRef, [])}/>
          </Drawer>
        </NavigationContainer>
    </PaperProvider>
  );
}

registerRootComponent(AppContainer);
