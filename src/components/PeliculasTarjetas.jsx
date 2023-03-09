import styles from "./PeliculasTarjetas.module.css"

function PeliculasTarjetas( {pelicula} ){
    const imgUrl = "https://image.tmdb.org/t/p/w300" + pelicula.poster_path
    return <li className={styles.peliculaTarjeta}>
        <img width={230} height={345} src={imgUrl} alt={pelicula.title} className={styles.peliculaImagen}/>
        <div>{pelicula.title}</div>
        </li>
}

export default PeliculasTarjetas;