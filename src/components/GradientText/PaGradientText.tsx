import React from 'react';
import { View, StyleSheet, TextStyle } from 'react-native';
import Svg, { Text, Defs, LinearGradient, Stop } from 'react-native-svg';

interface GradientTextProps {
    text: string; 
    colors?: string[]; 
    style?: TextStyle; 
}

const GradientText: React.FC<GradientTextProps> = ({ text, colors = ["blue", "green"], style }) => {


    const fontSize = style?.fontSize || 10;
    const height = style?.height || 10; 
    const yPosition = height || 10; 
    return (
        <View style={styles.container}>
            <Svg height={style?.fontSize ? style.fontSize * 2 : 100} width="250">
                <Defs>
                    <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
                        <Stop offset="0%" stopColor={colors[0]} stopOpacity="1" />
                        <Stop offset="100%" stopColor={colors[1]} stopOpacity="1" />
                    </LinearGradient>
                </Defs>
                <Text
                    x="10"
                    y={19}
                    fontSize={style?.fontSize ? style.fontSize : 40}
                    fontWeight={style?.fontWeight ? style.fontWeight.toString() : "bold"}
                    fill="url(#grad)"
                    fontFamily={style?.fontFamily}
                >
                    {text}
                </Text>
            </Svg>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 20,
    },
});

export default GradientText;
