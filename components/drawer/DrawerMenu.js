import { useNavigation } from '@react-navigation/native';
import React, { memo } from 'react';
import { ScrollView } from 'react-native';
import { Drawer } from 'react-native-paper';
import screens from '../../screens/index';

const DrawerMenu = memo(function DrawerMenu({close}) {
  const navigation = useNavigation();

  return (
    <React.Fragment>
      <ScrollView>
        <Drawer.Item
          key="settings"
          label={'Settings'}
          style={{paddingLeft: 0}}
          onPress={() => {
            navigation.navigate(screens.settings.name);

            close();
          }}
        />
      </ScrollView>
    </React.Fragment>
  );
});

export default DrawerMenu;
