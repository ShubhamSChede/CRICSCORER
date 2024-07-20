import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { NavigationProp } from '@react-navigation/native';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const MatchDetails = ({ navigation }: { navigation: NavigationProp<any> }) => {
    const [overs, setOvers] = useState('');
    const [oversPerBowler, setOversPerBowler] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [ballType, setBallType] = useState('tennis');

    const handleDateChange = (event: any, selectedDate: Date | undefined) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const handleNext = () => {
        // Handle navigation to the next screen and pass the match details
        navigation.navigate('TossResult');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter Match Details</Text>
            <TextInput
                style={styles.input}
                placeholder="Overs"
                keyboardType="numeric"
                value={overs}
                onChangeText={setOvers}
            />
            <TextInput
                style={styles.input}
                placeholder="Overs per bowler"
                keyboardType="numeric"
                value={oversPerBowler}
                onChangeText={setOversPerBowler}
            />
            <TextInput
                style={styles.input}
                placeholder="Location"
                value={location}
                onChangeText={setLocation}
            />

            <View style={styles.pickerContainer}>
                <Text style={styles.pickerLabel}>Ball Type:</Text>
                <Picker
                    selectedValue={ballType}
                    style={styles.picker}
                    onValueChange={(itemValue) => setBallType(itemValue)}
                >
                    <Picker.Item label="Tennis" value="tennis" />
                    <Picker.Item label="Leather" value="leather" />
                    <Picker.Item label="Other" value="other" />

                </Picker>
            </View>

            <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.datePickerButton}>
                <Text style={styles.datePickerText}>{date.toDateString()}</Text>
            </TouchableOpacity>
            {showDatePicker && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                />
            )}
           <Button title="NEXT" onPress={() => navigation.navigate('TossResult')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    datePickerButton: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 20,
    },
    datePickerText: {
        color: '#000',
    },
    pickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    pickerLabel: {
        fontSize: 16,
        marginRight: 10,
    },
    picker: {
        flex: 1,
    },
    nextButton: {
        backgroundColor: '#007BFF',
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default MatchDetails;
