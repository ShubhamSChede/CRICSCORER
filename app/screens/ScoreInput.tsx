import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Assuming you are using Expo. If not, use the appropriate icon library.
import { MaterialIcons } from '@expo/vector-icons';
const ScoreInput = () => {
    const [score, setScore] = useState(0);
    const [wickets, setWickets] = useState(0);
    const [overs, setOvers] = useState('0.0');
    const [currentRunRate, setCurrentRunRate] = useState(7.45);
    const [balls, setBalls] = useState(0);
    const [bowlerStats, setBowlerStats] = useState({ balls: 0, runs: 0, wickets: 0 });

    const handleScore = (runs: number) => {
        setScore(score + runs);
        updateBalls();
        updateBowlerStats(runs);
    };

    const handleWicket = () => {
        if (wickets < 10) {
            setWickets(wickets + 1);
            updateBalls();
            updateBowlerStats(0, true);
        } else {
            // Optionally, show a message or take some action if max wickets reached
            console.log("Maximum number of wickets reached.");
        }
    };

    const updateBalls = () => {
        let newBalls = balls + 1;
        let newOvers = parseInt(overs.split('.')[0]);
        let remainingBalls = parseInt(overs.split('.')[1]) + 1;
        if (remainingBalls > 5) {
            remainingBalls = 0;
            newOvers += 1;
        }
        setOvers(`${newOvers}.${remainingBalls}`);
        setBalls(newBalls);
    };

    const updateBowlerStats = (runs: number, isWicket: boolean = false) => {
        let newStats = { ...bowlerStats };
        newStats.balls += 1;
        newStats.runs += runs;
        if (isWicket) newStats.wickets += 1;
        setBowlerStats(newStats);
    };

    const renderScoreButton = (value: number | string) => (
        <TouchableOpacity style={styles.scoreButton} onPress={() => handleScore(typeof value === 'number' ? value : 0)}>
            <Text style={styles.buttonText}>{value}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
            <ImageBackground
                source={require('../../assets/images/bg1.png')}
                style={styles.header}
            >
                
                    <Text style={styles.teamName}>The Hotshots</Text>
                    <Text style={styles.score}>{`${score}/${wickets} (${overs}/20)`}</Text>
                    <Text style={styles.projectedScore}>CRR: {currentRunRate} Projected Score: {Math.round(currentRunRate * 20)}</Text>
              </ImageBackground> 
                <View style={styles.batsmanInfo}>
                    <Text style={styles.batsman}>
                        <MaterialIcons name="sports-cricket" size={16} color="black" /> Kunal  20(14)
                    </Text>
                    <Text style={styles.batsman}>
                        <MaterialIcons name="sports-cricket" size={16} color="black" /> Deep  7(3)
                    </Text>
                </View>
                <View style={styles.bowlerInfo}>
                    <Text style={styles.bowler}>Vishnu Chunara</Text>
                    <Text style={styles.bowlerStats}>{`${Math.floor(bowlerStats.balls / 6)}.${bowlerStats.balls % 6}-${bowlerStats.runs}-${bowlerStats.wickets}`}</Text>
                </View>
            </ScrollView>
            <View style={styles.keypadContainer}>
                <View style={styles.scoreButtons}>
                    {renderScoreButton(1)}
                    {renderScoreButton('BWL')}
                    {renderScoreButton(4)}
                    {renderScoreButton(6)}
                    {renderScoreButton(1)}
                </View>
                <View style={styles.lowerButtons}>
                    {renderScoreButton(0)}
                    {renderScoreButton(1)}
                    {renderScoreButton(2)}
                    <TouchableOpacity style={styles.undoButton} onPress={() => { /* Implement undo logic */ }}>
                        <Text style={styles.buttonText}>UNDO</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.lowerButtons}>
                    {renderScoreButton(3)}
                    {renderScoreButton('FOUR')}
                    {renderScoreButton(6)}
                    <TouchableOpacity style={styles.outButton} onPress={handleWicket}>
                        <Text style={styles.buttonText}>OUT</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.lowerButtons}>
                    {renderScoreButton('WD')}
                    {renderScoreButton('NB')}
                    {renderScoreButton('BYE')}
                    {renderScoreButton('LB')}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flexGrow: 1,
        justifyContent: 'flex-start',
    },
    header: {
        padding: 20,
        backgroundColor: '#333',
        alignContent:'center',
        height: 280,
        justifyContent: 'center', 
    },
    teamName: {
        fontSize: 22,
        color: '#fff',
        marginBottom: 5,
        textAlign:'center',
    },
    score: {
        fontSize: 32,
        color: '#fff',
        textAlign:'center',
    },
    projectedScore: {
        fontSize: 18,
        color: '#ccc',
        marginTop: 5,
        textAlign:'center',
    },
    batsmanInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#444',
        height: 60,
    },
    batsman: {
        color: '#fff',
        fontSize: 16,
    },
    bowlerInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#555',
        height: 60,
    },
    bowler: {
        color: '#fff',
        fontSize: 18,
    },
    bowlerStats: {
        color: '#fff',
        fontSize: 22,
    },
    keypadContainer: {
        backgroundColor: '#eee',
        borderTopWidth: 5,
        borderColor: '#ddd',
        padding: 3,
        height: 250,

    },
    scoreButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 3, // Remove padding
        paddingHorizontal: 3, // Remove padding
        margin: 0, // Remove margin
    },
    lowerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 3, // Remove padding
        paddingVertical: 3, // Remove padding
        margin: 0, // Remove margin
    },
    
    scoreButton: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 5,
        flex: 1, // Make sure buttons expand to fill available space
        alignItems: 'center',
        margin: 0, // Remove margin
    },
    undoButton: {
        backgroundColor: '#ddd',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        flex: 1,
        margin: 0, // Remove margin
    },
    outButton: {
        backgroundColor: '#f44',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        flex: 1,
        margin: 0, // Remove margin
    },
    
    buttonText: {
        fontSize: 18,
    },
});

export default ScoreInput;
