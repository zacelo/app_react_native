import { Pressable, Text, TextInput, View } from 'react-native'
import React from 'react'
import { styles } from './ScreenLogin.style'

const ScreenLogin = () => {
    return (
        <>
            <View style={styles.container}>
             
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email..."
                    />
                    <TextInput
                        style={styles.inputText}
                        placeholder="Contraseña..."
                    />
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Iniciar sesión</Text>
                    </Pressable>
                    <View style={styles.registerContainer}>
                        <Text style={styles.registerText}>Aún no estás registrado?</Text>
                        <Pressable >
                            <Text style={styles.buttonRegisterText}>Regístrate</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </>

    )
}

export default ScreenLogin

