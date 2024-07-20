// index.tsx
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import LoginPage from './screens/LoginPage';
import TeamRegistration from './screens/TeamRegistration';
import PlayerRegistration from './screens/PlayerRegistration';
import MatchDetails from './screens/MatchDetails';
import TossResult from './screens/TossResult';
import AppTabs from './AppTabs'; // Import the new tab navigator

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="TeamRegistration">
                <Stack.Screen name="TeamRegistration" component={TeamRegistration} />
                <Stack.Screen name="PlayerRegistration" component={PlayerRegistration} />
                <Stack.Screen name="MatchDetails" component={MatchDetails} />
                <Stack.Screen name="TossResult" component={TossResult} />
                <Stack.Screen name="AppTabs" component={AppTabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
