import { useState, useEffect } from 'react';

export default function Me(): JSX.Element {
    const urlPicture: string[] = ['me.jpeg', 'me-octocat.png', 'me2.jpeg'];
    const [picture, setPicture] = useState<string>(urlPicture[0]);

    const changePicture = () => {
        const pictureIndex: number = urlPicture.indexOf(picture);
        const nextIndex: number = pictureIndex === urlPicture.length - 1 ? 0 : pictureIndex + 1;
        setPicture(urlPicture[nextIndex]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const pictureIndex: number = urlPicture.indexOf(picture);
            const nextIndex: number = pictureIndex === urlPicture.length - 1 ? 0 : pictureIndex + 1;
            setPicture(urlPicture[nextIndex]);
        }, 5000);
        return () => clearInterval(interval);
    });

    return (
        <>
            <img src={picture} alt="me"  onClick={changePicture}/>
        </>
    );
};
