import React, { useState } from 'react';
import GetStartedLearn from './components/getStartedLearn';
import GetStartedMain from './components/getStartedMain';
import GetStartedSee from './components/getStartedSee';

const GetStarted = () => {
    const [state, setState] = useState(0);
    return (
        <div style={{ background: 'linear-gradient(90deg, rgba(56,134,176,1) 0%, rgba(71,161,177,1) 100%)', color: 'white', height: '21rem' }}>
            {state === 0 && <GetStartedMain onStart={() => setState(1)} onSee={() => setState(2)} />}
            {state === 1 && <GetStartedLearn />}
            {state === 2 && <GetStartedSee />}
        </div>

    )
}

export default GetStarted
