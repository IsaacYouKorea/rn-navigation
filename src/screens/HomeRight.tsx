import {useNavigation, useRoute} from '@react-navigation/native';
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

type homeRightScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;
const title = 'HomeRight';
export default function HomeRight() {
  const navigation = useNavigation<homeRightScreenProp>();
  const goBack = useCallback(
    () => navigation.canGoBack() && navigation.goBack(),
    [navigation],
  );
  const goRight = useCallback(() => {
    navigation.navigate('HomeRight', {id: '4'});
  }, [navigation]);
  const route = useRoute();
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
          <Text style={[styles.text]}>{JSON.stringify(route, null, 2)}</Text>
          <Text style={[styles.text]}>{route.params && route.params.id}</Text>
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
