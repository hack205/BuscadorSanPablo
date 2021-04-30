import React, {useState} from 'react';
import {FAB, Portal, Provider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Foundation';

const MenuMap = ({setVisibleModal, setTipeModal}) => {
  const [state, setState] = useState({open: false});

  const onStateChange = ({open}) => setState({open});

  const {open} = state;

  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={open}
          icon={open ? 'home-map-marker' : 'plus'}
          actions={[
            {
              icon:'account-supervisor',
              label: 'Jornada',
              onPress: () => {
                setVisibleModal(true),
                setTipeModal('jornada')
              },
              small: false,
            },
            {
              icon: 'account-switch',
              label: 'Cartera',
              onPress: () => {
                setVisibleModal(true),
                setTipeModal('cartera')
              },
              small: false,
            }
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>
  );
};

export default MenuMap;
