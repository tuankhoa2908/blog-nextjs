'use client';
import React, { useEffect, useState } from "react";
import './header.css';
import { GiNewShoot } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import Link from "next/link";
import LoginForm from "../login/login";

const Header = () => {
    const [isLoginOpen, setLoginOpen] = useState(false);
    return (
        <>
            <header id='header' className="header-top d-flex align-items-center">
                <div className="container-xxl container-xl d-flex align-items-center justify-content-between">
                    <a href="/" className="logo d-flex align-items-center gap-3">
                        <GiNewShoot />
                        News Feed
                    </a>
                    <div className="title d-flex align-items-center gap-2 ">
                        <Link href="/"><FaHome className="fs-1" /></Link>
                        <p className="mb-0">Contact Us</p>
                        <p className="mb-0">Donate me</p>
                    </div>
                    <div className="login-area d-flex align-items-center gap-2">
                        <button className="button-header" onClick={() => setLoginOpen(true)}>Đăng nhập</button>
                        \
                        <button className="button-header" onClick={() => setLoginOpen(true)}>Đăng ký</button>
                    </div>

                </div>
            </header>
            <LoginForm status={isLoginOpen} />
        </>
    )
}

export default Header;