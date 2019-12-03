import React,{useState,useEffect} from 'react';
import Socketio from 'socket.io-client'
import { Alert,SafeAreaView,ScrollView,StyleSheet,Image,AsyncStorage } from 'react-native';

import logo from '../assets/logo.png';

import SpotList from '../Components/SpotList';

export default function List() {

    const [techs, setTechs] = useState([]);

    useEffect(() =>{

        AsyncStorage.getItem('user').then(user_id => {

            const socket = Socketio('http://192.168.1.7:8001', {

                query: { user_id }
            })

            socket.on('booking_response', booking => {

                alert.Alert(`Sua reserva em ${booking.spot.company} em ${booking.date} foi ${booking.approved ? 'APROVADO' : 'REJEITTADA'}`)
            })
        })
    },[]);
    useEffect(() =>{

        AsyncStorage.getItem('techs').then(storageTechs=>{

            const techsArray = storageTechs.split(',').map(tech => tech.trim());

            setTechs(techsArray);
        })
    },[])

    return (

        <SafeAreaView style={styles.contianer}>
            
            <Image source={logo} style={styles.logo}/>
            <ScrollView>

                {techs.map(tech => <SpotList key={tech} tech={tech} />)}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {

        flex:1
    },
    logo: {

        height: 32,
        resizeMode: "contain",
        alignSelf: "center",
        marginTop: 30
    }
});