import React, {useState, useEffect, FunctionComponent} from 'react';
import Grid from './components/grid';
import Modal from './components/modal';
import {FetchCountries} from './api';
import LoadingIndicator from './components/preloader';
import {Labels} from './languages';
import {pluck} from './utils';
import  './style.css';
const App:FunctionComponent = () => {   
  const countriesList = FetchCountries('/all');
  const [gridData, setGridData] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState('');
  const gridPreference = {
    columndef : [
      {'id' : 'name', 'name' : Labels('country')}, 
      {'id' : 'capital', 'name' : Labels('capital')},
      {'id' : 'population', 'name' : Labels('population')},
      {'id' : 'alpha2Code', 'name' : 'alpha2Code', 'visibility' : 'hidden'},
      {'id' : 'numericCode', 'name' : 'numericCode', 'visibility' : 'hidden'},
      {'id' : 'view', 'name' : Labels('view'), 'formatter' : true, 'filter' : false}
    ],
    gridData : gridData,
    gridUniqueId : "numericCode"
  }; 
  const viewFormatter = (id : any) => {
    const dataFormodal = gridData.filter((datum :any)=> { return datum.numericCode === id;})[0];
    const {capital, languages, currencies, population, name} = dataFormodal;
    const language = pluck(languages || [], ['name']).map(x => x.name);
    const currency = pluck(currencies || [], ['name']).map(x => x.name);
    let htmlToRender = `<p><strong>${Labels('country')}:</strong> ${name}</p>`
                      + `<p><strong>${Labels('capital')}:</strong> ${capital}</p>`
                      + `<p><strong>${Labels('population')}:</strong> ${population}</p>`
                      + `<p><strong>${Labels('language')}:</strong> ${language}</p>`
                      + `<p><strong>${Labels('currency')}:</strong> ${currency}</p>`;
    setModalData(htmlToRender);
    setModalOpen(id);
  }
  useEffect(() => {
    setGridData(countriesList.data);
  }, [countriesList]); 
  return <>
    {!countriesList.dataLoaded && <LoadingIndicator /> }
    {countriesList.dataLoaded && 
    <div className="container">
      <div className="column">
        <Grid preference={gridPreference} formatter={viewFormatter} />
      </div>
    </div>   
    }
    <Modal open={isModalOpen} data={modalData} />
  </>;
}
export default App;