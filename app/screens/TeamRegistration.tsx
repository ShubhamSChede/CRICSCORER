import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

const TeamRegistration = ({ navigation }: { navigation: NavigationProp<any> }) => {
    const [teamName1, setTeamName1] = useState('');
    const [teamName2, setTeamName2] = useState('');

    const handleRegisterTeams = () => {
        navigation.navigate('PlayerRegistration', { teamName1, teamName2 });
    };

    return (
             <ImageBackground
                source={require('../../assets/images/bg1.png')}
                style={styles.container}
            >
            <Text style={styles.title}>Register Teams</Text>
            <TextInput
                style={styles.input}
                placeholder="Team 1 Name"
                value={teamName1}
                onChangeText={setTeamName1}
            />
            <TextInput
                style={styles.input}
                placeholder="Team 2 Name"
                value={teamName2}
                onChangeText={setTeamName2}
            />
            <TouchableOpacity style={styles.registerButton} onPress={handleRegisterTeams}>
                <Text style={styles.registerButtonText}>Register Teams</Text>
            </TouchableOpacity>
            </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff',
    },
    input: {
        height: 50,
        width: '100%',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        fontSize: 16,
    },
    registerButton: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
    },
    registerButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default TeamRegistration;
