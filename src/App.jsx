

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./components/LoginPage";
import Register from './components/register';
import Drivingregistration from './components/Driving/driving_register';
import BoloRegistration from './components/Bolo/bolo_registration';
import OilRegistration from './components/oil/oil_registration';


import AccidentRegistration from './components/AccidentReport/accident-report_registration';
import RoadFundRegistration from './components/Roadfund/road-fund_registration';
import ThirdpartyRegistration from './components/ThirdParty/thirdparty_register';
import FullInsuranceRegistration from './components/Full-Insurance/full_insurance_registration';

import AdminHome from './components/admin_component/admin_home';
import EditLocation from './components/admin_component/edit_location';

import Dashboard from './components/dashboard/Dashboard';
import SendOtp from './components/forget_password/SendOtp';
import RegisterOtp from './components/forget_password/Register_otp';
import UpdatePassword from './components/forget_password/UpdatePassword';
import BoloMap from './components/feature/bolo_map';
import HomePage from './components/dashboard/home';
import FeaturesPage from './components/dashboard/features';
import Settings from './components/dashboard/settings';
import Infos from './components/dashboard/info';
import Layout from './components/shared/Layout';
import ProfileUpdate from './components/Settings/ProfileUpdate';
import PrivacyPolicy from './components/Settings/PrivacyPolicy';
import TermCondition from './components/Settings/TermCondition';
import CustomerSupport from './components/Settings/CustomerSupport';
import AboutThirdarty from './components/Infos/AboutThirdarty';
import AboutFullInsurance from './components/Infos/AboutFullInsurance';
import AboutRoadfund from './components/Infos/AboutRoadfund';
import AboutBolo from './components/Infos/AboutBolo';
import AboutDriverLicence from './components/Infos/AboutDriverLicence';
import AboutGarage from './components/Infos/AboutGarage';
import AboutTewos from './components/Infos/AboutTewos';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />


        <Route path='/user/admin/homepage' element={<AdminHome />} />

        <Route path="/driving" element={<Drivingregistration />} />
        <Route path="/bolo" element={<BoloRegistration />} />
        <Route path="/roadfund" element={<RoadFundRegistration />} />
        <Route path="/thirdparty" element={<ThirdpartyRegistration />} />
        <Route path="/oil" element={<OilRegistration />} />

        <Route path={"/user/admin/:id/map/edit"} element={<EditLocation />} />

        <Route path='/user/admin/homepage' element={<AdminHome />} />

        <Route path={"/user/admin/:idd/map/edit"} element={<EditLocation />} />

        <Route path="/sendOtp" element={<SendOtp />} />
        <Route path='/registerOtp' element={<RegisterOtp />} />
        <Route path='/updatePassword' element={<UpdatePassword />} />

        <Route path='/user' element={<Layout />} >
          <Route index element={<HomePage />}></Route>
          <Route path='/user/feature' element={<FeaturesPage />}></Route>
          <Route path='/user/setting' element={<Settings />}></Route>
          <Route path='/user/info' element={<Infos />}></Route>
          <Route path='/user/setting/profile' element={<ProfileUpdate />} />
          <Route path='/user/setting/privacypolicy' element={<PrivacyPolicy />} />
          <Route path='/user/setting/termcondition' element={<TermCondition />} />
          <Route path='/user/setting/customersupport' element={<CustomerSupport />} />

          <Route path='/user/info/thirdparty' element={<AboutThirdarty />} />
          <Route path='/user/info/insurance' element={<AboutFullInsurance />} />
          <Route path='/user/info/roadfund' element={<AboutRoadfund />} />
          <Route path='/user/info/bolo' element={<AboutBolo />} />
          <Route path='/user/info/driverlicence' element={<AboutDriverLicence />} />
          <Route path='/user/info/garage' element={<AboutGarage />} />
          <Route path='/user/info/tewos' element={<AboutTewos />} />
        </Route>

        <Route path='/bolomap' element={<BoloMap />} />




      </Routes>
    </Router>
  );
}



export default App;
