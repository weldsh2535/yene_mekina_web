
import App from '../../App';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import 'react-datepicker/dist/react-datepicker.css';

function AccidentRegistration() {
    const [selectedDate, setSelectedDate] = useState(null);

    const { t } = useTranslation()
    const insurance = [
      { id: 1, name: 'Africa Insurance' },
      { id: 2, name: 'Global Insurance' },
      { id: 3, name: 'Lucy Insurance' },
      { id: 4, name: 'Africa Insurance' },
      { id: 5, name: 'Global Insurance' },
      { id: 6, name: 'Lucy Insurance' },
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
               <h4 className="text-center text-secondary">Accident Registration Form</h4>
                
             <hr className="mb-4 "/>
                
                <div className="form-group mb-3 ">
               
                 <label for="platenumber"className="mb-1">Plate Number</label>
                 <input type="text "className="form-control custom-border-button" name=""placeholder="Enter your plate number"/>
              
                </div>
                <div className="form-group mb-3 ">
               
                 <label for="platenumber"className="mb-1">Accident Address</label>
                 <input type="text "className="form-control custom-border-button" name=""placeholder="Enter accident location"/>
              
                </div>

                <div className='form-group'>
                <label htmlFor="insurancelist" className="mb-1">
       
       Select Insurance
      </label>
    <select id="insurance" className="form-group w-100 h-10 border rounded-lg mb-3">
  {insurance.map((insurance) => (
    <option key={insurance.id} value={insurance.id}>
      {insurance.name}
    </option>
  ))}
</select>
    </div>
              
                <div className="form-group mb-3">
      <label htmlFor="issudate" className="mb-1">
       
       Accident Date
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
      </div>
    </div>
    

    
                <div className="form-group mb-3">
                <label htmlFor="image" className="mb-1">Select Image</label>
                <input type="file" id="image" className="form-control custom-border-button"  />
                </div>
               
                <div className="form-group mt-5">
        <button 
          type="button "
          className="btn shadow float-center w-100 btn-custom-gradient text-light custom-border-button bold-text mt-3"
        >
        Add Accident Report
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

export default AccidentRegistration;