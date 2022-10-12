import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ScrollView , Dimensions  } from 'react-native';
const windowWidth = Dimensions.get('window').width;
console.log(windowWidth);
export default function App() {
  return (
    <>
    <View style={styles.container}> 
      <View style={styles.city}><Text  style={styles.cityName}>Slider</Text></View>
 
      <ScrollView style={styles.scrollView}>
        <Text style={styles.cityName}>step1.</Text>
        <ScrollView horizontal pagingEnabled style={styles.box1}>
          <View style={styles.day}>
            <Text style={styles.bText}>27˚</Text>
            <Text style={styles.desc}>sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.bText}>27˚</Text>
            <Text style={styles.desc}>sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.bText}>27˚</Text>
            <Text style={styles.desc}>sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.bText}>27˚</Text>
            <Text style={styles.desc}>sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.bText}>27˚</Text>
            <Text style={styles.desc}>sunny</Text>
          </View>
        </ScrollView>
        <Text style={styles.cityName}>step2.</Text>
        <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} style={styles.box2}>
          <View style={styles.day}>
            <Text style={styles.bText}>27˚</Text>
            <Text style={styles.desc}>sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.bText}>27˚</Text>
            <Text style={styles.desc}>sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.bText}>27˚</Text>
            <Text style={styles.desc}>sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.bText}>27˚</Text>
            <Text style={styles.desc}>sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.bText}>27˚</Text>
            <Text style={styles.desc}>sunny</Text>
          </View>
        </ScrollView>
        <Text style={styles.cityName}>step3.</Text>
        <ScrollView horizontal style={styles.box3}>
          <View style={styles.day2}>
            <Text style={styles.bText}>27˚</Text>
            <Text style={styles.desc}>sunny</Text>
          </View>
          <View style={styles.day2}>
            <Text style={styles.bText}>27˚</Text>
            <Text style={styles.desc}>sunny</Text>
          </View>
          <View style={styles.day2}>
            <Text style={styles.bText}>27˚</Text>
            <Text style={styles.desc}>sunny</Text>
          </View>
          <View style={styles.day2}>
            <Text style={styles.bText}>27˚</Text>
            <Text style={styles.desc}>sunny</Text>
          </View>
          <View style={styles.day2}>
            <Text style={styles.bText}>27˚</Text>
            <Text style={styles.desc}>sunny</Text>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  },
  scrollView:{
    // flex:1, =>
    paddingHorizontal: 20,
    backgroundColor:'orange',
  },
  box1:{
    backgroundColor:'tomato',
  },
  box2:{
    backgroundColor:'pink',
  },
  box3:{
    backgroundColor:'yellow',
  },
  day:{
    width:windowWidth - 40,
    alignItems:"center",
    justifyContent:'center',
  },
  day2:{
    flex:1,
    alignItems:"center",
    justifyContent:'center',
  },
  bText:{
    fontSize:130,
    fontWeight:'bold',
    lineHeight:140
  },
  desc:{
    fontSize:30,
    lineHeight:30
  }
});
