import React, { useState,  } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, Animated } from 'react-native'

const Animacion5 = () => {

    const [ animacion ] = useState( new Animated.Value(1) );

    const presionarBtn = () =>{

        Animated.spring( animacion, {
            toValue: .8,
            useNativeDriver: true
        } ).start();

    }

    const soltartBtn = () =>{
        Animated.spring( animacion, {
            toValue: 1,
            useNativeDriver: true,
            friction: 4, //controla el rebote
            tension: 80
        } ).start()
    }

    const estiloAnimacion = {
        transform: [{ scale: animacion }]
    }

    return ( 

        <View style={styles.contenedor}>
            <TouchableWithoutFeedback
                onPressIn={ () => presionarBtn() }
                onPressOut={ () => soltartBtn() }
            >
                <Animated.View style={[styles.btn, estiloAnimacion]}>
                    <Text
                        style={styles.texto}
                    >Iniciar sesion</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>


     );
}


const styles = StyleSheet.create({

    contenedor:{
        alignItems: 'center'
    }, 
    btn:{
        backgroundColor: 'red',
        width: 280,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto:{
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 28
    }

})
 
export default Animacion5;