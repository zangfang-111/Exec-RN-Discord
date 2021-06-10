

import React, { useEffect } from 'react'
import { useTheme } from '@/Theme'
import { View, Text, ScrollView, FlatList } from 'react-native'
import { Icon, Divider } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { HistoryItem } from '@/Components'
import { HistoryData } from '@/Config'

import { styles } from './styles'

const HistoryContainer = () => {
  const { Gutters, Fonts, Colors } = useTheme()
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      title: Platform.OS === 'ios' ? '' : 'History',
      headerTintColor: Colors.black,
      headerBackImage: () => (
        <Icon
          name="angle-left"
          type="font-awesome"
          color={Colors.Black}
          size={33}
        />
      ),
      headerBackTitle: 'History',
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
      style={styles.container}
      edges={['right', 'left']}
    >
      <ScrollView>
      <View  style={styles.main}>
        <Text style={styles.countTextView}> TOTAL: {HistoryData.length}</Text>
        <View style={styles.listStyle}>
          <View style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 10}}>
            <Text>THUMBONAIL</Text>
            <View style={{width: 20}}></View>
            <Text>NAME</Text>

          </View>
          <View style={[styles.titleLineStyle, Gutters.mediumTMargin]}></View>
        <FlatList
        data={HistoryData}
        horizontal={false}
        renderItem={({ item }) => {
          return <HistoryItem item={item} />
        }}
        ItemSeparatorComponent={() => <Divider />}
        keyExtractor={(item) => item.id}
      />
        </View>
        
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default HistoryContainer
