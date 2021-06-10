import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from '@/Theme'
import { View, Text} from 'react-native'
import { Icon, Image } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { Input, Button } from 'react-native-elements'
import * as ImagePicker from 'react-native-image-picker';
import ActionSheet from 'react-native-actionsheet'

import { styles } from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ProfileContainer = () => {
  const { Layout, Gutters, Images, Fonts, Colors, Common } = useTheme()
  const navigation = useNavigation()
  const [name, setName] = useState('John Doe')
  const [email, setEmail] = useState('johnDoe@gmail.com')
  const [imageSource, setImageSource] = useState(null)
  const actionSheet = useRef()

  useEffect(() => {
    navigation.setOptions({
      title: Platform.OS === 'ios' ? '' : 'Profile Settings',
      headerTintColor: Colors.black,
      headerBackImage: () => (
        <Icon
          name="angle-left"
          type="font-awesome"
          color={Colors.Black}
          onPress={() => navigation.navigate('Accounts')}
          size={33}
        />
      ),
      headerBackTitle: 'Profile Settings',
      headerBackTitleStyle: [
        Fonts.textRegular,
        Fonts.textRegularSize,
        Gutters.smallLMargin,
        { marginTop: 3 },
      ],
      headerLeftContainerStyle: { paddingLeft: 10 },
    })
  }, [])


  const showActionSheet = () => {

    actionSheet.current.show()
  
  };

  const launchCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        // alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response));
        
        setImageSource(response.uri);
      }
    });

  }

  const showImagePicker = () => {
    let options = {
      title: 'You can choose one image',
      maxWidth: 256,
      maxHeight: 256,
      noData: true,
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true
      }
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
        // Alert.alert('You did not select any image');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = { uri: response.uri };
        setImageSource(source.uri);
      }
    });
  }
  const handlePress = (index) => {      
      if (index == 0) {
        launchCamera()
      }else if (index == 1) {
        showImagePicker()
      }else {
        return
      }
  }
  return (
    <SafeAreaView
      style={[Layout.fill, styles.container]}
      edges={['right', 'left']}
    > 
        <View>
          <TouchableOpacity onPress={()=> showActionSheet()}>
              <Image source={imageSource ? { uri: imageSource } : Images.loginformBackground} style={styles.profileImage}/>
              <Text style={styles.upload}>Upload</Text>
          </TouchableOpacity>
        <Input
          label='Name'
          value={name}
          inputContainerStyle={styles.inputContainer}
          onChangeText={value => setName(value)}
        />
        
        <Input
          label='Email Address'
          // labelProps=
          // labelStyle={[Fonts.textRegular, Fonts.textBlack, Fonts.textRegular]}
          placeholder="Comment"
          value={email}
          // style={styles}
          inputContainerStyle={styles.inputContainer}
          onChangeText={value => setEmail(value)}
        />
        <Button
          title="SAVE"
          type="outline"
          titleStyle={[
            styles.bookTitleStyle,
            Fonts.textRegularSize,
          ]}
          buttonStyle={styles.bookButtonStyle}
          containerStyle={styles.containerStyle}
          // onPress={() => navigation.navigate('FavoriteDetail')}
        />
            
        </View>
        <ActionSheet
          ref={actionSheet}
          title={'Profile Picture'}
          message={'Select an option to choose a profile picture'}
          options={['Camera', 'Gallery', 'Cancel']}
          cancelButtonIndex={2}
          onPress={handlePress}
          styles={{messageBox: { height: 60 }}}
        />
    </SafeAreaView>
  )
}

export default ProfileContainer
