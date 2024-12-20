'use client';

import style from "./efeitos.module.css"
import { useEffect, useState } from "react"

export default function Efeitos() {
    const [cont, setCont] = useState(0);
    const [cont2, setCont2] = useState(0);
    useEffect(() => {
        console.log("Renderizou")
    }, [cont])

    const [ufs, setUfs] = useState([]);
    const [ufSelect, setUfSelect] = useState('');

    const getUfs = async () => {
        try {
            const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            if (!response.ok) {
                throw new Error("Erro ao buscar dados" + response.statusText);
            }
            const data = await response.json();
            setUfs(data);
            console.log(data);
        } catch (error) {
            console.log("Ocorreu um erro na busca" + error)
        }
    }

    useEffect(() => {
        getUfs()
    }, [])

    return (
        <div>
            <h1>Efitos colaterais / Use Effect</h1>
            <div className={style.box1}>

                <button onClick={() => (setCont(cont + 1))}>Adicionar</button>
                <p>Renderizações cont1: {cont}</p>
                <button onClick={() => (setCont2(cont2 + 1))}>Adicionar</button>
                <p>Renderizações cont2: {cont2}</p>

            </div>

                <h1>Efitos colaterais / Use Effect</h1>
            <select onChange={(ev) => setUfSelect(ev.target.value)}>
                <option value="" >Selecione o Estado</option>
                {ufs.map((uf) => (
                    <option value={uf.id} key={uf.id}>{uf.nome}</option>
                ))}
            </select>
        </div>

    )
}