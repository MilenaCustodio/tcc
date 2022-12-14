import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function listarServico(){
    const resposta = await api.get('/listarServico');
    return resposta.data
}

export async function listarCategoria(){
    const resposta = await api.get('/listarCategoria');
    return resposta.data
}

export async function removerServico(id){
    const resposta = await api.delete('/removerServico/' + id);
    return resposta.data
}

export async function removerCategoria(id){
    const resposta = await api.delete('/removerCategoria/' + id);
    return resposta.data
}

export async function buscarServicoNome(nome){
    const resposta = await api.get(`/servicoNome?nome=${nome}`)
    return resposta.data;
}

export async function buscarCategoriaNome(catNome){
    const resposta = await api.get(`/servicoCategoria?catNome=${catNome}`)
    return resposta.data;
}

export async function buscarCategoriaValor(valor){
    const resposta = await api.get(`/servicoValor?valor=${valor}`)
    return resposta.data;
}