import Image from 'next/image'
import styles from "@/styles/styles.module.css"
 
const Gif = () => {
    return(
    <Image className={styles.gif}
        src="/hollow.png"
        width={500}
        height={500}
        alt="Picture of the author"
    />
    )
}

export default Gif;
