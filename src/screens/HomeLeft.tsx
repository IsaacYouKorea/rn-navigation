import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {
  SafeAreaView,
  View,
  Text,
  TopBar,
  UnderlineText,
} from '../theme/navigation';
import {RootStackParamList} from './RootStackParamList';

type homeLeftScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

const title = 'HomeLeft';
export default function HomeLeft() {
  const navigation = useNavigation<homeLeftScreenProp>();
  const goBack = useCallback(
    () => navigation.canGoBack() && navigation.goBack(),
    [navigation],
  );
  const goRight = useCallback(() => {
    navigation.navigate('HomeRight', {id: '4'});
  }, [navigation]);
  return (
    <SafeAreaView>
      <View style={[styles.view]}>
        <TopBar>
          <UnderlineText onPress={goBack} style={styles.text}>
            Go Home
          </UnderlineText>
          <UnderlineText onPress={goRight} style={styles.text}>
            Go Right
          </UnderlineText>
        </TopBar>
        <View style={[styles.content]}>
          <Text style={[styles.text]}>{title}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  view: {flex: 1, padding: 5},
  text: {fontSize: 20},
  content: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
