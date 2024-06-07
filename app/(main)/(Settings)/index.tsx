import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';

const Settings = () => {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
  const [isLocationEnabled, setIsLocationEnabled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const toggleNotifications = () => setIsNotificationsEnabled(previousState => !previousState);
  const toggleDarkMode = () => setIsDarkModeEnabled(previousState => !previousState);
  const toggleLocation = () => setIsLocationEnabled(previousState => !previousState);

  const changeLanguage = (language:any) => {
    setSelectedLanguage(language);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Account Settings</Text>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Change Password</Text>
        <Button title="Change" color={"#175E96"} onPress={() => {}} />
      </View>

      <Text style={styles.heading}>Notification Settings</Text>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Enable Notifications</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#175E96' }}
          thumbColor={isNotificationsEnabled ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleNotifications}
          value={isNotificationsEnabled}
        />
      </View>

      <Text style={styles.heading}>App Preferences</Text>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Dark Mode</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#175E96' }}
          thumbColor={isDarkModeEnabled ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleDarkMode}
          value={isDarkModeEnabled}
        />
      </View>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Enable Location</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#175E96' }}
          thumbColor={isLocationEnabled ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleLocation}
          value={isLocationEnabled}
        />
      </View>
      <Text style={styles.heading}>Language Preferences</Text>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Select Language</Text>
        <TouchableOpacity onPress={() => changeLanguage('English')} style={[styles.languageButton, selectedLanguage === 'English' && styles.languageButtonSelected]}>
          <Text style={styles.languageButtonText}>English</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeLanguage('Spanish')} style={[styles.languageButton, selectedLanguage === 'Spanish' && styles.languageButtonSelected]}>
          <Text style={styles.languageButtonText}>Spanish</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeLanguage('French')} style={[styles.languageButton, selectedLanguage === 'French' && styles.languageButtonSelected]}>
          <Text style={styles.languageButtonText}>French</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.heading}>Privacy Settings</Text>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Manage Privacy</Text>
        <Button title="Manage" color={"#175E96"} onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  settingText: {
    fontSize: 14,
  },
  languageButton: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginVertical: 5,
  },
  languageButtonSelected: {
    backgroundColor: '#175E96',
  },
  languageButtonText: {
    color: '#000',
  },
  languageButtonTextSelected: {
    color: '#fff',
  },
});

export default Settings;
