import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { updateLocation } from '../../api/mapSlice';
export default function EditLocation() {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const myData = location.state.myData;
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        name: myData.name,
        lat: myData.latitude,
        lon: myData.longitude,
        type: myData.type,
        city: myData.City,
        country: myData.Country,
        phone: myData.detail !== null ? '' : myData.detail ,
        email: '',
      });
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
           ...prevState,
           [name]: value
        }));
       };
       
  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = { ...errors };
    const fields = ['name', 'lat', 'lon', 'type', 'city', 'country'];
    fields.forEach(field => {
      if (!formData[field].trim()) {
        newErrors[field] = true;
      }
    });
    setErrors(newErrors);

    if (Object.values(newErrors).every(error => !error)) {

        const dataContainer = {
            "_id":myData.id,
            'name': formData.name,
            "lat": parseFloat(formData.lat).toFixed(7),
            "lon": parseFloat(formData.lon).toFixed(7),
            "type": formData.type,
            "city": formData.city,
            "country": formData.country,
            "detail": { "phone": formData.phone },
            "apiKey": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjb21wYW55bmFtZSI6InpheXJpZGUiLCJpZCI6IjM1NTY1Mjk3LTZjZGUtNDVmNy1hYjllLTAwMjU1Y2MxZGVlZSIsInVzZXJuYW1lIjoiemF5cmlkZSJ9.s3mr--J2KM72MWedho9Vo5qOZn-zSk3IR1ZXZ73xppw"
          }
          dispatch(updateLocation(dataContainer)).then((value) =>{
            if(value)
            navigate('/user/admin/homepage');
          });
    }
  };
    
    // console.log("my data I recieved is ", myData);
    return (
        <div>
            <section className="section">
                <div className="container col-md-6">
                    <div className="card shadow mt-4 custom-border-button">
                        <div className="card-body">
                            <h4 className="text-center text-secondary">Edit {myData.name}</h4>
                            <hr className="mb-4" />
                            <div className="row">
                                <div className="col-md-6">

                                    <div className="form-group mb-3">
                                        <label htmlFor="platenumber" className="mb-1">Name</label>
                                        <input type="text" className="form-control custom-border-button" name="name" id='name' value={formData.name} />
                                    </div>
                                    <div className="form-group mb-4">
                                        <label htmlFor="image" className="mb-1">Latitude </label>
                                        <input type="number" id="lat" name='lat' value={formData.lat}  onChange={handleChange} className="form-control custom-border-button" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="issudate" className="mb-1">Longitude</label>
                                        <input type="number"  onChange={handleChange} className="form-control custom-border-button" name='lon' id="lon" defaultValue={formData.lon} />
                                    </div>
                                    <div className="form-group mb-4">
                                        <label htmlFor="expire-date" className="mb-1">Type</label>
                                        <input type="text"  onChange={handleChange} className="form-control custom-border-button"  name='type' id="type" value={formData.type} />
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-6">

                                    <div className="form-group mb-3">
                                        <label htmlFor="platenumber" className="mb-1">City</label>
                                        <input type="text"  id='city' onChange={handleChange} className="form-control custom-border-button" name="city" defaultValue={formData.city} />
                                    </div>
                                    <div className="form-group mb-4">
                                        <label htmlFor="image" className="mb-1">Country</label>
                                        <input type="text" id="country"  name='country' onChange={handleChange} defaultValue={formData.country} className="form-control custom-border-button" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="issudate" className="mb-1">Phone</label>
                                        <input type="text" className="form-control custom-border-button"  name='phone' onChange={handleChange} id="issudate" defaultValue={formData.phone} placeholder='enter your phone number' />
                                    </div>
                                    {/* <div className="form-group mb-4">
                                        <label htmlFor="expire-date" className="mb-1">Expire Date</label>
                                        <input type="text" className="form-control custom-border-button" id="expire-date" placeholder="Enter your expire date"/>
                                    </div> */}
                                </div>

                            </div>


                        </div>
                        <div className="form-group mb-5 text-center">
                            <button class="btn btn-outline-success" onClick={handleSubmit} >
                                Save Records
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
