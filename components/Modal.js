import React from 'react';
import { Modal, Portal, Provider } from 'react-native-paper';
import { View } from 'react-native';
import ModalCartera from './ModalCartera';
import ModalJornada from './ModalJornada';

const ComponenteModal = ({visibleModal,TipeModal,setVisibleModal, setTipeModal}) => {
  console.log("modal",visibleModal);
  const containerStyle = { backgroundColor: 'white', padding: 20 };
  return (
    <Provider>
      <Portal>
        <Modal
          visible={visibleModal}
          transparent={true}
          onDismiss={() => { setVisibleModal(false) }}
          contentContainerStyle={containerStyle}>
          {TipeModal == "cartera" &&
            <View>
              <ModalCartera />
            </View>
          }
          {TipeModal == "jornada" &&
            <View>
              <ModalJornada />
            </View>
          }
        </Modal>
      </Portal>
    </Provider >
  );
};

export default ComponenteModal;
