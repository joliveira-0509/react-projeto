/* import Image from "next/image"; */
import styles from "./page.module.css";
import Image from "next/image";
import header from "@/components/Header";

export default function Home() {
  const nome = 'João Vitor Silva de Oliveira'
  return (
    <div>
      <header />
      <h1 className={styles.title}>
        Página Principal
      </h1>
      <p id={styles.p}>Paragráfo da página principal</p>
      <p id={styles.autor}>Autor {nome}</p>
      <Image 
      className={styles.imagem}
      src={"/imagens/OIP.jpg"} 
      alt={"imagem"} 
      width={850} 
      height={500} 
      />
      <div className={styles.info}>
      <p className={styles.p}>Paragráfo da página principal</p>
      <p className={styles.autor}>Autor: <span className={styles.name}>{nome}</span> </p>
      </div>
    </div>
  );
}
