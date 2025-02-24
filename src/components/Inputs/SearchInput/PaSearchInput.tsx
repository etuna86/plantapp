import React from 'react';
import { View, TextInput, Dimensions } from 'react-native';
import SearchIcon from '../../../assets/icons/SearchIcon.svg'; // SVG ikonu içe aktar
import { styles } from './styles';
import { colors } from '../../../theme/colors';

interface SearchInputProps {
    placeholder?: string;
    value: string;
    onChangeText: (text: string) => void;
}

const PaSearchInput: React.FC<SearchInputProps> = ({ placeholder = "Search...", value, onChangeText }) => {
    return (
        <View style={styles.container}>
            <SearchIcon width={20} height={20} fill={colors.grey} style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={colors.grey}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};


export default PaSearchInput;
