import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = "1fbcba201229e52d52d93bebe71a227a";
export default class extends React.Component {
  state = {
    isLoading: true,
  }
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    console.log("data" , data);
  }
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      console.log('location: ', latitude, longitude);
      this.getWeather(latitude, longitude);
      this.setState({ isLoading: false })
    } catch (error) {
      Alert.alert("Can't Find!");
    }
      
  };
  componentDidMount() {  
    this.getLocation();
  };
  render(){
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}
