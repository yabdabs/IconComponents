import React from 'react';
import { render } from 'react-dom';

import TestComponent from './TestComponent.js';

const App = () => (
    <TestComponent />
);
render(<App />, document.getElementById("root"));