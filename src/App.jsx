import React from 'react';
import { LongitudeLatitudeDisplay } from './components/LongitudeLatitudeDisplay';
import { HemisphereDisplay } from './components/HemisphereDisplay';

const App = () => {
  return (
    <main>
      <h1>Geo Locator</h1>
      <LongitudeLatitudeDisplay />
      <HemisphereDisplay />
    </main>
  )
}

export default App;