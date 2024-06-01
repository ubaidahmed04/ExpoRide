import React, {useState, useEffect} from 'react'
import { Image, StyleSheet, Platform, Text, View } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import DropDownPicker from 'react-native-dropdown-picker';

export default function PaySlip() {

  const [monthOpen, setMonthOpen] = useState(false);
  const [monthValue, setMonthValue] = useState(null);
  const [months, setMonths] = useState([]);
  const [yearOpen, setYearOpen] = useState(false);
  const [yearValue, setYearValue] = useState(null);
  const [years, setYears] = useState([]);

  useEffect(() => {
    // Generate an array of month names
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Mapping the month names to the format required by DropDownPicker
    const monthItems = monthNames.map((month) => ({
      label: month,
      value: month.toLowerCase(),
    }));

    // Set months in state
    setMonths(monthItems);

    // Generate an array of years from current year to 1900
    const currentYear = 2030;
    const yearRange = Array.from({ length: currentYear - 2018 + 1 }, (_, i) => currentYear - i);

    const yearItems = yearRange.map((year) => ({
      label: year.toString(),
      value: year.toString(),
    }));

    // Set years in state
    setYears(yearItems);
  }, []);

  return (

<View style={styles.container}>
<View style={styles.dropdownContainer}>
    <View   style={styles.picker}>
      <DropDownPicker
        open={monthOpen}
        value={monthValue}
        items={months}
        setOpen={setMonthOpen}
        setValue={setMonthValue}
        setItems={setMonths}
        placeholder="Select a month"
        style={{...styles.dropdown, backgroundColor: monthOpen ? "#BBC4CC" : "#F3F3F3"}}
        dropDownContainerStyle={styles.menu}
      />
    </View>
    <View style={styles.picker}>
      <DropDownPicker
        open={yearOpen}
        value={yearValue}
        items={years}
        setOpen={setYearOpen}
        setValue={setYearValue}
        setItems={setYears}
        placeholder="Select a year"
        style={{...styles.dropdown, backgroundColor: yearOpen ? "#BBC4CC" : "#F3F3F3"}}
        dropDownContainerStyle={styles.menu}
      />
    </View>
</View>

<View style={styles.content}>
    <Text style={styles.noData}>No details Found</Text>
</View>

</View>


  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
   backgroundColor: "#F3F3F3",
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  dropdownContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 26,
    marginVertical: 10,
    marginHorizontal: 26
  },
  picker: {
    flex: 1,
  },
  dropdown: {
      backgroundColor: "#F3F3F3",
      borderWidth: 1,
      borderColor: "#ccc",
  },
  menu: {
  borderTopWidth: 0,
      borderWidth: 1,
      borderColor: "#ccc",
       zIndex: 99,
  },
  content: {
  flex: 1,
  marginHorizontal: 26,
  },
  noData: {
  textAlign: "center",
  fontWeight: "bold",
  fontSize: 20,
  },
});

