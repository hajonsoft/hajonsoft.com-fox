import React, { useState } from 'react';
import GetStartedLearn from './components/getStartedLearn';
import GetStartedMain from './components/getStartedMain';
import GetStartedSee from './components/getStartedSee';
import {analytics} from '../../analytics';

const GetStarted = () => {
    const [state, setState] = useState(0);

    const handleStart = () => {
        setState(1);
        analytics.logEvent('get-started');
    }
    const handleSeePlatform = () => {
        setState(2);
        analytics.logEvent('see-platform');
    }

    return (
        <div style={{ background: 'linear-gradient(90deg, rgba(56,134,176,1) 0%, rgba(71,161,177,1) 100%)', color: 'white', height: '21rem', marginTop: '1rem' }}>
            {state === 0 && <GetStartedMain onStart={handleStart} onSee={handleSeePlatform} />}
            {state === 1 && <GetStartedLearn />}
            {state === 2 && <GetStartedSee />}
        </div>

    )
}

export default GetStarted
