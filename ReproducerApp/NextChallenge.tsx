import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import {ChallengesStackScreenProps} from './ChallengesStackScreen';
import {Button, View} from 'react-native';

export const NextChallenge = () => {
  const navigation = useNavigation<ChallengesStackScreenProps>();

  // Note from Marty: We tried to this to fix the header but it doesn't work
  useFocusEffect(
    useCallback(() => {
      navigation.setOptions({
        headerShown: true,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: 'red',
        },
      });
    }, [navigation]),
  );

  return (
    <View>
      <Button
        title="Navigate"
        onPress={() =>
          navigation.navigate('InactiveChallengeDetail', {
            challengeContentId: '123',
          })
        }
      />
    </View>
  );
};
