import React, { useState, useEffect } from 'react'
import accident_report from '../../assets/menus/accidentcar.jpg';
import bolo from '../../assets/menus/bolo.jpg';
import document from '../../assets/menus/document.jpeg';
import driver_license from '../../assets/menus/driverlience.jpg';
import insurance from '../../assets/menus/insurance.jpg';
import oil_service from '../../assets/menus/oilservices.jpg';
import road_fund from '../../assets/menus/roadfund.jpg';
import third_party from '../../assets/menus/thirdparty.jpg';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import './home.css'
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { Carousel } from "@material-tailwind/react";

const HomePage = () => {
    const { t } = useTranslation()

    const adverts = useSelector((state) => state.notify.notifyData) || [];
    console.log(adverts)
    const handleItemClick = (item) => {
        // Handle item click event
        console.log(`Clicked item: ${item}`);
    };

    return (
        <div>
            <>
                <Carousel
                    className="rounded-xl"
                    navigation={({ setActiveIndex, activeIndex, length }) => (
                        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                            {new Array(length).fill("").map((_, i) => (
                                <span
                                    key={i}
                                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                        }`}
                                    onClick={() => setActiveIndex(i)}
                                />
                            ))}
                        </div>
                    )}
                >
                    <img
                        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                        alt="image 2"
                        className="h-full w-full object-cover"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                        alt="image 3"
                        className="h-full w-full object-cover"
                    />
                </Carousel>
                {adverts.length > 0 && (
                    <div className='h-64 justify-self-end'>
                        <div className='image-gallery-container'>
                            <ReactImageGallery
                                originalHeight={200}
                                originalWidth={300}
                                thumbnailHeight={200}
                                thumbnailWidth={300}
                                items={adverts.map((advert) => ({
                                    original:
                                        'https://mob.tewostechsolutions.com/storage/ads/' + advert.image,
                                    thumbnail:
                                        'https://mob.tewostechsolutions.com/storage/ads/' + advert.image,
                                }))}
                                showBullets={true}
                                showNav={true}
                                showThumbnails={false}
                                showFullscreenButton={false}
                                showPlayButton={false}
                                autoPlay={true}
                                slideInterval={3000}
                            />
                        </div>
                    </div>
                )}

                <p className="text-center text-gray-black">Services</p>
            </>
            <div className="m-4 grid sm:grid-cols-2 gap-4">
                <div className="min-h-[100px] rounded-lg border border-slate-300 hover:border-indigo-300 p-4 flex items-center gap-4" style={{ minHeight: 'auto' }}>
                    <div className="w-7 h-7 relative">
                        <img src={third_party} alt="Yene Mekina" className="w-full h-full" />
                    </div>
                    <div className="flex-grow flex-col">
                        <div className="text-left text-orange text-base font-medium font-Poppins">{t("third_party")}</div>
                        <div className="text-neutral-800 text-xs font-normal font-Inter">{t("third_party_des")}</div>
                    </div>
                    <div className="w-6 h-6 relative">
                        <svg className="h-8 w-8 text-gray-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>

                <div className="min-h-[100px] rounded-lg border border-slate-300 hover:border-indigo-300 p-4 flex items-center gap-4" style={{ minHeight: 'auto' }}>
                    <div className="w-7 h-7 relative">
                        <img src={insurance} alt="Yene Mekina" className="w-full h-full" />
                    </div>
                    <div className="flex-grow flex-col">
                        <div className="text-left text-orange text-base font-medium font-Poppins">{t("full_insurance")}</div>
                        <div className="text-neutral-800 text-xs font-normal font-Inter">{t("full_insurance_des")}</div>
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
                        <img src={road_fund} alt="Yene Mekina" className="w-full h-full" />
                    </div>
                    <div className="flex-grow flex-col">
                        <div className="text-left text-orange text-base font-medium font-Poppins">{t("road_fund")}</div>
                        <div className="text-neutral-800 text-xs font-normal font-Inter">{t("road_fund_des")}</div>
                    </div>
                    <div className="w-6 h-6 relative">
                        <svg className="h-8 w-8 text-gray-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>

                <div className="min-h-[100px] rounded-lg border border-slate-300 hover:border-indigo-300 p-4 flex items-center gap-4" style={{ minHeight: 'auto' }}>
                    <div className="w-7 h-7 relative">
                        <img src={driver_license} alt="Yene Mekina" className="w-full h-full" />
                    </div>
                    <div className="flex-grow flex-col">
                        <div className="text-left text-orange text-base font-medium font-Poppins">{t("driver_license")}</div>
                        <div className="text-neutral-800 text-xs font-normal font-Inter">{t("driver_license_des")}</div>
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
                        <img src={bolo} alt="Yene Mekina" className="w-full h-full" />
                    </div>
                    <div className="flex-grow flex-col">
                        <div className="text-left text-orange text-base font-medium font-Poppins">{t("bolo")}</div>
                        <div className="text-neutral-800 text-xs font-normal font-Inter">{t("bolo_des")}</div>
                    </div>
                    <div className="w-6 h-6 relative">
                        <svg className="h-8 w-8 text-gray-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>

                <div className="min-h-[100px] rounded-lg border border-slate-300 hover:border-indigo-300 p-4 flex items-center gap-4" style={{ minHeight: 'auto' }}>
                    <div className="w-7 h-7 relative">
                        <img src={document} alt="Yene Mekina" className="w-full h-full" />
                    </div>
                    <div className="flex-grow flex-col">
                        <div className="text-left text-orange  text-base font-medium font-Poppins">{t("documents")}</div>
                        <div className="text-neutral-800 text-xs font-normal font-Inter">{t("documents_des")}</div>
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
                        <img src={oil_service} alt="Yene Mekina" className="w-full h-full" />
                    </div>
                    <div className="flex-grow flex-col">
                        <div className="text-left text-orange text-base font-medium font-Poppins">{t("oil_service")}</div>
                        <div className="text-neutral-800 text-xs font-normal font-Inter">{t("oil_service_des")}</div>
                    </div>
                    <div className="w-6 h-6 relative">
                        <svg className="h-8 w-8 text-gray-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>

                <div className="min-h-[100px] rounded-lg border border-slate-300 hover:border-indigo-300 p-4 flex items-center gap-4" style={{ minHeight: 'auto' }}>
                    <div className="w-7 h-7 relative">
                        <img src={accident_report} alt="Yene Mekina" className="w-full h-full" />
                    </div>
                    <div className="flex-grow flex-col">
                        <div className="text-left text-orange text-base font-medium font-Poppins">{t("accident_report")}</div>
                        <div className="text-neutral-800 text-xs font-normal font-Inter">{t("accident_dec")}</div>
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

export default HomePage