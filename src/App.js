import React, { Component } from 'react';
import Layout from "./hoc/Layout/Layout"
import {Route, Switch} from 'react-router-dom' 
import Quiz from "./containers/Quiz/Quiz"
import QuizCreator from './containers/QuizCreator/QuizCreator'
import QuizList from './containers/QuizList/QuizList'
import Auth from './containers/Auth/Auth'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/quiz-creator" component={QuizCreator} />
            <Route path="/quiz/:id" component={Quiz} />
            <Route path="/" component={QuizList} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;