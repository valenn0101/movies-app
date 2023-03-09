import PeliculasGrid from "./PeliculasGrid";
import styles from "./App.module.css"

function App(){
    return <div>
        <header className={styles.header}>
            <h1 className={styles.title}>Peliculas</h1>
        </header>
        <main>
    <PeliculasGrid/>
        </main>
    </div>
}

export default App;