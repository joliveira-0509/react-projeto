'use client';

import { useState } from 'react';
import style from './state.module.css';

export default function State() {
    const [conteudo, setConteudo] = useState('Bom dia!');
    const [name, setName] = useState('');
    const [showdiv, setShowdiv] = useState(true);

    const toggleConteudo = () => {
        setConteudo((prevConteudo) => (prevConteudo === 'Bom dia!' ? 'Boa tarde!' : 'Bom dia!'));
    };

    const continput = (evento) => {
        setName(evento.target.value);
    };

    return (
        <div>

            <div className={style.divAcolhida}>

                <p className={style.conteudo}>
                    {conteudo}
                </p>
                <p>{name}</p>
                <button className={style.botao} onClick={toggleConteudo}>Mudar</button>

            </div>
            <div className={style.divName}>
                <button className={style.botao} onClick={() => setShowdiv(!showdiv)}>
                    {showdiv ? 'Esconder' : 'Mostrar'}
                </button>
                {showdiv && (
                    <div className={style.input}>
                        <input id={style.input} type="text" onChange={continput} />
                    </div>
                )}
            </div>

        </div>
    );
}
