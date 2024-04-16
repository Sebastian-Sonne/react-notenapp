import React from 'react';
import notenappSVG from '../assets/media/notenapp.svg';

export default function Logo() {
    return (
        <a className="aspect-square w-12 py-2 mx-4" href="/" tabIndex="1">
            <img src={notenappSVG} alt="NotenappLogo" />
        </a>
    );
}