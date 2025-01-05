import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Link } from 'expo-router'; // Import Link từ expo-router

const LandingPage: React.FC = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://example.com/background-image.jpg' }} // Thay bằng link ảnh hoặc require local
      style={styles.container}
    >
      {/* Title and Description */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Title Here</Text>
        <Text style={styles.description}>Find and order</Text>
        <Text style={styles.description}>high-quality</Text>
        <Text style={styles.description}>fruits & Vegetables</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <Link href="/Login" style={styles.button}>
          <Text style={styles.buttonText}>Log in</Text>
        </Link>
        <Link href="/SignUp" style={styles.button}>
          <Text style={styles.buttonText}>Sign up</Text>
        </Link>
      </View>
    </ImageBackground>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    position: 'absolute',
    top: '20%',
    width: '90%',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  description: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#555',
    textAlign: 'left',
  },
  buttonContainer: {
    position: 'absolute',
    top: '70%',
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4caf50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center', // Đảm bảo chữ căn giữa trong button
  },
});
