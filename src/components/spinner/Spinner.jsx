import { ActivityIndicator, View } from 'react-native'
import { styles } from './Spinner.style'
import React from 'react'
import { Colors } from '../../constants/Colors'

export const Spinner = () => {
    return (
        <View style={styles.spinnerContainer}>
            <ActivityIndicator size={180} color={Colors.one} />
        </View>
    )
}

export default Spinner


