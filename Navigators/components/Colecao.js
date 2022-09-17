import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { colecoes } from '../styles';


export default function Colecao({item}){
    return(
        <View>                      
            <TouchableOpacity style={colecoes.button}>                
                <Image style={colecoes.image} source={{uri: item.image}}/>
                    <View style={{backgroundColor: item.cor}}>
                        <Text style={colecoes.title}>{item.titulo}</Text>
                    </View>
            </TouchableOpacity>
        </View>
    )    
}