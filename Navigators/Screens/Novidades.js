import React from 'react';
import { View, TouchableOpacity, FlatList, Text, Image } from 'react-native';
import { header, novidades, barra } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faSearch, faHome, faArrowLeftLong, faShoppingBag, faHeart, faStore } from '@fortawesome/free-solid-svg-icons'
import Produto from '../components/Produto';
import { ScrollView } from 'react-native-gesture-handler';
import ModalVenda from '../components/Produto'
import Colecoes from './Colecoes';
export default function Novidades({navigation}) {

    const Novidades = [
        { id: 1, nome: 'Poncho', tipo: 'Casaco', preco: 'R$259,99', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDR8fHBvbmNob3xlbnwwfHx8fDE2NTUxNDg1OTc&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450' },
        { id: 2, nome: 'Camisa Longa', tipo: 'Blusas', preco: 'R$189,99', image: 'https://images.unsplash.com/photo-1618354691551-44de113f0164?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDU0fHxjbG90aGluZ3xlbnwwfHx8fDE2NTUxMTIzODE&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450' },
        { id: 3, nome: 'Casaco masculino', tipo: 'Casaco', preco: 'R$389,99', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDN8fGNvYXR8ZW58MHx8fHwxNjU1MTQxMzMw&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450g' }
    ]

    return (
        <View  style={{flex: 1}}>
            
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
        <View style={{flexWrap: 'wrap', flexDirection: 'row', marginHorizontal: 100, marginVertical: 30, justifyContent: 'space-around'}}>
            <FlatList 
                        data={Novidades} 
                        renderItem={({item}) => (Produto({item}))}
                        key={(item) => item.id}
                        // horizontal={true}
            />    
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