import Image from 'next/image';
import { useContext, useRef, useEffect } from 'react';
import { PlayerContext } from '../../contexts/PlayerContext';
import styles from './styles.module.scss';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';


export function Player() {

    const audioRef = useRef<HTMLAudioElement>(null);

    const { episodeList,
        currentEpisodeIndex,
        isPlaying,
        togglePlay,
        setPlayingState
    } = useContext(PlayerContext)

    useEffect(() => {
        if (!audioRef.current) {
            return;
        }

        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }

    }, [isPlaying])

    const episode = episodeList[currentEpisodeIndex]

    return (
        <>
            <div className={styles.playerContainer}>
                <header>
                    <img src="/playing.svg" alt="Tocando agora" />
                    <strong>Tocando agora</strong>
                </header>

                {episode ? (
                    <div className={styles.currentEpisode}>
                        <Image
                            width="592"
                            height="592"
                            src={episode.thumbnail}
                            objectFit="cover"
                        />
                        <strong>{episode.title}</strong>
                        <span>{episode.members}</span>
                    </div>
                ) : (

                    <div className={styles.emptyPlayer}>
                        <strong>Selecione um podcast para ouvir</strong>
                    </div>
                )}


                <footer className={!episode ? styles.empty : ''}>
                    <div className={styles.progress}>
                        <span>00:00</span>
                        <div className={styles.slider} >
                            {episode ? (
                                <Slider
                                    trackStyle={{ backgroundColor: '#04d361' }}
                                    railStyle={{ backgroundColor: '#9f75ff' }}
                                    handleStyle={{ borderColor: '#04d361', borderWidth: 4 }}
                                />
                            ) : (
                                <div className={styles.emptySlider} />
                            )}
                        </div>
                        <span>00:00</span>
                    </div>
                    {episode && (
                        <audio
                            src={episode.url}
                            ref={audioRef}
                            autoPlay
                            onPlay={() => setPlayingState(true)}
                            onPause={() => setPlayingState(false)}
                        />
                    )}



                    <div className={styles.buttons}>
                        <button type="button" disabled={!episode}>
                            <img src="/shuffle.svg" alt="shuffle" />
                        </button>
                        <button type="button" disabled={!episode}>
                            <img src="/arrowLeft.svg" alt="arrowLeft" />
                        </button>
                        <button className={styles.playButton}
                            type="button"
                            disabled={!episode}
                            onClick={togglePlay}
                        >
                            {isPlaying
                                ? <img src="/pause.svg" alt="PauseButton" />
                                : <img src="/play.svg" alt="PlayButton" />}
                        </button>
                        <button type="button" disabled={!episode}>
                            <img src="/right.svg" alt="Play" />
                        </button>
                        <button type="button" disabled={!episode}>
                            <img src="/repeat2.svg" alt="Play" />
                        </button>
                    </div>

                </footer>
            </div>
        </>
    )
} 