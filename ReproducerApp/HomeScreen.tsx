import {Pressable, Text} from 'react-native';

export const HomeScreen = () => {
  return (
    <Pressable
      onPress={() => {
        console.log('pressed');
      }}>
      <Text>Press me</Text>
    </Pressable>
  );
};
