import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { novidades, produto, header } from '../styles';
import Modal from 'react-native-modal'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeftLong, faShoppingBag} from '@fortawesome/free-solid-svg-icons';

export const ModalVenda = (props) => {

    const [getModal, setModal] = useState(false)
    const atualizarModal = () => { setModal(!getModal) }

    return (
        <View>
            <TouchableOpacity onPress={atualizarModal} style={novidades.produto}>
            <Image style={novidades.image} source={{uri: props.image2}}/>
            <View style={novidades.container2}> 
                <View style={novidades.container3}>                   
                    <Text style={novidades.titulo}>{props.nome2}</Text>
                    <Text style={novidades.subtitulo}>{props.preco2}</Text>
                </View>
                <TouchableOpacity style={novidades.icone}>
                    <FontAwesomeIcon icon={faHeart} color={'#999'} size={15}/>
                </TouchableOpacity>
            </View> 
            </TouchableOpacity>

            <Modal isVisible={getModal} style={{padding: -20, backgroundColor: '#FAF9F9'}}>
                <View style={header.container}>
                    <TouchableOpacity onPress={atualizarModal} style={header.button}>
                        <FontAwesomeIcon icon={faArrowLeftLong} color={'#999'} size={15}/>
                    </TouchableOpacity>
                    <Text style={header.title}>BAZZAAR</Text>                
                    <TouchableOpacity onPress={()=>{}} style={header.button}>
                        <FontAwesomeIcon icon={faShoppingBag} color={'#999'} size={15}/>
                    </TouchableOpacity>                    
                </View>
                <View>
                    <Text style={produto.titulo}>{props.nome2}</Text>
                    <Text style={produto.subtitulo}>{props.tipo2}</Text>
                </View>
                <View style={produto.container1}>
                    <Image style={produto.image} source={{uri: props.image2}}/>                    
                    <View style={produto.box1}>
                        <TouchableOpacity><Text style={produto.size}>P</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={produto.size}>M</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={produto.sizeAtivo}>G</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={produto.size}>GG</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <View style={produto.box2}>                    
                        <TouchableOpacity><View style={{borderColor:'#F6D5B6', borderRadius: 50, height: 30, width: 30, borderWidth: 5}}/></TouchableOpacity>
                        <TouchableOpacity><View style={{borderColor:'#D3D4DB', borderRadius: 50, height: 30, width: 30, borderWidth: 5}}/></TouchableOpacity>
                        <TouchableOpacity><View style={{borderColor:'#E2D8CC', borderRadius: 50, height: 30, width: 30, borderWidth: 5}}/></TouchableOpacity>
                        <TouchableOpacity><View style={{borderColor:'#F3A5A3', borderRadius: 50, height: 30, width: 30, borderWidth: 5}}/></TouchableOpacity>
                    </View>
                </View>
                <View style={produto.container2}> 
                    <View style={produto.container3}>                                 
                        <Text style={produto.titulo2}>Preço</Text>
                        <Text style={produto.subtitulo2}>{props.preco2}</Text> 
                    </View> 
                    <TouchableOpacity style={produto.button}>
                        <View style={produto.icone}>           
                        <FontAwesomeIcon icon={faShoppingBag} color={'#999'} size={15}/>
                        </View>
                        <Text style={produto.text}>Adicionar ao carrinho</Text>
                    </TouchableOpacity>
                </View> 
            </Modal>
        </View>
    )

}

export default function Produto({item}){
    return(
        <View>
            <ModalVenda nome2={item.nome} preco2={item.preco} tipo2={item.tipo} image2={item.image} />
        </View>
    )
}