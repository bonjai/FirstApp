//common-layouts.js
import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
export default function CLayouts() {
return (
<View style={styles.container}>
    <View style={styles.item1}>
        <center><Text style={styles.text}>Slider</Text></center>
    </View>
    <View style={styles.item2}>
        <center><Text style={styles.text}>Slider</Text></center>
    </View>
    <View style={styles.item3}>
        <center><Text style={styles.text}>Slider</Text></center>
    </View>
    <View style={styles.item4}>
        <center><Text style={styles.text}>Slider</Text></center>
    </View>
    <View style={styles.item5}>
        <center><Text style={styles.text}>Slider</Text></center>
    </View>
    <View style={styles.item6}>
        <center><Text style={styles.text}>Slider</Text></center>
    </View>
    <View style={styles.item7}>
        <center><Text style={styles.text}>Slider</Text></center>
    </View>
</View>
)
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: 'row', 
    flexWrap: 'wrap',
    
    },
    item1: {
    height: 200,
    width: '100%',
    backgroundColor: '#33CCCC',
    justifyContent: 'center', 
    },
    item2: {
        height: 100,
        width: '33.3%',
        backgroundColor: '#3333CC',
        justifyContent: 'center', 
        },
    item3: {
        height: 100,
        width: '33.3%',
        backgroundColor: '#CCFF33',
        justifyContent: 'center', 
        },
    item4: {
        height: 100,
        width: '33.3%',
        backgroundColor: '#B22222',
        justifyContent: 'center', 
        },
    item5: {
        height: 100,
        width: '33.3%',
        backgroundColor: '#993399',
        justifyContent: 'center', 
        },
    item6: {
        height: 100,
        width: '33.3%',
        backgroundColor: '#99FF33',
        justifyContent: 'center', 
        },
    item7: {
        height: 100,
        width: '33.3%',
        backgroundColor: '#FFA500',
        justifyContent: 'center', 
        },
    text: {color: '#ffff', fontSize: 20}
    })