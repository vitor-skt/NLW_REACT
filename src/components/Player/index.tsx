import styles from './styles.module.scss';


export function Player() {
    return (
        <>
            <div className={styles.playerContainer}>
                <header>
                    <img src="/playing.svg" alt="Tocando agora" />
                    <strong>Tocando agora</strong>
                </header>

                <div className={styles.emptyPlayer}>
                    <strong>Selecione um podcast para ouvir</strong>
                </div>

                <footer className={styles.empty}>
                    <div className={styles.progress}>
                        <span>00:00</span>
                        <div className={styles.slider} >
                            <div className={styles.emptySlider} />
                        </div>
                        <span>00:00</span>
                    </div>

                    <div className={styles.buttons}>
                        <button type="button">
                            <img src="shuffle.svg" alt="shuffle" />
                        </button>
                        <button type="button">
                            <img src="arrowLeft.svg" alt="arrowLeft" />
                        </button>
                        <button className="playButton" type="button">
                            <img src="/play.svg" alt="PlayButton" />
                        </button>
                        <button type="button">
                            <img src="/right.svg" alt="Play" />
                        </button>
                        <button type="button">
                            <img src="/repeat2.svg" alt="Play" />
                        </button>
                    </div>

                </footer>
            </div>
        </>
    )
} 