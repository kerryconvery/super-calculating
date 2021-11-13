import React from 'react';
import GameController from './pages/game-page/GameController'

const App = () => (
    <>
        <h1>Super Calculating</h1>
        <GameController numberOfQuestions={10} />
    </>
)

export default App;
