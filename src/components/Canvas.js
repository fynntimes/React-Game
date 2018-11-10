import React from 'react';
import Sky from './Sky';
import Ground from './Ground';

const Canvas = () => {
    const viewBox = [
        window.innerWidth / -2,
        100 - window.innerHeight,
        window.innerWidth,
        window.innerHeight
    ];

    return (
        <svg
            id="game-canvas"
            preserveAspectRatio="xMaxYMax none"
            viewBox={viewBox}>
            <Sky />
            <Ground />
            <circle cx={0} cy={0} r={50}></circle>
        </svg>
    );

};

export default Canvas;