import React, {useState} from 'react';
import {FAB, Portal, Provider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const MenuMap = ({setVisibleModal,TipeModal, setTipeModal}) => {
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
              icon: 'car-brake-alert',
              label: 'Jornada',
              onPress: () => console.log('Pressed '),
            },
            {
              icon: 'map-marker-path',
              label: 'Cartera',
              onPress: () => { setVisibleModal(true),
              setTipeModal('filter')} ,
              small: false,
            },
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
