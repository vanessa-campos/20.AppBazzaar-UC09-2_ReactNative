import React from 'react'
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import Produto from '../components/Produto'
import Colecao from '../components/Colecao'
import { header, topoCategoria, novidades, colecoes, barra } from '../styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faSearch, faHome, faShoppingBag, faStore, faHeart, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

export default function Home({navigation}) {

    const Novidades = [
        { id: 1, nome: 'Poncho', tipo: 'Casaco', preco: 'R$259,99', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDR8fHBvbmNob3xlbnwwfHx8fDE2NTUxNDg1OTc&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450' },
        { id: 2, nome: 'Camisa Longa', tipo: 'Blusas', preco: 'R$189,99', image: 'https://images.unsplash.com/photo-1618354691551-44de113f0164?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDU0fHxjbG90aGluZ3xlbnwwfHx8fDE2NTUxMTIzODE&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450' },
        { id: 3, nome: 'Casaco masculino', tipo: 'Casaco', preco: 'R$389,99', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDN8fGNvYXR8ZW58MHx8fHwxNjU1MTQxMzMw&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450g' }
    ]

    const Colecoes = [
        { id: 1, titulo: 'INVERNO', image: 'https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDE4fHx3aW50ZXJ8ZW58MHx8fHwxNjU1MTI3NjM0&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450', cor: '#DBDEF3' },
        { id: 2, titulo: 'PRIMAVERA', image: 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDE0fHxzcHJpbmd8ZW58MHx8fHwxNjU0Nzk4NjMz&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450', cor: '#F8D0CF' },
        { id: 3, titulo: 'VERÃO', image: 'https://images.unsplash.com/photo-1572246538688-3f326dca3951?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDV8fHN1bW1lcnxlbnwwfHx8fDE2NTQ5MjE5NzQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450', cor: '#F2EAC1' },
        { id: 4, titulo: 'OUTONO', image: 'https://images.unsplash.com/photo-1501973801540-537f08ccae7b?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDd8fGZhbGx8ZW58MHx8fHwxNjU1MDQxNzQx&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450', cor: '#A36153' }
    ]

    return(
        <View style={{flex: 1}}>

            <View style={header.container}>
                <TouchableOpacity onPress={()=> navigation.navigate('Destaque')} style={header.button}>
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
                <Text style={topoCategoria.titulo}>Novidades</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Novidades')}>
                    <Text style={topoCategoria.subtitulo}>Ver tudo</Text>
                </TouchableOpacity>
            </View>
                <View style={novidades.container1}>
                    <FlatList 
                        data={Novidades} 
                        renderItem={({item}) => (Produto({item}))}
                        key={(item) => item.id}
                        horizontal={true}
                    />      
                </View>
            <View style={topoCategoria.container}>
                <Text style={topoCategoria.titulo}>Coleções</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Colecoes')}>
                    <Text style={topoCategoria.subtitulo}>Ver tudo</Text>
                </TouchableOpacity>
            </View>
                <View style={colecoes.container}>
                    <FlatList 
                        data={Colecoes} 
                        renderItem={({item}) => Colecao({item})}
                        key={(item) => item.id}
                        horizontal={true}
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