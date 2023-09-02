import { useTheme } from '@react-navigation/native';
import React, { forwardRef, useCallback, useImperativeHandle, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Drawer as DrawerLayout } from 'react-native-drawer-layout';
import DrawerMenu from '../drawer/DrawerMenu';

const Drawer = forwardRef(function Drawer({children}, ref) {
   const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      show: () => {
        setDrawerOpen(true);
      },
    };
  }, []);

  const close = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  return (
    <DrawerLayout
      drawerPosition="right"
      open={drawerOpen}
      onOpen={() => setDrawerOpen(true)}
      onClose={() => setDrawerOpen(false)}
      renderDrawerContent={() => {
        return (<DrawerMenu close={close}/>);
      }}
      drawerStyle={{...styles.drawer}}
    >
      {children}
    </DrawerLayout>
  );
});

export default Drawer;

const styles = StyleSheet.create({
  drawer: {
    paddingTop: 10,
  },
});
