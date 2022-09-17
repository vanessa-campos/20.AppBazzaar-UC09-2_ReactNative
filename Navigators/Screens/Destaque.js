import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { destaque, header } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

export default function Destaque({ navigation }) {

    let imageBackground = 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDN8fGZhc2hpb24lMjB3aW50ZXJ8ZW58MHx8fHwxNjU1MTc1NDgy&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450' ;

    return (
        <View>
            <ImageBackground source={{uri: imageBackground}} style={destaque.image} imageStyle={{opacity: 0.8}}>
                <View style={{ flex: 1 }}>
                    <View style={destaque.box1}>
                        <Text style={destaque.text}>17 Novidades 🔥</Text>
                    </View>
                </View>
                <View>
                    <Text style={destaque.textCenter}>Encare este inverno no seu melhor</Text>
                    <View style={destaque.container2}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}><Text style={destaque.text}>Pular</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Novidades')} style={destaque.box2}>
                            <View style={destaque.icone}>
                                <FontAwesomeIcon icon={faArrowRightLong} color={'black'} />
                            </View>
                            <Text style={destaque.text}>Começar</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={destaque.title}>BAZZAAR</Text>
                </View>
            </ImageBackground>
        </View>
    )
}