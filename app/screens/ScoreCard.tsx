import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const totalScore = 160; // Example total score
const totalOvers = 20; // Example total overs

const ScoreCard = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Scorecard</Text>

            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total Score: {totalScore}</Text>
                <Text style={styles.totalText}>Total Overs: {totalOvers}</Text>
            </View>
            <Text style={styles.sectionTitle}>INNINGS 01</Text>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Batsmen</Text>
                <View style={styles.tableHeader}>
                    <Text style={styles.tableHeaderText}>Name</Text>
                    <Text style={styles.tableHeaderText}>R</Text>
                    <Text style={styles.tableHeaderText}>B</Text>
                    <Text style={styles.tableHeaderText}>4s</Text>
                    <Text style={styles.tableHeaderText}>6s</Text>
                    <Text style={styles.tableHeaderText}>SR</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableRowText}>Player 1</Text>
                    <Text style={styles.tableRowText}>30</Text>
                    <Text style={styles.tableRowText}>25</Text>
                    <Text style={styles.tableRowText}>4</Text>
                    <Text style={styles.tableRowText}>1</Text>
                    <Text style={styles.tableRowText}>120.0</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableRowText}>Player 2</Text>
                    <Text style={styles.tableRowText}>30</Text>
                    <Text style={styles.tableRowText}>25</Text>
                    <Text style={styles.tableRowText}>4</Text>
                    <Text style={styles.tableRowText}>1</Text>
                    <Text style={styles.tableRowText}>120.0</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableRowText}>Player 3</Text>
                    <Text style={styles.tableRowText}>30</Text>
                    <Text style={styles.tableRowText}>25</Text>
                    <Text style={styles.tableRowText}>4</Text>
                    <Text style={styles.tableRowText}>1</Text>
                    <Text style={styles.tableRowText}>120.0</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableRowText}>Player 4</Text>
                    <Text style={styles.tableRowText}>30</Text>
                    <Text style={styles.tableRowText}>25</Text>
                    <Text style={styles.tableRowText}>4</Text>
                    <Text style={styles.tableRowText}>1</Text>
                    <Text style={styles.tableRowText}>120.0</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableRowText}>Player 5</Text>
                    <Text style={styles.tableRowText}>30</Text>
                    <Text style={styles.tableRowText}>25</Text>
                    <Text style={styles.tableRowText}>4</Text>
                    <Text style={styles.tableRowText}>1</Text>
                    <Text style={styles.tableRowText}>120.0</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableRowText}>Player 6</Text>
                    <Text style={styles.tableRowText}>30</Text>
                    <Text style={styles.tableRowText}>25</Text>
                    <Text style={styles.tableRowText}>4</Text>
                    <Text style={styles.tableRowText}>1</Text>
                    <Text style={styles.tableRowText}>120.0</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableRowText}>Player 7</Text>
                    <Text style={styles.tableRowText}>30</Text>
                    <Text style={styles.tableRowText}>25</Text>
                    <Text style={styles.tableRowText}>4</Text>
                    <Text style={styles.tableRowText}>1</Text>
                    <Text style={styles.tableRowText}>120.0</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableRowText}>Player 8</Text>
                    <Text style={styles.tableRowText}>30</Text>
                    <Text style={styles.tableRowText}>25</Text>
                    <Text style={styles.tableRowText}>4</Text>
                    <Text style={styles.tableRowText}>1</Text>
                    <Text style={styles.tableRowText}>120.0</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableRowText}>Player 9</Text>
                    <Text style={styles.tableRowText}>30</Text>
                    <Text style={styles.tableRowText}>25</Text>
                    <Text style={styles.tableRowText}>4</Text>
                    <Text style={styles.tableRowText}>1</Text>
                    <Text style={styles.tableRowText}>120.0</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableRowText}>Player 10</Text>
                    <Text style={styles.tableRowText}>30</Text>
                    <Text style={styles.tableRowText}>25</Text>
                    <Text style={styles.tableRowText}>4</Text>
                    <Text style={styles.tableRowText}>1</Text>
                    <Text style={styles.tableRowText}>120.0</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableRowText}>Player 11</Text>
                    <Text style={styles.tableRowText}>30</Text>
                    <Text style={styles.tableRowText}>25</Text>
                    <Text style={styles.tableRowText}>4</Text>
                    <Text style={styles.tableRowText}>1</Text>
                    <Text style={styles.tableRowText}>120.0</Text>
                </View>
                {/* Add more player rows as needed */}
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Bowlers</Text>
                <View style={styles.tableHeader}>
                    <Text style={styles.tableHeaderText}>Name</Text>
                    <Text style={styles.tableHeaderText}>O</Text>
                    <Text style={styles.tableHeaderText}>M</Text>
                    <Text style={styles.tableHeaderText}>R</Text>
                    <Text style={styles.tableHeaderText}>W</Text>
                    <Text style={styles.tableHeaderText}>Econ</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableRowText}>Bowler 1</Text>
                    <Text style={styles.tableRowText}>4</Text>
                    <Text style={styles.tableRowText}>0</Text>
                    <Text style={styles.tableRowText}>20</Text>
                    <Text style={styles.tableRowText}>2</Text>
                    <Text style={styles.tableRowText}>5.0</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableRowText}>Bowler 2</Text>
                    <Text style={styles.tableRowText}>4</Text>
                    <Text style={styles.tableRowText}>0</Text>
                    <Text style={styles.tableRowText}>20</Text>
                    <Text style={styles.tableRowText}>2</Text>
                    <Text style={styles.tableRowText}>5.0</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableRowText}>Bowler 3</Text>
                    <Text style={styles.tableRowText}>4</Text>
                    <Text style={styles.tableRowText}>0</Text>
                    <Text style={styles.tableRowText}>20</Text>
                    <Text style={styles.tableRowText}>2</Text>
                    <Text style={styles.tableRowText}>5.0</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableRowText}>Bowler 4</Text>
                    <Text style={styles.tableRowText}>4</Text>
                    <Text style={styles.tableRowText}>0</Text>
                    <Text style={styles.tableRowText}>20</Text>
                    <Text style={styles.tableRowText}>2</Text>
                    <Text style={styles.tableRowText}>5.0</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableRowText}>Bowler 5</Text>
                    <Text style={styles.tableRowText}>4</Text>
                    <Text style={styles.tableRowText}>0</Text>
                    <Text style={styles.tableRowText}>20</Text>
                    <Text style={styles.tableRowText}>2</Text>
                    <Text style={styles.tableRowText}>5.0</Text>
                </View>
                {/* Add more bowler rows as needed */}
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Extras</Text>
                <View style={styles.tableRow}>
                    <Text style={styles.tableRowText}>Wides: 5</Text>
                    <Text style={styles.tableRowText}>No Balls: 2</Text>
                    <Text style={styles.tableRowText}>Byes: 1</Text>
                    <Text style={styles.tableRowText}>Leg Byes: 3</Text>
                </View>
            </View>
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total Score: {totalScore}</Text>
                <Text style={styles.totalText}>Total Overs: {totalOvers}</Text>
            </View>
            <Text style={styles.sectionTitle}>INNINGS 02</Text>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Batsmen</Text>
                <View style={styles.tableHeader}>
                    <Text style={styles.tableHeaderText}>Name</Text>
                    <Text style={styles.tableHeaderText}>R</Text>
                    <Text style={styles.tableHeaderText}>B</Text>
                    <Text style={styles.tableHeaderText}>4s</Text>
                    <Text style={styles.tableHeaderText}>6s</Text>
                    <Text style={styles.tableHeaderText}>SR</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableRowText}>Player 1</Text>
                    <Text style={styles.tableRowText}>30</Text>
                    <Text style={styles.tableRowText}>25</Text>
                    <Text style={styles.tableRowText}>4</Text>
                    <Text style={styles.tableRowText}>1</Text>
                    <Text style={styles.tableRowText}>120.0</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableRowText}>Player 2</Text>
                    <Text style={styles.tableRowText}>30</Text>
                    <Text style={styles.tableRowText}>25</Text>
                    <Text style={styles.tableRowText}>4</Text>
                    <Text style={styles.tableRowText}>1</Text>
                    <Text style={styles.tableRowText}>120.0</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableRowText}>Player 3</Text>
                    <Text style={styles.tableRowText}>30</Text>
                    <Text style={styles.tableRowText}>25</Text>
                    <Text style={styles.tableRowText}>4</Text>
                    <Text style={styles.tableRowText}>1</Text>
                    <Text style={styles.tableRowText}>120.0</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableRowText}>Player 4</Text>
                    <Text style={styles.tableRowText}>30</Text>
                    <Text style={styles.tableRowText}>25</Text>
                    <Text style={styles.tableRowText}>4</Text>
                    <Text style={styles.tableRowText}>1</Text>
                    <Text style={styles.tableRowText}>120.0</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableRowText}>Player 5</Text>
                    <Text style={styles.tableRowText}>30</Text>
                    <Text style={styles.tableRowText}>25</Text>
                    <Text style={styles.tableRowText}>4</Text>
                    <Text style={styles.tableRowText}>1</Text>
                    <Text style={styles.tableRowText}>120.0</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableRowText}>Player 6</Text>
                    <Text style={styles.tableRowText}>30</Text>
                    <Text style={styles.tableRowText}>25</Text>
                    <Text style={styles.tableRowText}>4</Text>
                    <Text style={styles.tableRowText}>1</Text>
                    <Text style={styles.tableRowText}>120.0</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableRowText}>Player 7</Text>
                    <Text style={styles.tableRowText}>30</Text>
                    <Text style={styles.tableRowText}>25</Text>
                    <Text style={styles.tableRowText}>4</Text>
                    <Text style={styles.tableRowText}>1</Text>
                    <Text style={styles.tableRowText}>120.0</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableRowText}>Player 8</Text>
                    <Text style={styles.tableRowText}>30</Text>
                    <Text style={styles.tableRowText}>25</Text>
                    <Text style={styles.tableRowText}>4</Text>
                    <Text style={styles.tableRowText}>1</Text>
                    <Text style={styles.tableRowText}>120.0</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableRowText}>Player 9</Text>
                    <Text style={styles.tableRowText}>30</Text>
                    <Text style={styles.tableRowText}>25</Text>
                    <Text style={styles.tableRowText}>4</Text>
                    <Text style={styles.tableRowText}>1</Text>
                    <Text style={styles.tableRowText}>120.0</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableRowText}>Player 10</Text>
                    <Text style={styles.tableRowText}>30</Text>
                    <Text style={styles.tableRowText}>25</Text>
                    <Text style={styles.tableRowText}>4</Text>
                    <Text style={styles.tableRowText}>1</Text>
                    <Text style={styles.tableRowText}>120.0</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableRowText}>Player 11</Text>
                    <Text style={styles.tableRowText}>30</Text>
                    <Text style={styles.tableRowText}>25</Text>
                    <Text style={styles.tableRowText}>4</Text>
                    <Text style={styles.tableRowText}>1</Text>
                    <Text style={styles.tableRowText}>120.0</Text>
                </View>
                {/* Add more player rows as needed */}
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Bowlers</Text>
                <View style={styles.tableHeader}>
                    <Text style={styles.tableHeaderText}>Name</Text>
                    <Text style={styles.tableHeaderText}>O</Text>
                    <Text style={styles.tableHeaderText}>M</Text>
                    <Text style={styles.tableHeaderText}>R</Text>
                    <Text style={styles.tableHeaderText}>W</Text>
                    <Text style={styles.tableHeaderText}>Econ</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableRowText}>Bowler 1</Text>
                    <Text style={styles.tableRowText}>4</Text>
                    <Text style={styles.tableRowText}>0</Text>
                    <Text style={styles.tableRowText}>20</Text>
                    <Text style={styles.tableRowText}>2</Text>
                    <Text style={styles.tableRowText}>5.0</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableRowText}>Bowler 2</Text>
                    <Text style={styles.tableRowText}>4</Text>
                    <Text style={styles.tableRowText}>0</Text>
                    <Text style={styles.tableRowText}>20</Text>
                    <Text style={styles.tableRowText}>2</Text>
                    <Text style={styles.tableRowText}>5.0</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableRowText}>Bowler 3</Text>
                    <Text style={styles.tableRowText}>4</Text>
                    <Text style={styles.tableRowText}>0</Text>
                    <Text style={styles.tableRowText}>20</Text>
                    <Text style={styles.tableRowText}>2</Text>
                    <Text style={styles.tableRowText}>5.0</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableRowText}>Bowler 4</Text>
                    <Text style={styles.tableRowText}>4</Text>
                    <Text style={styles.tableRowText}>0</Text>
                    <Text style={styles.tableRowText}>20</Text>
                    <Text style={styles.tableRowText}>2</Text>
                    <Text style={styles.tableRowText}>5.0</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableRowText}>Bowler 5</Text>
                    <Text style={styles.tableRowText}>4</Text>
                    <Text style={styles.tableRowText}>0</Text>
                    <Text style={styles.tableRowText}>20</Text>
                    <Text style={styles.tableRowText}>2</Text>
                    <Text style={styles.tableRowText}>5.0</Text>
                </View>
                {/* Add more bowler rows as needed */}
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Extras</Text>
                <View style={styles.tableRow}>
                    <Text style={styles.tableRowText}>Wides: 5</Text>
                    <Text style={styles.tableRowText}>No Balls: 2</Text>
                    <Text style={styles.tableRowText}>Byes: 1</Text>
                    <Text style={styles.tableRowText}>Leg Byes: 3</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ddd',
        padding: 10,
        borderRadius: 5,
    },
    tableHeaderText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
   
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    tableRowText: {
        fontSize: 16,
    },
    totalText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    totalContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
});

export default ScoreCard;
