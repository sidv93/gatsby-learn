import React from 'react';
import LoadingGrid from '../components/LoadingGrid';
import { HomePage } from '../styles/Grids';
import useLatestData from '../utils/useLatestData';

const CurrentlySlicing = ({ slicemasters }) => {
    return (
        <div>
            {!slicemasters && <LoadingGrid count={4} />}
            {slicemasters && !slicemasters.length && <p>Noone is working right now</p>}
        </div>
    )
}

const HotSlices = ({ hotSlices }) => {
    return (
        <div>
            {!hotSlices && <LoadingGrid count={4} />}
            {hotSlices && !hotSlices.length && <p>Nothing in the case</p>}
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
