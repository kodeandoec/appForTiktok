import React from 'react';
import { StyleSheet, View, Text, Pressable, Image } from 'react-native';

const HeaderComponent = ( {  urlImage, textUp, textDown, onPress } ) => {

    return(
        <View style={styles.container}>
            <Pressable
                onPress={ onPress }
                style={({ pressed }) => [
                    {
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 10,
                        opacity: pressed ? 0.8 : 1,
                        transform: [ { scale: pressed ? 0.98 : 1, } ],
                    },
                ]}
            >
                <Text> Atras </Text>
            </Pressable>

            <View style={{ flex: 1, flexDirection: 'row', overflow: 'hidden', alignItems: 'center'}}>
                <Image
                    source={{ uri: urlImage}}
                    resizeMode='cover'
                    style={styles.image}
                />
                <View>
                    <Text style={styles.textUp}>{textUp}</Text>
                    <Text style={[styles.textDown, { flex: 1 }]} numberOfLines={1}>{textDown}</Text>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 60,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#989dba',
        paddingHorizontal: '2.5%',
        paddingBottom: 10,
        borderBottomWidth: 0.9,
    },
    image:{
        width: 36,
        height: 36,
        borderRadius: 10,
        marginRight: 10
    },
    image:{
        width: 36,
        height: 36,
    },
    viewImage:{
        padding: 4,
        backgroundColor: '#333',
        borderRadius: 5
    },
    textUp:{
        fontFamily: 'OpenSans-Light',
        fontSize: 10,
        color: '#000',
        marginLeft: 5
    },
    textDown:{
        fontFamily: 'OpenSans-Medium',
        fontSize: 12,
        lineHeight: 14,
        color: '#000',
        marginLeft: 5
    },
})

export default HeaderComponent;