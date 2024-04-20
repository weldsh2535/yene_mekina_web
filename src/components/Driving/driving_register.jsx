
import App from '../../App';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import { createdriving } from '../../Redux/actions/driving-action';

function DrivingRegistration() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedIssueDate, setSelectedIssueDate] = useState(null);
  const [selectedExpireDate, setSelectedExpireDate] = useState(null);
  const [licenseNumber, setLicenseNumber] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [fullName, setFullName] = useState('');
  
  const date = new Date();
  const { t } = useTranslation()
  const dispatch = useDispatch();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Create the form data object
      const formData = {
        full_name: fullName,
        license_number: licenseNumber,
        issue_date: selectedIssueDate,
        expire_date: selectedExpireDate,
        image:selectedImage,
      };
  
      // Dispatch the createdriving action with the form data
      await dispatch(createdriving(formData));
  
      // Clear form fields after successful submission
      setLicenseNumber('');
      setSelectedIssueDate(null);
      setSelectedExpireDate(null);
      setFullName('');
  
      console.log('Form submitted successfully!'); // Check if this line is logged in the browser console
  
      // Show success alert
      window.alert('Form submitted successfully! alert alert-light" role="alert');
    } catch (error) {
      // Handle any error that occurs during form submission
      console.error(error);
    }
  };;
  

  return (

    <div>
      <section className="section">
        <div className="container col-md-6">
          <div className="card shadow mt-4 custom-border-button">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <h4 className="text-center text-secondary">Driving Registration Form</h4>
                  <hr className="mb-4" />

                  <form onSubmit={handleFormSubmit}>
                    <div className="form-group mb-3">
                      <label htmlFor="licensenumber" className="mb-1">
                        License Number
                      </label>
                      <input
                        type="text"
                        className="form-control custom-border-button"
                        value={licenseNumber}
                        onChange={(e) => setLicenseNumber(e.target.value)}
                        placeholder="Enter your license number"
                        name="licenseNumber"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="licensenumber" className="mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control custom-border-button"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your full number"
                        name="fullName"
                      />
                    </div>
                  

                    <div className="form-group mb-3">
                      <label htmlFor="issudate" className="mb-1">
                        Issue Date
                      </label>
                      <div className="input-group justify-between">
                        <DatePicker
                          id="issudate"
                          className="form-control custom-border-button"
                          selected={selectedIssueDate}
                          placeholderText="Enter your phone"
                          onChange={(date) => setSelectedIssueDate(date)}
                          dateFormat="MM/dd/yyyy"
                          onSelect={(date) => setSelectedIssueDate(date)} 
                        />

                        <div className="input-group-append">
                          <button
                            className="input-group-text focus-on-hover"
                            onClick={() => document.getElementById('issudate').click()}
                          >
                            <FontAwesomeIcon icon={faCalendarAlt} className="calander-color" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="form-group mb-4">
                      <label htmlFor="expire-date" className="mb-1">
                        Expire Date
                      </label>
                      <div className="input-group justify-between">
                        <DatePicker
                          id="expire-date"
                          className="form-control custom-border-button"
                          selected={selectedExpireDate}
                          placeholderText="Enter your phone"
                          onChange={(date) => setSelectedExpireDate(date)}
                          dateFormat="MM/dd/yyyy"
                          //disabled={!selectedIssueDate}
                          onSelect={(date) => setSelectedExpireDate(date)}
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">
                            <FontAwesomeIcon icon={faCalendarAlt} className="calander-color" />
                          </span>
                        </div>
                      </div>
                    </div>
                   

                    {/* <div className="form-group mb-4 ">
                      <label htmlFor="image" className="mb-1 ">
                        Select Image
                      </label>
                      <input
                        type="file"
                        id="image"
                        className="form-control custom-border-button "
                        onChange={(e) => setSelectedImage(e.target.files[0])}
                      />
                    </div> */}
   <div className="form-group mb-4">
                <label htmlFor="image" className="mb-1">Select Image</label>
                <input type="file" id="image" className="form-control custom-border-button"  />
                
                </div>

                    <div className="form-group mt-5">
                      <button
                        type="submit"
                        className="btn shadow float-center w-100 btn-custom-gradient text-light custom-border-button bold-text mt-3"
                      >
                        Add Driving License
                      </button>
                    </div>
                  </form>
   
                </div>
              </div>
            </div>
          </div>
        </div>
        
     
      </section>
    </div>
  );
}

export default DrivingRegistration;