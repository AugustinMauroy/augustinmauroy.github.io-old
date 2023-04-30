import { useState, useEffect } from 'react';
import styles from './index.module.scss';

const data = ['me-1.jpeg', 'me-2.jpeg', 'me-3.jpeg'];

export default function HeroImage() {
    const [picture, setPicture] = useState<string>(data[0]);

    const changePicture = () => {
        const pictureIndex: number = data.indexOf(picture);
        const nextIndex: number =
            pictureIndex === data.length - 1 ? 0 : pictureIndex + 1;
        setPicture(data[nextIndex]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const pictureIndex: number = data.indexOf(picture);
            const nextIndex: number =
                pictureIndex === data.length - 1 ? 0 : pictureIndex + 1;
            setPicture(data[nextIndex]);
        }, 5000);
        return () => clearInterval(interval);
    });

    return (
        <>
            <img
                src={`static/picture/${picture}`}
                alt="me"
                onClick={changePicture}
                className={styles.img}
            />
        </>
    );
}
