import movies from "../moviesApi.json"
import PeliculasTarjetas from "./PeliculasTarjetas";
import styles from "./PeliculasGrid.module.css"

function PeliculasGrid(){
    return(
        <ul className={styles.peliculasGrid}>
        {movies.map((movie)=>{
           return <PeliculasTarjetas key={movie.id} pelicula={movie} />
        })}
    </ul>
    );

}

export default PeliculasGrid;