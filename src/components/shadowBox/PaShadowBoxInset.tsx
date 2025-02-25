import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface PaShadowBoxInsetProps {
    children: ReactNode;
}

const PaShadowBoxInset: React.FC<PaShadowBoxInsetProps> = ({ children }) => {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['rgba(0, 0, 0, 0.01)', 'rgba(0, 0, 0, 0.05)']}
                style={styles.insetShadow}
            >
                {children}
            </LinearGradient>
        </View>
    );
};

export default PaShadowBoxInset;

const styles = StyleSheet.create({
    container: {
        width: 65,
        height: 65,
        borderRadius:65,
        backgroundColor: 'white',
        overflow: 'hidden',
    },
    insetShadow: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
});
