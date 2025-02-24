import { StyleSheet } from 'react-native';
import { width, height, standartPadding } from '../../../utils/constants';
import { colors } from '../../../theme/colors';



export const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    listContainer: {
        paddingLeft: standartPadding, // Soldan boşluk bırak
        paddingRight: width * 0.3, // Sağ tarafa doğru genişleme efekti
    },
    featureItem: {
        backgroundColor: colors.white01,
        borderRadius: 10,
        padding: 16,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginRight: 5,
        width: ((width - (standartPadding * 2))) / 2 - 5, // Kategori genişliği
        // width: width / 2, // Kategori genişliği
        shadowColor: colors.black025,
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5, // Android için gölge
        // boxShadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    },
    selectedFeature: {
        //backgroundColor: '#4CAF50', // Seçili kategori için farklı renk
    },
    featureImage: {
        width: 36,
        height: 36,
        marginBottom: 5,
    },
    featureTitle: {
        color: colors.white,
        fontFamily: "Rubik-Medium",
        fontWeight: '500',
        fontSize: 20,
        lineHeight: 24,
        letterSpacing: 0.38,
        marginTop:5,
    },
    featureText: {
        color: colors.white07,
        fontFamily: "Rubik-Regular",
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 18,
        letterSpacing: -0.08,

    },
});