import React, { useState, useEffect } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import CustomTable from "@/components/Table";
import { Link } from "expo-router";

export default function AttendanceReport() {
  const [dateFrom, setDateFrom] = useState(new Date());
  const [dateTo, setDateTo] = useState(new Date());
  const [showPicker, setShowPicker] = useState(null);

  const showDatepicker = (type: any) => {
    setShowPicker(type);
  };

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || dateFrom;
    setShowPicker(null);
    if (showPicker === "from") {
      setDateFrom(currentDate);
    } else if (showPicker === "to") {
      setDateTo(currentDate);
    }
  };

  const formatDate = (date: any) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Text style={styles.boxText}>Annual Leaves</Text>
          <Text style={styles.boxText}>
            <Text style={styles.danger}>5</Text> / -1
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>Sick Leaves</Text>
          <Text style={styles.boxText}>0 / 1</Text>
        </View>
      </View>
      <View style={{ ...styles.boxContainer, marginVertical: 14 }}>
        <View style={styles.DateBox}>
          <Text style={styles.dateDoxText}>From :</Text>
          <View style={styles.boxDatePickerContainer}>
            <Text style={styles.cornerText}>Date From</Text>
            <TouchableOpacity
              onPress={() => showDatepicker("from")}
              style={styles.boxDatePicker}
              activeOpacity={1}
            >
              <Text style={styles.buttonText}>{formatDate(dateFrom)}</Text>
              <MaterialIcons name="calendar-today" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.DateBox}>
          <Text style={styles.dateDoxText}>To :</Text>
          <View style={styles.boxDatePickerContainer}>
            <Text style={styles.cornerText}>Date To</Text>
            <TouchableOpacity
              onPress={() => showDatepicker("to")}
              style={styles.boxDatePicker}
              activeOpacity={1}
            >
              <Text style={styles.buttonText}>{formatDate(dateTo)}</Text>
              <MaterialIcons name="calendar-today" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.tableContainer}>
        <CustomTable />
      </View>
      {showPicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={showPicker === "from" ? dateFrom : dateTo}
          mode="date"
          is24Hour={true}
          display="spinner"
          onChange={onChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  boxContainer: {
    marginHorizontal: 18,
    flexDirection: "row",
    gap: 12,
    justifyContent: "space-between",
  },
  box: {
    borderWidth: 2,
    borderColor: "#20588F",
    borderRadius: 6,
    flex: 1,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  boxText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  danger: {
    color: "red",
  },
  DateBox: {
    flex: 1,
    paddingVertical: 6,
  },
  dateDoxText: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  boxDatePickerContainer: {
    borderWidth: 2,
    borderColor: "#808080",
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: "relative",
  },
  cornerText: {
    position: "absolute",
    top: -10,
    left: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 5,
    fontSize: 14,
    color: "#808080",
    fontWeight: "bold",
  },
  boxDatePicker: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 0,
    flexDirection: "row",
  },
  buttonText: {
    color: "#808080",
    fontSize: 16,
    paddingVertical: 4,
  },
  tableContainer: {
    flex: 1,
  },
});
