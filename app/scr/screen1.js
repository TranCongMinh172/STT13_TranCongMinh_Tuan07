import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';




export default function Scr1({navigation}) {
  return (
    <View style = {styles.container}>
        <View>
            <Text style={{marginTop:100,fontSize:30, fontFamily:"arial", fontWeight:700}} >Welcome to Cafe world</Text>
        </View>
        <View >
            <Image source={require('../assets/image.png')} style={{width:250,height:80, marginTop:60}}></Image>
            <Image source={require('../assets/image (1).png')} style={{width:250,height:80,marginTop:40}}></Image>
            <Image source={require('../assets/image (2).png')} style={{width:250,height:80,marginTop:40}}></Image>
        </View>
        <View style={{marginTop:60,width:"80%", }} >
            <TouchableOpacity style={styles.btn} onPress={()=>{
                navigation.push("Scr2")
            }} >
                <Text style={{fontSize:16, fontFamily:"arial", fontWeight:700,color:"white"}}>GET STARTED</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
  },
  btn:{
    backgroundColor:"#00BDD6",
    height:45,
    borderRadius:8,
    alignItems:"center",
    justifyContent:"center"
  }
});
