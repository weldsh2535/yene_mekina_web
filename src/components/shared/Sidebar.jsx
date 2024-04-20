import React from 'react'
import logo from '../../assets/images/logo.jpg'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { HiOutlineLogout } from 'react-icons/hi'
import { useTranslation } from 'react-i18next';
const linkClasses =
    'flex items-center gap-2 font-light px-3 py-2 no-underline hover:bg-neutral-200 hover:no-underline active:bg-neutral-200 rounded-sm text-base'

const Sidebar = () => {
    const { pathname } = useLocation()
    const { t } = useTranslation()
    return (
        <div className='bg-neutral-100 w-60 p-3 flex flex-col text-black'>
            <div className='flex items-center gap-2 px-1 py-3'>
                <img src={logo} width="65px" height="56px" alt="Yene Mekina" />
                <span className='text-gray-dark text-lg' >Yene Mekina</span>
            </div>
            <div className="py-8 flex flex-1 flex-col gap-0.5">
                <Link to='/user' className={classNames(pathname === '/user' ? 'bg-white text-gray-dark' : 'text-neutral-400', linkClasses)}>
                    <span className='text-xl'>  <svg class="h-8 w-8 text-black-low" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />  <polyline points="9 22 9 12 15 12 15 22" /></svg></span>
                    {t("home")}
                </Link>
                <Link to='/user/feature' className={classNames(pathname === '/user/feature' ? 'bg-white text-gray-dark' : 'text-neutral-400', linkClasses)}>
                    <span className='text-xl'> <svg class="h-8 w-8 text-black-low" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="4" y="4" width="6" height="6" rx="1" />  <rect x="4" y="14" width="6" height="6" rx="1" />  <rect x="14" y="14" width="6" height="6" rx="1" />  <line x1="14" y1="7" x2="20" y2="7" />  <line x1="17" y1="4" x2="17" y2="10" /></svg></span>
                    {t("feature")}
                </Link>
                <Link to='/user/setting' className={classNames(pathname === '/user/setting' ? 'bg-white text-gray-dark' : 'text-neutral-400', linkClasses)}>
                    <span className='text-xl'> <svg class="h-8 w-8 text-black-low" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />  <circle cx="12" cy="12" r="3" /></svg></span>
                    {t("setting")}
                </Link>
                <Link to='/user/info' className={classNames(pathname === '/user/info' ? 'bg-white text-gray-dark' : 'text-neutral-400', linkClasses)}>
                    <span className='text-xl'> <svg class="h-8 w-8 text-black-low" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="12" y1="16" x2="12" y2="12" />  <line x1="12" y1="8" x2="12.01" y2="8" /></svg></span>
                    {t("info")}
                </Link>
            </div>
            <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-200'>
                <div className={classNames(linkClasses, 'cursor-pointer text-red-500')}>
                    <span className="text-xl">
                        <HiOutlineLogout />
                    </span>
                    {t("logout")}
                </div>
            </div>
        </div>
    )
}
function SidebarLink({ item }) {
    return (
        <Link to='/info' className={classNames('text-white', linkClasses)}>
            <span className='text-xl'> <svg class="h-8 w-8 text-black-low" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="12" y1="16" x2="12" y2="12" />  <line x1="12" y1="8" x2="12.01" y2="8" /></svg></span>
            Infos
        </Link>
    );
}

export default Sidebar