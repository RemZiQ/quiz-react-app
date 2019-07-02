import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from './Modules/store';
import Form from './Components/Form';
import Greeting from './Components/Greeting';
import Question from './Components/Question';
import PaginationButtons from './Components/PaginationButtons';
import EndQuiz from './Components/EndQuizButton';
import Results from './Components/Results';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Route path="/" exact component={Greeting} />
        <Route path="/quiz" exact component={PaginationButtons} />
        <Route path="/quiz" exact component={Question} />
        <Route path="/quiz" exact component={EndQuiz} />
        <Route path="/results" exact component={Results} />
      </Provider>
    </Router>
  );
}

store.subscribe(App);

export default App;
