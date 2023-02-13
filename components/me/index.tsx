import { useState, useEffect } from 'react';

export default function Me(): JSX.Element {
    const urlPicture = ['me.jpeg', 'me-octocat.png'];
    const [picture, setPicture] = useState(urlPicture[0]);

    const changePicture = () => {
        setPicture(picture === urlPicture[0] ? urlPicture[1] : urlPicture[0]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setPicture(picture === urlPicture[0] ? urlPicture[1] : urlPicture[0]);
        }, 5000);
        return () => clearInterval(interval);
    });

    return (
        <>
            <img src={picture} alt="me"  onClick={changePicture}/>
        </>
    );
}