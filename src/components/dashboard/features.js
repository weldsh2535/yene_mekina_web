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


const FeaturesPage = () => {
    const { t } = useTranslation()

    const handleItemClick = (item) => {
        // Handle item click event
        console.log(`Clicked item: ${item}`);
    };
    return (
        <div>

            <div className="m-4 grid gap-4 sm:grid-cols-2">
                <div onClick={() => handleItemClick('Vehicle Inspection Center')} className="min-h-[100px] rounded-lg border border-slate-300 hover:border-indigo-300 p-4 flex items-center gap-4" style={{ minHeight: 'auto' }}>
                    <div className="w-7 h-7 relative">
                        <img src={insurance} alt="Yene Mekina" className="w-full h-full" />
                    </div>
                    <div className="flex-grow flex-col">
                        <div className="text-left text-orange text-base font-medium font-Poppins">{t("insurance_companies")}</div>
                        <div className="text-neutral-800 text-xs font-normal font-Inter">{t("showinsurance_companies")}</div>
                    </div>
                    <div className="w-6 h-6 relative">
                        <svg className="h-8 w-8 text-gray-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>

                <div className="min-h-[100px] rounded-lg border border-slate-300 hover:border-indigo-300 p-4 flex items-center gap-4" style={{ minHeight: 'auto' }}>
                    <div className="w-7 h-7 relative">
                        <img src={car} alt="Yene Mekina" className="w-full h-full" />
                    </div>
                    <div className="flex-grow flex-col">
                        <div className="text-left text-orange text-base font-medium font-Poppins">{t("bolo")}</div>
                        <div className="text-neutral-800 text-xs font-normal font-Inter">{t("showVehicleInspection")}</div>
                    </div>
                    <div className="w-6 h-6 relative">
                        <svg className="h-8 w-8 text-gray-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="m-4 grid gap-4 sm:grid-cols-2">
                <div className="min-h-[100px] rounded-lg border border-slate-300 hover:border-indigo-300 p-4 flex items-center gap-4" style={{ minHeight: 'auto' }}>
                    <div className="w-7 h-7 relative">
                        <img src={driving_School} alt="Yene Mekina" className="w-full h-full" />
                    </div>
                    <div className="flex-grow flex-col">
                        <div className="text-left text-orange text-base font-medium font-Poppins">{t("driving_School")}</div>
                        <div className="text-neutral-800 text-xs font-normal font-Inter">{t("showDerivingSchool")}</div>
                    </div>
                    <div className="w-6 h-6 relative">
                        <svg className="h-8 w-8 text-gray-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>

                <div className="min-h-[100px] rounded-lg border border-slate-300 hover:border-indigo-300 p-4 flex items-center gap-4" style={{ minHeight: 'auto' }}>
                    <div className="w-7 h-7 relative">
                        <img src={sparepart} alt="Yene Mekina" className="w-full h-full" />
                    </div>
                    <div className="flex-grow flex-col">
                        <div className="text-left text-orange text-base font-medium font-Poppins">{t("guage")}</div>
                        <div className="text-neutral-800 text-xs font-normal font-Inter">{t("neargarage")}</div>
                    </div>
                    <div className="w-6 h-6 relative">
                        <svg className="h-8 w-8 text-gray-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="m-4 grid gap-4 sm:grid-cols-2">
                <div className="min-h-[100px] rounded-lg border border-slate-300 hover:border-indigo-300 p-4 flex items-center gap-4" style={{ minHeight: 'auto' }}>
                    <div className="w-7 h-7 relative">
                        <img src={car} alt="Yene Mekina" className="w-full h-full" />
                    </div>
                    <div className="flex-grow flex-col">
                        <div className="text-left text-orange text-base font-medium font-Poppins">{t("vechile_sale_shop")}</div>
                        <div className="text-neutral-800 text-xs font-normal font-Inter">{t("showVehicleSales")}</div>
                    </div>
                    <div className="w-6 h-6 relative">
                        <svg className="h-8 w-8 text-gray-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>

                <div className="min-h-[100px] rounded-lg border border-slate-300 hover:border-indigo-300 p-4 flex items-center gap-4" style={{ minHeight: 'auto' }}>
                    <div className="w-7 h-7 relative">
                        <img src={oil_service} alt="Yene Mekina" className="w-full h-full" />
                    </div>
                    <div className="flex-grow flex-col">
                        <div className="text-left text-orange  text-base font-medium font-Poppins">{t("fuel_station")}</div>
                        <div className="text-neutral-800 text-xs font-normal font-Inter">{t("showGasStation")}</div>
                    </div>
                    <div className="w-6 h-6 relative">
                        <svg className="h-8 w-8 text-gray-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="m-4 grid gap-4 sm:grid-cols-2">
                <div className="min-h-[100px] rounded-lg border border-slate-300 hover:border-indigo-300 p-4 flex items-center gap-4">
                    <div className="w-7 h-7 relative">
                        <img src={car} alt="Yene Mekina" className="w-full h-full" />
                    </div>
                    <div className="flex-grow flex-col">
                        <div className="text-left text-orange text-base font-medium font-Poppins">{t("spare_part")}</div>
                        <div className="text-neutral-800 text-xs font-normal font-Inter">{t("spare_parts")}</div>
                    </div>
                    <div className="w-6 h-6 relative">
                        <svg className="h-8 w-8 text-gray-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default FeaturesPage;