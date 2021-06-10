import React, { useEffect } from 'react'
import { useTheme } from '@/Theme'
import { View, Text, StatusBar, ScrollView } from 'react-native'
import { Icon, Button, Divider } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { BasicFlatList, SubAccountItem } from '@/Components'
import { subAccountsData } from '@/Config'

import { styles } from './styles'

const SubAccountsContainer = () => {
  const { Layout, Gutters, Images, Fonts, Colors, Common } = useTheme()
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      title: Platform.OS === 'ios' ? '' : 'Sub-Accounts',
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
      headerBackTitle: 'Sub-Accounts',
      headerBackTitleStyle: [
        Fonts.textRegular,
        Fonts.textRegularSize,
        Gutters.smallLMargin,
        { marginTop: 3 },
      ],
      headerLeftContainerStyle: { paddingLeft: 10 },
    })
  }, [])

  return (
    <SafeAreaView
      style={[Layout.fill, styles.container]}
      edges={['right', 'left']}
    >
      <StatusBar hidden />
      <View
        style={[
          Layout.row,
          Gutters.mediumHMargin,
          Gutters.mediumVMargin,
          styles.topBoxStyle,
        ]}
      >
        <View
          style={[
            Gutters.mediumHPadding,
            Gutters.mediumVPadding,
            styles.leftBoxStyle,
          ]}
        >
          <Text style={[Fonts.textBold, Gutters.smallBMargin]}>REMAINING</Text>
          <Text style={[Fonts.textLarge, Fonts.textRegular]}>7</Text>
        </View>
        <View style={[Layout.fill, Layout.center]}>
          <Button
            title="ADD SUB-ACCOUNT"
            type="outline"
            titleStyle={[
              styles.bookTitleStyle,
              Fonts.textSmall,
              Fonts.textBold,
            ]}
            buttonStyle={[styles.bookButtonStyle, Gutters.smallVPadding]}
            containerStyle={styles.containerStyle}
            onPress={() => navigation.navigate('addAccount')}
          />
        </View>
      </View>
      <View style={[Gutters.mediumHMargin]}>
        <Text style={[Fonts.textSmall, Fonts.textBold, Gutters.smallBMargin]}>
          YOUR SUB-ACCOUNTS
        </Text>
        <Divider style={Common.backgroundPrimary} />
      </View>
      <View style={[Layout.fill, Layout.row]}>
        <BasicFlatList
          horizontal={false}
          listData={subAccountsData}
          _renderItem={({ item }) => <SubAccountItem item={item} />}
          keyObject="name"
          separatorComponent={() => <Divider style={[Gutters.smallVMargin]} />}
        />
      </View>
    </SafeAreaView>
  )
}

export default SubAccountsContainer
