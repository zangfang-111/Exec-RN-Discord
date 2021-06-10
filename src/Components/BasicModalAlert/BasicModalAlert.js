import React from 'react';
import {
  View,
  StyleSheet,
  Button,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
const BasicModalAlert = ({visible, children}) => {
    const [showModal, setShowModal] = React.useState(visible);
    React.useEffect(() => {
      toggleModal();
    }, [visible]);
    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
      } else {
        setShowModal(false)
      }
      
    };
    return (
      <Modal transparent visible={showModal}>
        <View style={styles.modalBackGround}>
          <View
            style={[styles.modalContainer]}>
            {children}
          </View>
        </View>
      </Modal>
    );
  };

  const styles = StyleSheet.create({
    modalBackGround: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      width: '90%',
      backgroundColor: 'white',
      paddingHorizontal: 24,
      paddingTop: 16,
      paddingBottom: 24,
      elevation: 20,
    },
    
  });

  export default BasicModalAlert