// src/components/CountryDashboard.js
import React, {useState }from 'react';
import './country-dashboard.css'


import '../../../../assets/styles/styles.css'
import Header from '../../layout/Header/hearder';
import Sidebar from '../../layout/Sidebar/sidebar';
import Input from '../../common/input/input';
import Button from '../../common/button/button';


const CountryDashboard = () => {
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const handleAddCountry = () => {
    if (editIndex >= 0) {
      const updatedCountries = countries.map((country, index) =>
        index === editIndex ? countryName : country
      );
      setCountries(updatedCountries);
      setEditIndex(-1);
    }else {
      setCountries([...countries, countryName]);
    }
    setCountryName('');
  };
  const handleEditCountry = (index) => {
    setCountryName(countries[index]);
    setEditIndex(index);
  };
  const handleDeleteCountry = (index) => {
    const updatedCountries = countries.filter((_, i) => i !== index);
    setCountries(updatedCountries);
  };
  return (
    <>
    <Header/>
    <div className="dashboard-container">
                      <Sidebar />
                      <div className="content-wrapper">
                    <div className="content-inner">
                        <div className="left-panel">
                         
      <div className="add-country-form">
        <Input
          label="Country Name"
          type="email"
          className="custom-input"
          placeholder="Country Name"
          name="email"
          value={countryName}
          handleChange={(e) => setCountryName(e.target.value)}
        />
        <Button name={editIndex >= 0 ? 'Update Country' : 'Add Country'} handleButtons={handleAddCountry}/>
      </div>
      <table className="country-table">
        <thead>
          <tr>
            <th>#ID</th>
            <th>Country Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{country}</td>
              <td>
                <Button name="Edit" handleButtons={() => handleEditCountry(index)}/>
                <Button name="Delete" handleButtons={() => handleDeleteCountry(index)}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
                          </div>
                          </div>
    </div>
    </>
  );
};
export default CountryDashboard;