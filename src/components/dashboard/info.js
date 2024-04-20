import React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import logo from '../../assets/images/logo.png';
import driving_School from '../../assets/features/drivingschool.jpeg';
import insurance from '../../assets/features/insurance.png';
import oil_service from '../../assets/features/oil_service.png';
import sparepart from '../../assets/features/services.png';
import car from '../../assets/features/car.png';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Infos = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const handleItemClick = (item) => {
        if (item === "thirdparty") {
            navigate("/user/info/thirdparty")
        } else if (item === "insurance") {
            navigate("/user/info/insurance")
        } else if (item === "roadfund") {
            navigate("/user/info/roadfund")
        } else if (item === "bolo") {
            navigate("/user/info/bolo")
        } else if (item === "driverlicence") {
            navigate("/user/info/driverlicence")
        } else if (item === "garage") {
            navigate("/user/info/garage")
        } else if (item === "tewos") {
            navigate("/user/info/tewos")
        }
        console.log(`Clicked item: ${item}`);
    };
    return (
        <div>
            <div className="m-4 grid gap-4 sm:grid-cols-2">
                <div onClick={() => handleItemClick('thirdparty')} className="min-h-[100px] rounded-lg border border-slate-300 hover:border-indigo-300 p-4 flex items-center gap-4" style={{ minHeight: 'auto' }}>
                    <div className="w-7 h-7 relative">
                        <svg class="h-8 w-8 text-gray-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="flex-grow flex-col">
                        <div className="text-left text-gray-dark text-base font-medium font-Poppins">{t("about_ThirdParty")}</div>
                    </div>
                    <div className="w-6 h-6 relative">
                        <svg className="h-8 w-8 text-gray-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>

                <div onClick={() => handleItemClick('insurance')} className="min-h-[100px] rounded-lg border border-slate-300 hover:border-indigo-300 p-4 flex items-center gap-4" style={{ minHeight: 'auto' }}>
                    <div className="w-7 h-7 relative">
                        <img src={car} alt="Yene Mekina" className="w-full h-full" />
                    </div>
                    <div className="flex-grow flex-col">
                        <div className="text-left text-gray-dark text-base font-medium font-Poppins">{t("about_Insurance")}</div>
                    </div>
                    <div className="w-6 h-6 relative">
                        <svg className="h-8 w-8 text-gray-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="m-4 grid gap-4 sm:grid-cols-2">
                <div onClick={() => handleItemClick('roadfund')} className="min-h-[100px] rounded-lg border border-slate-300 hover:border-indigo-300 p-4 flex items-center gap-4" style={{ minHeight: 'auto' }}>
                    <div className="w-7 h-7 relative">
                        <img src={driving_School} alt="Yene Mekina" className="w-full h-full" />
                    </div>
                    <div className="flex-grow flex-col">
                        <div className="text-left text-gray-dark text-base font-medium font-Poppins">{t("about_RoadFund")}</div>
                    </div>
                    <div className="w-6 h-6 relative">
                        <svg className="h-8 w-8 text-gray-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>

                <div onClick={() => handleItemClick('bolo')} className="min-h-[100px] rounded-lg border border-slate-300 hover:border-indigo-300 p-4 flex items-center gap-4" style={{ minHeight: 'auto' }}>
                    <div className="w-7 h-7 relative">
                        <svg class="h-8 w-8 text-gray-dark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />  <line x1="15" y1="7" x2="15" y2="7.01" />  <line x1="18" y1="7" x2="18" y2="7.01" />  <line x1="21" y1="7" x2="21" y2="7.01" /></svg>
                    </div>
                    <div className="flex-grow flex-col">
                        <div className="text-left text-gray-dark text-base font-medium font-Poppins">{t("about_Bolo")}</div>
                    </div>
                    <div className="w-6 h-6 relative">
                        <svg className="h-8 w-8 text-gray-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="m-4 grid gap-4 sm:grid-cols-2">
                <div onClick={() => handleItemClick('driverlicence')} className="min-h-[100px] rounded-lg border border-slate-300 hover:border-indigo-300 p-4 flex items-center gap-4" style={{ minHeight: 'auto' }}>
                    <div className="w-7 h-7 relative">
                        <svg class="h-8 w-8 text-gray-dark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M5 7h7m-2 -2v2a5 8 0 0 1 -5 8m1 -4a7 4 0 0 0 6.7 4" />  <path d="M11 19l4 -9l4 9m-.9 -2h-6.2" /></svg>
                    </div>
                    <div className="flex-grow flex-col">
                        <div className="text-left text-gray-dark text-base font-medium font-Poppins">{t("about_DriversLicense")}</div>
                    </div>
                    <div className="w-6 h-6 relative">
                        <svg className="h-8 w-8 text-gray-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>

                <div onClick={() => handleItemClick('garage')} className="min-h-[100px] rounded-lg border border-slate-300 hover:border-indigo-300 p-4 flex items-center gap-4" style={{ minHeight: 'auto' }}>
                    <div className="w-7 h-7 relative">
                        <svg class="h-8 w-8 text-gray-dark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />  <path d="M7 12h14l-3 -3m0 6l3 -3" /></svg>
                    </div>
                    <div className="flex-grow flex-col">
                        <div className="text-left text-gray-dark text-base font-medium font-Poppins">{t("about_Garag")}</div>
                    </div>
                    <div className="w-6 h-6 relative">
                        <svg className="h-8 w-8 text-gray-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="m-4 grid gap-4 sm:grid-cols-2">
                <div onClick={() => handleItemClick('tewos')} className="min-h-[100px] rounded-lg border border-slate-300 hover:border-indigo-300 p-4 flex items-center gap-4" style={{ minHeight: 'auto' }}>
                    <div className="w-7 h-7 relative">
                        <svg class="h-8 w-8 text-gray-dark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M5 7h7m-2 -2v2a5 8 0 0 1 -5 8m1 -4a7 4 0 0 0 6.7 4" />  <path d="M11 19l4 -9l4 9m-.9 -2h-6.2" /></svg>
                    </div>
                    <div className="flex-grow flex-col">
                        <div className="text-left text-gray-dark text-base font-medium font-Poppins">{t("about_tewos")}</div>
                    </div>
                    <div className="w-6 h-6 relative">
                        <svg className="h-8 w-8 text-gray-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Infos