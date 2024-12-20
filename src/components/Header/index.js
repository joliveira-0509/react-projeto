"use client"
import Link from "next/link"
import style from "./header.module.css"
import { useState } from "react";

export default function Header() {
    const [showMenu, setShowMenu] = useState(true)



    return (
        <header className={style.header}>
            <button id="botao" className={style.botao} onClick={()=>setShowMenu(!showMenu) }>☰</button>
            {
                showMenu &&
                <nav>
                    <ul className={style.li}>
                        <li >
                            <Link href="/sobre" className={style.link}>Sobre</Link>
                        </li>
                        <li>
                            <Link href="/state" className={style.link}>Bom dia</Link>
                        </li>
                        <li>
                            <Link href="/listas" className={style.link}>Listas</Link>
                        </li>
                        <li>
                            <Link href="/props" className={style.link}>Props</Link>
                        </li>
                        <li>
                            <Link href="/" className={style.link}>Inicial</Link>
                        </li>
                        <li>
                            <Link href="/efeitos" className={style.link}>efeitos</Link>
                        </li>
                    </ul>
                </nav>
            }
        </header>
    )
}

/* "use client"
import Link from "next/link"
import style from "./header.module.css"
import {FaBars, FaTimes} from "react-icons/fa"
import { useState } from "react";

function NavBar() {
    return (
        <header>
            <h3>Logo</h3>
            <nav>
                <ul className={style.li}>
                    <li >
                        <Link href="/sobre" className={style.link}>Sobre</Link>
                    </li>
                    <li>
                        <Link href="/state" className={style.link}>Bom dia</Link>
                    </li>
                    <li>
                        <Link href="/" className={style.link}>Inicial</Link>
                    </li>
                    <li>
                        <Link href="/lista" className={style.link}>listas</Link>
                    </li>
                </ul>
                <button>
                    <FaTimes />
                </button>
            </nav>

            <button>
                <FaBars />
            </button>

        </header>
    )
} */