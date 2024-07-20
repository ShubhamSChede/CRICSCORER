import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScoreInput from './screens/ScoreInput';
import ScoreCard from './screens/ScoreCard';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function AppTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="ScoreInput"  
                component={ScoreInput}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="edit" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen 
                name="ScoreCard" 
                component={ScoreCard}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="list-alt" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default AppTabs;