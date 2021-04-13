import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Animated  } from 'react-native';


const Animacion6 = () => {

    const [ animacion1 ] = useState( new Animated.Value(0) );
    const [ animacion2 ] = useState( new Animated.Value(-50) );

    useEffect( () =>{

        Animated.loop(
            Animated.sequence([
                Animated.timing(animacion2, {
                    toValue: -30,
                    duration: 0,
                    useNativeDriver: true
                }),
                Animated.timing(animacion1, {
                    toValue: 60,
                    duration: 500,
                    useNativeDriver: true
                }),
                Animated.timing(animacion2, {//objeto de configuracion
                    toValue: 30,
                    duration: 500,
                    useNativeDriver: true
                }),
                Animated.timing( animacion1, {
                    toValue:0, 
                    duration: 500,
                    useNativeDriver: true
                } ),
                Animated.timing(animacion2, {
                    toValue: -30,
                    duration: 500,
                    useNativeDriver: true
                })
            ])
        ).start()
       
    }, [] );

    const estilosAnimacion = {
        transform: [
            {translateY: animacion1},
            {translateX: animacion2}
        ]
    }

    return ( 

        <View style={{ alignItems: 'center' }}>
            <Animated.View style={[
                styles.caja,
                estilosAnimacion
            ]}>

            </Animated.View>
        </View>

     );
}

const styles = StyleSheet.create({

    caja:{
        width: 30,
        height: 30, 
        backgroundColor: 'red'
    }
})

 
export default Animacion6;


