import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./login.css";

const LoginForm = ({ status }: { status: boolean }) => {
    const [data, setData] = useState({
        username: "",
        password: "",
    })

    return (
        <div>
            {status && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="login-form"
                >
                    <div className="login-form-container">
                        <h1>Đăng nhập</h1>
                        <form>
                            <div className="login-form-group">
                                <label htmlFor="email">Tên đăng nhập</label>
                                <input
                                    type="email"
                                    maxLength={50}
                                    id="email"
                                    placeholder="Vui lòng nhập tên đăng nhập của bạn..."
                                    required={true} />
                            </div>
                            <div className="login-form-group">
                                <label htmlFor="password">Mật khẩu</label>
                                <input
                                    type="password"
                                    id="password"
                                    required={true}
                                    autoComplete="true"
                                    placeholder="Vui lòng nhập mật khẩu của bạn..." />
                            </div>
                            <div className="login-form-group">
                                <button className="button-system">Login</button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            )}
        </div>
    );
};


export default LoginForm;