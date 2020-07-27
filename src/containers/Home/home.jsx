import React from 'react';
import LocationSearch from '../../components/LocationSearch/Loadable';
import FuelReleaseCard from '../../components/FuelReleaseCard/Loadable';

function Home() {
    return (
        <React.Fragment>
            <LocationSearch></LocationSearch>
            <FuelReleaseCard></FuelReleaseCard>
            <div>
                <h5>This is my home page</h5>
            </div>
        </React.Fragment>

    );
}

export default Home;