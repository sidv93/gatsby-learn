import React from 'react';
import ItemGrid from '../components/ItemGrid';
import LoadingGrid from '../components/LoadingGrid';
import { HomePage } from '../styles/Grids';
import useLatestData from '../utils/useLatestData';

const CurrentlySlicing = ({ slicemasters }) => {
    return (
        <div>
            <h2 className="center">
                <span className="mark tilt">Slicemasters On</span>
            </h2>
            <p>Standing by, ready to slice up!</p>
            {!slicemasters && <LoadingGrid count={4} />}
            {slicemasters && !slicemasters.length && <p>Noone is working right now</p>}
            {slicemasters && slicemasters.length && <ItemGrid items={slicemasters} />}
        </div>
    )
}

const HotSlices = ({ hotSlices }) => {
    return (
        <div>
            <h2 className="center">
                <span className="mark tilt">Hot Slices</span>
            </h2>
            <p>Come by, buy a slice</p>
            {!hotSlices && <LoadingGrid count={4} />}
            {hotSlices && !hotSlices.length && <p>Nothing in the case</p>}
            {hotSlices && hotSlices.length && <ItemGrid items={hotSlices} />}
        </div>

    )
}

const Home = () => {
    const { sliceMasters, hotSlices } = useLatestData();
    return (
        <div className="center">
            <h1>The best pizza downtown</h1>
            <p>Open 11am to 11pm every single day</p>
            <HomePage>
                <CurrentlySlicing slicemasters={sliceMasters} />
                <HotSlices hotSlices={hotSlices} />
            </HomePage>
        </div>
    );
}

export default Home;
