import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { loja, topoCategoria, header, barra } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faSearch, faArrowLeftLong, faHome, faShoppingBag, faHeart, faStore } from '@fortawesome/free-solid-svg-icons'
import { ScrollView } from 'react-native-gesture-handler';

export default function SobreLoja({navigation}) {

    return (
        <View style={{flex: 1}}>

            <View style={header.container}>
                <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={header.button}>
                    {/* <FontAwesomeIcon icon={faBars} color={'#999'} size={15}/> */}
                    <FontAwesomeIcon icon={faArrowLeftLong} color={'#999'} size={15}/>                    
                </TouchableOpacity>
                <Text style={header.title}>BAZZAAR</Text>                
                <TouchableOpacity onPress={()=>{}} style={header.button}>
                    <FontAwesomeIcon icon={faSearch} color={'#999'} size={15}/>
                </TouchableOpacity>
            </View>

        <ScrollView>
            <View style={topoCategoria.container}>
                <Text style={topoCategoria.titulo}>Sobre a Loja</Text>
            </View>
            <View style={loja.container}>
                <Text style={loja.text2}>Localização</Text>
                <Text style={loja.text}>
                    Rua Eusébio, 10 - Centro, Cidade das Águas
                    Aberta de segunda a sexta das 10:00 às 21:00
                </Text>
                <Text style={loja.text2}>Aceitamos</Text>
                <Image style={loja.image} source={{ uri: 'https://loja.daten.com.br/image/catalog/forma%20de%20pagamento%20daten%20-%20logos-cartoes_.jpg' }} />
            </View>
        </ScrollView>

            <View style={barra.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={barra.iconeAtivo}>
                <FontAwesomeIcon icon={faHome} color={'black'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={barra.icone}>
                <FontAwesomeIcon icon={faShoppingBag} color={'#AAA9A9'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={barra.icone}>
                 <FontAwesomeIcon icon={faHeart} color={'#AAA9A9'} /> 
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SobreLoja')} style={barra.icone}>
                <FontAwesomeIcon icon={faStore} color={'#AAA9A9'} />
            </TouchableOpacity>
            </View>

        </View>
    )
}        