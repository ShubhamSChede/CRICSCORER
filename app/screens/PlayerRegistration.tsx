import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type PlayerRegistrationProps = {
  route: RouteProp<ParamListBase, 'PlayerRegistration'>;
  navigation: StackNavigationProp<ParamListBase, 'PlayerRegistration'>;
};

type RootStackParamList = {
  MatchDetails: undefined;
};

const PlayerRegistration = ({ route, navigation }: PlayerRegistrationProps) => {
    const { teamName }: { teamName?: string } = route?.params || {};
    const [team1Players, setTeam1Players] = useState<string[]>([]);
    const [team2Players, setTeam2Players] = useState<string[]>([]);
    const [team1PlayerName, setTeam1PlayerName] = useState('');
    const [team2PlayerName, setTeam2PlayerName] = useState('');

    const handleRegisterPlayer = (team: 'team1' | 'team2') => {
        if (team === 'team1' && team1PlayerName) {
            setTeam1Players([...team1Players, team1PlayerName]);
            setTeam1PlayerName('');
        } else if (team === 'team2' && team2PlayerName) {
            setTeam2Players([...team2Players, team2PlayerName]);
            setTeam2PlayerName('');
        }
    };

    const renderPlayerItem = ({ item }: { item: string }) => (
        <Text style={styles.playerItem}>{item}</Text>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register Players for {teamName}</Text>
            <Text style={styles.subTitle}>TEAM 1</Text>
            <TextInput
                style={styles.input}
                placeholder="Player Name"
                value={team1PlayerName}
                onChangeText={setTeam1PlayerName}
            />
            <Button title="Add Player" onPress={() => handleRegisterPlayer('team1')} />
            <FlatList
                data={team1Players}
                renderItem={renderPlayerItem}
                keyExtractor={(item, index) => `${item}-${index}`}
                ListEmptyComponent={<Text style={styles.noPlayersText}>No players added yet.</Text>}
            />
            <Text style={styles.subTitle}>TEAM 2</Text>
            <TextInput
                style={styles.input}
                placeholder="Player Name"
                value={team2PlayerName}
                onChangeText={setTeam2PlayerName}
            />
            <Button title="Add Player" onPress={() => handleRegisterPlayer('team2')} />
            <FlatList
                data={team2Players}
                renderItem={renderPlayerItem}
                keyExtractor={(item, index) => `${item}-${index}`}
                ListEmptyComponent={<Text style={styles.noPlayersText}>No players added yet.</Text>}
            />
            <Button title="Done" onPress={() => navigation.navigate('MatchDetails')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    subTitle: {
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center',
        
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    playerItem: {
        fontSize: 18,
        padding: 5,
    },
    noPlayersText: {
        fontSize: 16,
        textAlign: 'center',
        color: 'gray',
    },
});

export default PlayerRegistration;


