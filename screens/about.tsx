import {SafeAreaView,StatusBar,ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.htext}>අපි පිළිබඳව  </Text>
        </View>
        <View style={styles.about}>
            <Text style={styles.ptext}>
                මෙම app එක තුලින් ලංකාවේ සිටින සර්පයින් පිළිබඳව දැනුමක් ලබා දීම අරමුණ වේ . මෙය පරිශීලනය මගින් ලංකාවේ සිටින සර්පයින් වෙන් කර හඳුනා ගැනීමට මහජනයා හට මුලික දැනුමක් ලබා දීම අපගේ අරමුණයි . පරිසර සමතුලිතතාවයට බෙහෙවින් වැදගත් වන ,ජෛව විද්යතමකව වැදගත් වන හා වෛද්‍ය විද්‍යාත්මකව වැදගත් වන සර්පයින් නිරපරාදේ මහජනයාගේ  නොදැනුවත්කම තුලින් විනාශ වී යාම වැලැක්වීමට හැකිනම් අපට එය සතුටකි .  
            </Text>
        </View>
        <View>
            <View style={styles.header}>
            <Text style={styles.htext}>විශේෂ ස්තුතිය </Text>
            </View>
           
            <View style={styles.about}>
              <Text style={styles.ptext}>Sanoj Wijayasekara, රමේෂ් කරුණානායක ඇතුළු  Protect our snakes අපේ සර්පයින් රැකගමු facebook සමුහයට</Text> 
              <Text style={styles.ptext}>චායාරුප හා තොරතුරු  Protect our snakes අපේ සර්පයින් රැකගමු facebook සමුහයේ සාමාජිකයින්ගෙනි  </Text>
              
            </View>
        </View>
        
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default About

const styles = StyleSheet.create({
    container:{
        paddingTop: 20, 
    },
    header:{
        color:"black",
        marginTop:30,
        
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
        
    },
    htext: {
        fontSize:35,
        fontWeight:'bold'

    },
    ptext: {
        marginTop:20,
        marginLeft:20,
        marginRight:20,
        fontSize:15,
        fontWeight:"500",
        textAlign:"center"

    },
    about: {
        backgroundColor:"#CFCDC2",
        marginTop:20,
        marginRight:20,
        marginLeft:20,
        paddingBottom:20,
        borderRadius:20,
        
    },
    header2: {

    }
})