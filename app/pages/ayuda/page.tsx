import styles from "@/styles/styles.module.css"
import Link from "next/link";

export default function Test() {  
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Bienvenido a la pagina de ayuda</h1>
            <p className={styles.text}>¿Quieres ayuda en algo?</p>
        </div>
    );
  }
  