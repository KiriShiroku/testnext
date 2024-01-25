import styles from '@/styles/styles.module.css';
import Gif from '@/components/Gif';
import Footer from '@/components/Footer';
import Counter from '@/components/Counter'
import Login from '@/components/Login';
import IndexPage from '@/components/IndexPage';

export default function Home() {
  return (
    <div className={styles.content}>
      {/* Contenido principal
      <h1 className={styles.h1Pri}>Bienvenidos!!</h1>
      <div className={styles.gifContainer}>
        <Gif />
      </div>


      {/* Footer 
      <Footer /> */}
      {/* <Counter/> */}
      <IndexPage/>
    </div>
  )
}
