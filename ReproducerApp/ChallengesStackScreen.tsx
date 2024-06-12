import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {InactiveChallengeDetailScreen} from './InactiveChallengeDetailScreen';
import {NextChallenge} from './NextChallenge';

export type ChallengesStackParamList = {
  NextChallenge: undefined;
  ActiveChallengeDetail: undefined;
  InactiveChallengeDetail: InactiveChallengeDetailRouteParams;
};

export type ChallengesStackScreenProps =
  StackNavigationProp<ChallengesStackParamList>;

export type InactiveChallengeDetailRouteParams = {
  challengeContentId: string;
  selectDaysVisible?: boolean;
  isUpcoming?: boolean;
};

const ChallengesStack = createStackNavigator<ChallengesStackParamList>();

export const ChallengesStackScreen = () => {
  return (
    <ChallengesStack.Navigator>
      <ChallengesStack.Screen name="NextChallenge" component={NextChallenge} />
      <ChallengesStack.Screen
        name="InactiveChallengeDetail"
        component={InactiveChallengeDetailScreen}
      />
    </ChallengesStack.Navigator>
  );
};
