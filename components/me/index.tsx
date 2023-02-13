import { useState, useEffect } from 'react';

export default function Me(): JSX.Element {
    const urlPicture = ['me.jpeg', 'me-octocat.png'];
    const [picture, setPicture] = useState(urlPicture[0]);

    const changePicture = () => {
        const pictureIndex = urlPicture.indexOf(picture);
        const nextIndex = pictureIndex === urlPicture.length - 1 ? 0 : pictureIndex + 1;
        setPicture(urlPicture[nextIndex]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const pictureIndex = urlPicture.indexOf(picture);
            const nextIndex = pictureIndex === urlPicture.length - 1 ? 0 : pictureIndex + 1;
            setPicture(urlPicture[nextIndex]);
        }, 5000);
        return () => clearInterval(interval);
    });

    return (
        <>
            <img src={picture} alt="me"  onClick={changePicture}/>
        </>
    );
}
