// import React, { useState } from 'react'; // Import useState from react
// import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';  // Import the icon library
// import { NavigationProp } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';

// const TossResult = () => {
//     const navigation = useNavigation();
//     const [tossWinner, setTossWinner] = useState<'Team1' | 'Team2' | null>(null);
//     const [decision, setDecision] = useState<'bat' | 'bowl' | null>(null);

//     const handlenext = () => {
//         // Handle navigation to the next screen and pass the match details
//         navigation.navigate('ScoreInput');
//     };   

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Toss Results</Text>

//             <Text style={styles.subTitle}>Who won the toss?</Text>
//             <View style={styles.optionsContainer}>
//                 <TouchableOpacity
//                     style={[
//                         styles.optionButton,
//                         tossWinner === 'Team1' && styles.selectedButton,
//                     ]}
//                     onPress={() => setTossWinner('Team1')}
//                 >
//                     <Text style={styles.optionText}>Team 1</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     style={[
//                         styles.optionButton,
//                         tossWinner === 'Team2' && styles.selectedButton,
//                     ]}
//                     onPress={() => setTossWinner('Team2')}
//                 >
//                     <Text style={styles.optionText}>Team 2</Text>
//                 </TouchableOpacity>
//             </View>

//             <Text style={styles.subTitle}>Decision</Text>
//             <View style={styles.optionsContainer}>
//                 <TouchableOpacity
//                     style={[
//                         styles.optionButton,
//                         decision === 'bat' && styles.selectedButton,
//                     ]}
//                     onPress={() => setDecision('bat')}
//                 >
//                     <Icon name="cricket" size={30} color={decision === 'bat' ? '#fff' : '#000'} />
//                     <Text style={styles.optionText}>Bat</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     style={[
//                         styles.optionButton,
//                         decision === 'bowl' && styles.selectedButton,
//                     ]}
//                     onPress={() => setDecision('bowl')}
//                 >
//                     <Icon name="cricket" size={30} color={decision === 'bowl' ? '#fff' : '#000'} />
//                     <Text style={styles.optionText}>Bowl</Text>
//                 </TouchableOpacity>
//             </View>
//             <View>
//             <Button title="score" onPress={handlenext} />
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f5f5f5',
//     },
//     title: {
//         fontSize: 24,
//         marginBottom: 20,
//     },
//     subTitle: {
//         fontSize: 18,
//         marginVertical: 10,
//     },
//     optionsContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         width: '80%',
//         marginVertical: 10,
//     },
//     optionButton: {
//         padding: 10,
//         borderWidth: 1,
//         borderColor: '#000',
//         borderRadius: 5,
//         alignItems: 'center',
//     },
//     selectedButton: {
//         backgroundColor: '#000',
//     },
//     optionText: {
//         marginTop: 5,
//         fontSize: 16,
//         color: '#000',
//     },
//     navigateButton: {
//         marginTop: 20,
//         padding: 15,
//         backgroundColor: '#007bff',
//         borderRadius: 5,
//     },
//     navigateButtonText: {
//         color: '#fff',
//         fontSize: 16,
//     },
// });

// export default TossResult;

// screens/TossResult.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useEffect, useRef } from 'react';

const TossResult = () => {
    const navigation = useNavigation();
    const [tossWinner, setTossWinner] = useState<'Team1' | 'Team2' | null>(null);
    const [decision, setDecision] = useState<'bat' | 'bowl' | null>(null);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);

    return (
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
            <Text style={styles.title}>Toss Results</Text>

            <Text style={styles.subTitle}>Who won the toss?</Text>
            <View style={styles.optionsContainer}>
                <TouchableOpacity
                    style={[styles.optionButton, tossWinner === 'Team1' && styles.selectedButton]}
                    onPress={() => setTossWinner('Team1')}
                >
                    <Text style={[styles.optionText, tossWinner === 'Team1' && styles.selectedText]}>Team 1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.optionButton, tossWinner === 'Team2' && styles.selectedButton]}
                    onPress={() => setTossWinner('Team2')}
                >
                    <Text style={[styles.optionText, tossWinner === 'Team2' && styles.selectedText]}>Team 2</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.subTitle}>Decision</Text>
            <View style={styles.optionsContainer}>
                <TouchableOpacity
                    style={[styles.optionButton, decision === 'bat' && styles.selectedButton]}
                    onPress={() => setDecision('bat')}
                >
                    <Icon name="cricket" size={30} color={decision === 'bat' ? '#fff' : '#000'} />
                    <Text style={[styles.optionText, decision === 'bat' && styles.selectedText]}>Bat</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.optionButton, decision === 'bowl' && styles.selectedButton]}
                    onPress={() => setDecision('bowl')}
                >
                    <Icon name="cricket" size={30} color={decision === 'bowl' ? '#fff' : '#000'} />
                    <Text style={[styles.optionText, decision === 'bowl' && styles.selectedText]}>Bowl</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('AppTabs')}>
                <Text style={styles.nextButtonText}>NEXT</Text>
            </TouchableOpacity>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 28,
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subTitle: {
        fontSize: 22,
        marginVertical: 10,
        textAlign: 'center',
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        marginVertical: 10,
    },
    optionButton: {
        padding: 15,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
    },
    selectedButton: {
        backgroundColor: '#000',
    },
    optionText: {
        marginTop: 5,
        fontSize: 18,
        color: '#000',
    },
    selectedText: {
        color: '#fff',
    },
    nextButton: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#007bff',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default TossResult;
