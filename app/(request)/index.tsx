import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function MarkAttendance() {
  const [showPicker, setShowPicker] = useState(null);
  const [dateFrom, setDateFrom] = useState(new Date());
  const [monthOpen, setMonthOpen] = useState(false);
  const [monthValue, setMonthValue] = useState(null);
  const [months, setMonths] = useState([
    { label: "Leave Request", value: "leave request" },
    { label: "Late Request", value: "late request" },
  ]);

  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState('');


  const showDatepicker = (type) => {
    setShowPicker(type);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || dateFrom;
    setShowPicker(null);
    setDateFrom(currentDate);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: "https://s.mustakbil.com/employers/d14def2517b8427cacd10fd53c247e21.jpg",
              }}
              style={styles.reactLogo}
            />
          </View>

          <View style={styles.content}>
            <View>
              <Text style={styles.requestText}>Request Type</Text>
              <View style={styles.picker}>
                <DropDownPicker
                  open={monthOpen}
                  value={monthValue}
                  items={months}
                  setOpen={setMonthOpen}
                  setValue={setMonthValue}
                  setItems={setMonths}
                  placeholder="Select a month"
                  style={{ ...styles.dropdown, backgroundColor: monthOpen ? "#BBC4CC" : "#F3F3F3" }}
                  dropDownContainerStyle={styles.menu}
                  textStyle={{ fontSize: 16 }}
                />
              </View>
            </View>

            <View style={{ marginTop: 18, flex: 1 }}>
              <Text style={styles.requestText}>Request Type</Text>
              <TextInput
                style={styles.textArea}
                onChangeText={onChangeNumber}
                value={number}
                numberOfLines={4}
                placeholder="Description"
                keyboardType="string"
                textAlignVertical="top"
                selectionColor="#000"
              />
            </View>

            <View style={styles.DateBox}>
              <Text style={styles.dateDoxText}>From :</Text>
              <View style={styles.boxDatePickerContainer}>
                <Text style={styles.cornerText}>Date From</Text>
                <TouchableOpacity onPress={() => showDatepicker('from')} style={styles.boxDatePicker} activeOpacity={1}>
                  <Text style={styles.buttonText}>{dateFrom.toDateString()}</Text>
                  <MaterialIcons name="calendar-today" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>

            {showPicker && (
              <DateTimePicker
                testID="dateTimePicker"
                value={dateFrom}
                mode="date"
                is24Hour={true}
                display="spinner"
                onChange={onChange}
              />
            )}

            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  imageContainer: {
    alignItems: "center",
    width: "100%",
  },
  reactLogo: {
    height: 130,
    width: 200,
    marginBottom: 12,
  },
  content: {
    flex: 1,
    marginHorizontal: 24,
  },
  requestText: {
    marginBottom: 14,
    fontWeight: "bold",
    fontSize: 18,
  },
  picker: {
    zIndex: 1000,
  },
  dropdown: {
    backgroundColor: "#F3F3F3",
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 24,
  },
  menu: {
    borderTopWidth: 0,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  textArea: {
  paddingVertical: 8,
    flex: 1,
    fontSize: 16,
    width: '100%',
    marginBottom: 12,
    borderWidth: 2,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    textAlignVertical: "top",
  },
  DateBox: {
    paddingVertical: 6,
  },
  dateDoxText: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  boxDatePickerContainer: {
    borderWidth: 2,
    borderColor: '#808080',
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: 'relative',
  },
  cornerText: {
    position: 'absolute',
    top: -10,
    left: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    fontSize: 14,
    color: '#808080',
    fontWeight: 'bold',
  },
  boxDatePicker: {
    alignItems: 'center',
    justifyContent: "space-between",
    paddingVertical: 0,
    flexDirection: "row",
  },
  buttonText: {
    fontSize: 18,
    marginRight: 10,
  },
  submitButton: {
    backgroundColor: "#295A97",
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    marginTop: 20,
    marginBottom: 20,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
