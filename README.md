This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# To reproduce

1. `yarn`
2. `yarn install:pods`
3. `yarn ios`
4. Press "Navigate"
5. Press "Hide header"
6. Press "Reset header"
7. Press "Go back"
8 Header is now gone

Repeating the above steps and pressing "Go back (reset)" resolves the issue but this workaround loses the stack state.