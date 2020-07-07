import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weahter from './weather';


const API_KEY = "1fbcba201229e52d52d93bebe71a227a";
export default class extends React.Component {
  state = {
    isLoading: true,
  }
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    this.setState({ isLoading: false, temp: data.main.temp, condition: data.weather[0].main, name: data.name });
  }
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
      
  };
  componentDidMount() {  
    this.getLocation();
  };
  render(){
    const { isLoading, temp, condition, name } = this.state;
    return isLoading ? <Loading /> : <Weahter temp={Math.round(temp)} condition={condition} name={name}/>;
  }
}
