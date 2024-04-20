
import App from '../../App';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import 'react-datepicker/dist/react-datepicker.css';

function OilRegistration() {
    const [selectedDate, setSelectedDate] = useState(null);

    const [selectedImages, setSelectedImages] = useState([]);

    const { t } = useTranslation()
    const handleImageChange = (event) => {
      const files = Array.from(event.target.files);
      setSelectedImages(files);
    };
    const oilservice = [
      { id: 1, name: '1 month' },
      { id: 2, name: '2 months' },
      { id: 3, name: '3 months' },
      { id: 4, name: '4 months' },
      { id: 5, name: '5 months' },
      { id: 6, name: '6 months' },
      // Add more products as needed
    ];
    
    return (

    <div>
        <section className="section ">
    <div className="container col-md-6 ">
        <div className="card shadow mt-4  custom-border-button">
            <div className="card-body ">
             <div className="row ">
                <div className="col-md-12">
                {/*<h5>{t("Login")}</h5>*/}
               <h4 className="text-center text-secondary">Add Oil Service</h4>
                
             <hr className="mb-4 "/>
                
                <div className="form-group mb-3 ">
               
                 <label for="platenumber"className="mb-1">Plate Number</label>
                 <input type="text "className="form-control custom-border-button" name=""placeholder="Enter your plate number"/>
              
                </div>

              
              
                <div className="form-group mb-3">
      <label htmlFor="issudate" className="mb-1">
       
       Oil Service Date
      </label>
      <div className="input-group justify-between ">
        <DatePicker
          id="issudate"
          className="form-control custom-border-button"
          selected={selectedDate}
          placeholderText="Enter your phone"
          onChange={(date) => setSelectedDate(date)}
          dateFormat="MM/dd/yyyy"
        />
        
        <div className="input-group-append">
        <button
            className="input-group-text focus-on-hover"
            onClick={() => document.getElementById('issudate').click()}
          >
            <FontAwesomeIcon icon={faCalendarAlt}className="calander-color"/>
          </button>
        </div>
    <div className='form-group mt-3 '>
                <label htmlFor="insurancelist" className="mb-1">
       
       Next Service Date
      </label>
    <select id="oilservice" className="form-group w-100 h-10 border rounded-lg  ">
  {oilservice.map((oilservice) => (
    <option key={oilservice.id} value={oilservice.id}>
      
      {oilservice.name}
    </option>
    
    
  ))}
  
</select>
    </div>
      </div>
    </div>
    
    
    <div className="form-group mb-3">
      <label htmlFor="expire-date" className="mb-1">
       Next Service Date
      </label>
      <div className="input-group justify-between ">
        <DatePicker
          id="expire-date"
          className="form-control custom-border-button"
          selected={selectedDate}
          placeholderText="Enter your phone"
          onChange={(date) => setSelectedDate(date)}
          dateFormat="MM/dd/yyyy"
          disabled={!selectedDate}
        />
        <div className="input-group-append  ">
          <span className="input-group-text ">
            
            <FontAwesomeIcon icon={faCalendarAlt} className="calander-color"/>
          </span>
        </div>
      </div>
    </div>
                
               
                <div className="form-group mt-5">
        <button 
          type="button "
          className="btn shadow float-center w-100 btn-custom-gradient text-light custom-border-button bold-text mt-3"
        >
        Save 
        </button>
      </div>
                </div>
              
             </div>

            </div>
        </div>
    </div>

</section>
    </div>
    );
  }

export default OilRegistration;