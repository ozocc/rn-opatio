import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from '../../common/colors';
import { Entypo } from '@expo/vector-icons';
import { images } from '../../common/images';
import { p } from '../../common/normalize';

export default class CultivosDetail extends React.Component {

    render() {
        return (
            <View style={styles.container}>

                <View style={{ marginBottom: p(12), backgroundColor: colors.GREEN2 }}>

                    <Image source={images.back} style={styles.back} />

                    <Text style={styles.header}>{'Agregar cultivos'}</Text>
                    <View style={styles.dropdown}>
                        <Text style={styles.text1}>{'Campo'}</Text>
                        <Entypo name={'chevron-down'} size={30} color={colors.WHITE} />
                    </View>
                    <View style={styles.dropdown}>
                        <Text style={styles.text1}>{'Lote'}</Text>
                        <Entypo name={'chevron-down'} size={30} color={colors.WHITE} />
                    </View>
                </View>

                <View style={{ paddingTop: p(16), backgroundColor: colors.WHITE, flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
                    <Text style={styles.text2}>{'Cultivo estival'}</Text>
                    <View style={styles.dropdown2}>
                        <Text style={styles.text2}>{'Sin asignar'}</Text>
                        <Entypo name={'chevron-down'} size={30} color={colors.GREY4} />
                    </View>
                    <Text style={[styles.text2, { marginTop: p(16)}]}>{'Cultivo invernal'}</Text>
                    <View style={styles.dropdown2}>
                        <Text style={styles.text2}>{'Sin asignar'}</Text>
                        <Entypo name={'chevron-down'} size={30} color={colors.GREY4} />
                    </View>

                    <View style={[styles.dropdown2, { marginTop: p(50)}]}>
                        <Text style={styles.text2}>{'Campaña'}</Text>
                        <Entypo name={'chevron-down'} size={30} color={colors.GREY4} />
                    </View>

                    <View style={{ backgroundColor: colors.WHITE, alignItems: 'center', paddingBottom: p(20), marginVertical: p(20) }}>
                        <View style={[styles.vertical, { width: p(180), height: p(40) }]}>
                            <Text style={{ color: colors.WHITE, fontWeight: '700' }}>{'GUARDAR CULTIVOS'}</Text>
                        </View>
                    </View>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.GREEN2,
    },
    back: {
        width: p(26),
        height: p(26),
        marginLeft: p(15),
        marginTop: p(22)
    },
    header: {
        textAlign: 'center',
        marginVertical: p(20),
        color: colors.WHITE,
        fontSize: p(32),
        fontWeight: '700',
    },
    text1: {
        color: colors.WHITE,
        fontWeight: '500',
        fontSize: p(19)
    },
    text2: {
        color: colors.BLACK,
        fontWeight: '700',
        fontSize: p(19)
    },
    dropdown: {
        height: p(50),
        paddingHorizontal: p(15),
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: colors.WHITE,
        borderWidth: 1,
        borderRadius: p(5),
        marginVertical: p(12),
        alignItems: 'center',
        marginHorizontal: p(55)
    },
    dropdown2: {
        height: p(40),
        width: p(170),
        paddingHorizontal: p(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: colors.GREY6,
        borderWidth: 1,
        borderRadius: p(5),
        marginVertical: p(12),
        alignItems: 'center',
        marginHorizontal: p(55)
    },
    vertical: {
        backgroundColor: colors.GREEN2,
        justifyContent: 'center',
        alignItems: 'center',
        width: p(142),
        height: p(29),
        borderRadius: p(3),
        elevation: 1,
        color: colors.WHITE
    },
})