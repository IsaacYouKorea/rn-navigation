import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {
  SafeAreaView,
  View,
  Text,
  TopBar,
  UnderlineText,
} from '../theme/navigation';
import {useNavigation} from '@react-navigation/native';
import {ScrollEnabledProvider} from '../contexts';
import {RootStackParamList} from './RootStackParamList';
import {StackNavigationProp} from '@react-navigation/stack';
type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

const title = 'Home';
export default function Home() {
  const navigation = useNavigation<homeScreenProp>();
  const goLeft = useCallback(
    () => navigation.navigate('HomeLeft'),
    [navigation],
  );
  const goRight = useCallback(
    () => navigation.navigate('HomeRight', {id: '3'}),
    [navigation],
  );
  return (
    <SafeAreaView>
      <ScrollEnabledProvider>
        <View style={[styles.view]}>
          <TopBar>
            <UnderlineText onPress={goLeft} style={styles.text}>
              Go Left
            </UnderlineText>
            <UnderlineText onPress={goRight} style={styles.text}>
              Go Right
            </UnderlineText>
          </TopBar>
          <View style={[styles.content]}>
            <Text style={[styles.text]}>{title}</Text>
          </View>
        </View>
      </ScrollEnabledProvider>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  view: {flex: 1, padding: 5},
  text: {fontSize: 20},
  content: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
