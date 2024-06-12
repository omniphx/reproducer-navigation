import {useNavigation} from '@react-navigation/native';
import {Button, View} from 'react-native';
import {ChallengesStackScreenProps} from './ChallengesStackScreen';

// FIXME use the actual days from the challenge

export const InactiveChallengeDetailScreen = () => {
  const navigation = useNavigation<ChallengesStackScreenProps>();

  return (
    <View>
      <Button
        title="Hide header"
        onPress={() => navigation.setOptions({headerShown: false})}
      />
      <Button
        title="Reset header"
        onPress={() =>
          navigation.setOptions({
            headerShown: true,
          })
        }
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back (reset)"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'NextChallenge'}],
          })
        }
      />
    </View>
  );
};
