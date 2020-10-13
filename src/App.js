
import React, { useState } from 'react';
import styles from "./App.module.css"


import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from './components/CountryPicker/CountryPicker';

import { Typography } from "@material-ui/core";

// export {default as Cards} from "./Cards/Cards"
import { fetchData } from './api/';


import image from './components/covid19.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>
          Covid-19 World Tracker
        </h1>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;