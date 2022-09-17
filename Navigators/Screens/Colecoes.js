import React from 'react';
import { View, TouchableOpacity, FlatList, Text, Image, VirtualizedList } from 'react-native';
import Colecao from '../components/Colecao'
import { colecoes, header, barra } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faSearch, faHome, faArrowLeftLong, faShoppingBag, faHeart, faStore } from '@fortawesome/free-solid-svg-icons'
import { ScrollView } from 'react-native-gesture-handler';

export default function Colecoes({navigation}) {

    // const Colecoes = [
    //     { id: 1, titulo: 'INVERNO', image: 'https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDE4fHx3aW50ZXJ8ZW58MHx8fHwxNjU1MTI3NjM0&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450', cor: '#DBDEF3' },
    //     { id: 2, titulo: 'PRIMAVERA', image: 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDE0fHxzcHJpbmd8ZW58MHx8fHwxNjU0Nzk4NjMz&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450', cor: '#F8D0CF' },
    //     { id: 3, titulo: 'VERÃO', image: 'https://images.unsplash.com/photo-1572246538688-3f326dca3951?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDV8fHN1bW1lcnxlbnwwfHx8fDE2NTQ5MjE5NzQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450', cor: '#F2EAC1' },
    //     { id: 4, titulo: 'OUTONO', image: 'https://images.unsplash.com/photo-1501973801540-537f08ccae7b?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDd8fGZhbGx8ZW58MHx8fHwxNjU1MDQxNzQx&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450', cor: '#A36153' }
    // ]

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
            <View style={{flexWrap: 'wrap', flexDirection: 'row', marginHorizontal: 70, marginVertical: 30, justifyContent: 'space-around'}}>

                <View style={{marginBottom: 30}}>                      
                <TouchableOpacity style={colecoes.button}>                
                    <Image style={colecoes.image} source={{uri: 'https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDE4fHx3aW50ZXJ8ZW58MHx8fHwxNjU1MTI3NjM0&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450'}}/>
                        <View style={{backgroundColor: '#DBDEF3'}}>
                            <Text style={colecoes.title}>INVERNO</Text>
                        </View>
                </TouchableOpacity>
                </View>
                <View>                      
                <TouchableOpacity style={colecoes.button}>                
                    <Image style={colecoes.image} source={{uri: 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDE0fHxzcHJpbmd8ZW58MHx8fHwxNjU0Nzk4NjMz&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450'}}/>
                        <View style={{backgroundColor: '#F8D0CF'}}>
                            <Text style={colecoes.title}>PRIMAVERA</Text>
                        </View>
                </TouchableOpacity>
                </View>
                <View>                      
                <TouchableOpacity style={colecoes.button}>                
                    <Image style={colecoes.image} source={{uri: 'https://images.unsplash.com/photo-1572246538688-3f326dca3951?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDV8fHN1bW1lcnxlbnwwfHx8fDE2NTQ5MjE5NzQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450'}}/>
                        <View style={{backgroundColor: '#F2EAC1'}}>
                            <Text style={colecoes.title}>VERÃO</Text>
                        </View>
                </TouchableOpacity>
                </View>
                <View>                      
                <TouchableOpacity style={colecoes.button}>                
                    <Image style={colecoes.image} source={{uri: 'https://images.unsplash.com/photo-1501973801540-537f08ccae7b?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDd8fGZhbGx8ZW58MHx8fHwxNjU1MDQxNzQx&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450'}}/>
                        <View style={{backgroundColor: '#A36153'}}>
                            <Text style={colecoes.title}>OUTONO</Text>
                        </View>
                </TouchableOpacity>
                </View>

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