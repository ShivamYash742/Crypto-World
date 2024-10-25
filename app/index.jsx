import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function CryptoApp() {
  const [walletAmount, setWalletAmount] = useState(0);
  const [moneroAddress, setMoneroAddress] = useState('');
  const [mining, setMining] = useState(false);

  const refreshWalletAmount = () => {
    // Logic to refresh wallet amount
    setWalletAmount(Math.random() * 1000); // Dummy logic for demonstration
  };

  const startMining = () => {
    // Logic to start mining
    setMining(true);
  };

  const stopMining = () => {
    // Logic to stop mining
    setMining(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.walletText}>Wallet Amount: ${walletAmount.toFixed(2)}</Text>
      <TouchableOpacity style={styles.refreshButton} onPress={refreshWalletAmount}>
        <Text style={styles.buttonText}>Refresh Wallet</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Enter Monero Address"
        value={moneroAddress}
        onChangeText={setMoneroAddress}
      />
      <TouchableOpacity
        style={styles.miningButton}
        onPress={startMining}
        disabled={mining}
      >
        <Text style={styles.buttonText}>Start Mining</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.miningButton}
        onPress={stopMining}
        disabled={!mining}
      >
        <Text style={styles.buttonText}>Stop Mining</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  walletText: {
    fontSize: 24,
    marginBottom: 20,
  },
  refreshButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '100%',
  },
  miningButton: {
    backgroundColor: '#FF5722',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});