import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { useState } from 'react';
import * as Location from 'expo-location';
import { StyleSheet, Text, View ,ScrollView , Dimensions ,ActivityIndicator} from 'react-native';
import { Fontisto } from '@expo/vector-icons'; 
const windowWidth = Dimensions.get('window').width;

export default function App() {
  const [city , setCity] = useState('Loding...');
  const [ok , setOk] = useState(true);
  const [weather , setWeather] = useState([]);
  
  const API_KEY = 'd4ec3fd563712d1a6d4a6d4dc07379af';
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const icon ={
    Clear:'day-sunny',
    Clouds:'cloudy',
    Snow:'snow',
    Rain:'rain',
    Thunderstorm:'lightnings',
  }
  const cityValue = async () => {
    const {granted} = await Location.requestForegroundPermissionsAsync();
    if(!granted){
      setOk(false);
    }
    const {coords:{latitude,longitude}} = await Location.getCurrentPositionAsync({Accuracy:5});
    const location = await Location.reverseGeocodeAsync({latitude,longitude},{ useGoogleMaps:false});
    setCity(`${location[0].region} ${location[0].district}`);
     const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`);
  
    const json = await response.json();
    setWeather(json.daily);
  };
  useEffect(()=>{
    cityValue();
  },[]);
  return (
    <>
   {ok ? <View style={styles.container}> 
      <View style={styles.city}><Text  style={styles.cityName}>{city}</Text></View>
        <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
          {weather.length === 0 ? 
          <View style={styles.day}>
              <ActivityIndicator size={100} color="#fff" />
          </View>:
          weather.map((data,index) =>
          <View key={index} style={{...styles.day,padding:20}}>
            <Text style={{...styles.desc, fontSize:14}}>
              {(new Date(data.dt*1000)).getFullYear()}/
              {(new Date(data.dt*1000)).getMonth()+1}/
              {(new Date(data.dt*1000)).getDate()}
              ({week[(new Date(data.dt*1000)).getDay()]})
            </Text>
            <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
              <Text style={styles.bText}>{data.temp.day.toFixed(1)}</Text>
              <Fontisto name={icon[data.weather[0].main]} size={24} color="#fff" style={{marginTop:20, fontSize:50}}/>
            </View>
            <Text style={styles.desc}>{data.weather[0].main}</Text>
            <Text style={{...styles.desc,fontSize:14}}>{data.weather[0].description}</Text>
          </View>)}
        </ScrollView>
    </View> : <Text>Loding...</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    
  },
  city:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  cityName:{
    fontSize:30,
    fontWeight:'bold',
    paddingTop:10,
    paddingBottom:5,
    color:'#fff',
  },
  scrollView:{
  },
  box1:{
    backgroundColor:'tomato',
  },
  day:{
    width:windowWidth,
  },
  bText:{
    fontSize:120,
    fontWeight:'bold',
    color:'#fff',
  },
  desc:{
    fontSize:30,
    color:'#fff',
  }
});
