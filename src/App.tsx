import React, {useState, useEffect} from 'react';
import Grid from './components/grid';
import Modal from './components/modal';
import {FetchCountries} from './api';
import LoadingIndicator from './components/preloader';
import {Labels} from './languages';
import  './style.css';
function App() {   
  const countriesList = FetchCountries('/all');
  const [gridData, setGridData] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const gridPreference = {
    columndef : [
      {'id' : 'name', 'name' : Labels('country')},      
      {'id' : 'capital', 'name' : Labels('capital')},
      {'id' : 'population', 'name' : Labels('population')},
      {'id' : 'view', 'name' : Labels('view'), 'formatter' : true}
    ],
    gridData : gridData,
    gridUniqueId : "numericCode"
  }; 
  const viewFormatter = (id : any) => {
    const dataFormodal = gridData.filter((datum :any)=> { return datum.numericCode === id;})[0];
    setModalData(dataFormodal);
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
