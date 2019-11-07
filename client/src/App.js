import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Form from './components/Form/Form'
import WeatherCard from './components/WeatherCard/WeatherCard'
import WeatherDetails from './components/WeatherDetails/WeatherDetails'
import { publicDecrypt } from 'crypto'

class App extends React.Component {

  render() {
    console.log(process.env.PUBLIC_URL)
    return (
      <Router basename='/avwx'>
        <div className='App'>
          <Form />
          <Switch basename="/avwx">
            <Route path={`/`} exact component={WeatherCard} />
            <Route path={`/:icao`} component={WeatherDetails}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
