import React from "react";
import { StyleSheet } from "react-native";

const header = StyleSheet.create({
        container:{
            height: 35, flexDirection: 'row', justifyContent: 'space-between',  
            marginVertical: 25, marginHorizontal: 20, flex: 0
        },
        title:{
            // fontFamily: "Marcellus",
            fontSize: 25, fontWeight: "400", color: '#AAA9A9', textAlign: 'center'
        },
        button:{
            width: 30, height: 30, borderRadius: 5, padding: 5, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', alignContent: 'center'
        },
})

const barra = StyleSheet.create({
    container:{
        flex: 0,
         flexDirection: "row", justifyContent: 'space-around', alignItems: 'baseline', backgroundColor: 'white', height: 70
    },
    iconeAtivo:{
        width: 20, height: 20, borderTopWidth: 2, borderTopColor: 'black', paddingTop: 20, alignItems: 'center', 
    },
    icone:{
        width: 20, height: 20, borderRadius: 5, opacity: 50, paddingTop: 5
    },
})


const topoCategoria = StyleSheet.create({    
    container:{
        flexDirection: "row", marginHorizontal: 20, justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 0
    },
    titulo: {
        color: '#5A5959', fontSize: 18, fontWeight: '700', 
    },
    subtitulo: {
        color: '#AAA9A9', fontSize: 10, fontWeight: '700'
    }
})

const colecoes = StyleSheet.create({
    container:{
        margin: 20, flexWrap: 'wrap', flexDirection: 'row'
    },
    button:{
        width: 95, height: 125, marginRight: 20, marginBottom: 20
    },
    image:{
        width: 95, height: 95, borderTopLeftRadius: 5, borderTopRightRadius: 5
    },
    title:{
        color: 'white', fontSize: 10, fontWeight: '700', textAlign: 'center', height: 30, marginTop: 7,
    },
})

const novidades = StyleSheet.create({
    container1:{
        margin: 20, flexWrap: 'nowrap', flexDirection: 'row', 
    },
    produto:{
        width: 170, height: 240, backgroundColor: 'white', borderRadius: 15, padding: 5, paddingBottom: 10, 
        marginRight: 20, marginBottom: 20
    },
    image: {
        width: 160, height: 175, borderRadius: 15,
    },
    container2:{
        flexDirection: 'row', justifyContent: 'space-between', marginTop: 15
    },
    container3:{
        flexDirection: 'column', justifyContent: 'space-between', 
    },
    titulo: {
        color: '#5A5959', fontSize: 12, fontWeight: '700', marginBottom: 0
    },
    subtitulo: {
        color: '#AAA9A9', fontSize: 12, fontWeight: '700'
    },
    icone:{
        width: 27, height: 27, backgroundColor: '#F2D3CC', borderRadius: 50, alignItems: 'center', justifyContent: 'center' 
    }
})
const loja = StyleSheet.create({
    container:{
        marginHorizontal: 20, marginBottom: 20, justifyContent: 'space-around'
    },    
    image: {
        height: 65, width: 350
    },
    text:{
        color: '#AAA9A9', fontSize: 12, fontWeight: '400', width: 250
    },
    text2:{
        color: '#5A5959', fontSize: 12, fontWeight: '400', marginTop: 5
    }
})
const produto = StyleSheet.create({
    container1:{
        flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', margin: 10
    }, 
    titulo: {
        color: '#5A5959', fontSize: 18, fontWeight: '700', textAlign: 'center', marginTop: -15
    },
    subtitulo: {
        color: '#AAA9A9', fontSize: 10, fontWeight: '700', textAlign: 'center', 
    },
    image: {
        width: 195, height: 265, borderRadius: 15,
    },
    box1:{
        width: 45, height: 200, borderRadius: 25, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'white'
    },
    size:{
        color: '#A8A7A7', fontSize: 17, fontWeight: '700', 
    },
    sizeAtivo:{
        color: 'white', fontSize: 17, fontWeight: '700', height: 45, width: 45, borderRadius: 50, backgroundColor: '#E2B6AC', textAlign: 'center', paddingTop: 10
    },
    box2:{
        width: 220, height: 40, borderRadius: 5, flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', justifyContent: 'space-around', marginBottom: 15
    },
    container2:{
        flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', 
    },
    container3:{
        flexDirection: 'column', justifyContent: 'space-around', 
    },
    titulo2: {
        color: '#AAA9A9', fontSize: 15, fontWeight: '700', 
    },
    subtitulo2: {
        color: '#5A5959', fontSize: 15, fontWeight: '700', 
    },
    button:{
        width: 150, height: 50, borderRadius: 10, backgroundColor: '#CEADA6', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'
    },
    icone:{
        width: 27, height: 27, backgroundColor: '#F2D3CC', borderRadius: 50, alignItems: 'center', justifyContent: 'center', alignContent: 'center' 
    },
    text:{
        color: 'white', fontSize: 12, fontWeight: '700', width: 80, 
    },
})

const destaque = StyleSheet.create({    
    image: {
        width: "100%", height: "100%"
    },
    box1:{
        width: 165, height: 55, borderRadius: 10, backgroundColor: '#D9D9D9', justifyContent: 'center', alignContent: 'center', margin: 20, padding: 10, opacity: 0.7
    },
    text: {
        color: 'white', fontSize: 15, fontWeight: '700', 
    },
    container1:{
        marginHorizontal: 20
    },
    textCenter: {
        color: 'white', fontSize: 27, fontWeight: '700', marginHorizontal: 20, marginBottom: 20, width: 255
    },    
    container2:{
        flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, alignItems: 'center'
    },
    box2:{
        width: 150, height: 55, borderRadius: 10, backgroundColor: '#A36153', flexDirection: 'row', alignItems: 'center',
        opacity: 0.7
    },
    icone:{
        width: 27, height: 27, backgroundColor: '#F2D3CC', borderRadius: 50, alignItems: 'center', justifyContent: 'center', alignContent: 'center', marginHorizontal: 10
    },
    title:{
        fontSize: 30, fontWeight: "400", color: '#F2F2F2', textAlign: 'center', margin: 20
    }
})

export { header, barra, topoCategoria, colecoes, novidades, loja, produto, destaque };