import React from 'react';

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const month = new Date().getMonth();
    const season = getSeason(props.lat, month);
    const text = season === 'winter' ? 'Burr, It is chilly.' : 'Lets hit the beach.';

    return (
        <div>
            <h1>{text}</h1>
        </div>
    );
};

export default SeasonDisplay;