import React from 'react';
import useLatestData from '../utils/useLatestData';

const CurrentlySlicing = () => {
    return (
        <p>slicing</p>
    )
}

const HotSlices = () => {
    return (
        <p>hot slices</p>
    )
}

const Home = () => {
    const {sliceMasters, hotSlices} = useLatestData();
    console.log('result', result);
    return (
        <div className="center">
            <h1>The best pizza downtown</h1>
            <p>Open 11am to 11pm every single day</p>
            <div>
                <CurrentlySlicing slicemasters={sliceMasters} />
                <HotSlices hotSlices={hotSlices} />
            </div>
        </div>
    );
}

export default Home;
