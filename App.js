import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ScrollView , Dimensions  } from 'react-native';
const windowWidth = Dimensions.get('window').width;
console.log(windowWidth);
export default function App() {
  return (
    <>
    <View style={styles.container}> 
      <View style={styles.city}><Text  style={styles.cityName}>날씨</Text></View>
        <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} style={styles.box1}>
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
  day:{
    width:windowWidth,
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
