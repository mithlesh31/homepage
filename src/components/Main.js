import React, { useState } from 'react';

import base64 from 'base-64';

import DataCard from './DataCard';
import './Main.css';

const Main = () => {
    const [ email, onEmailChange ] = useState(null);
    const [password, onPassChange] = useState(null);
    const [error, onError] = useState(null);
    const [data, onChangeData] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        const api = 'https://reqres.in/api/login';
        let headers = new Headers()
        headers.set('Authorization', 'Basic ' + base64.encode(email + ":" + password));
        fetch(api, {
            method: 'get',
            headers
        }).then(res => {
            return res.json().then(res1 => onChangeData(res1));
        }).then(data => {
            console.log(data);
            onError("error");
        });
    }

    return (
        <div className="home-wrapper">
            {!data ? (
            <form onSubmit={handleSubmit}>
                <div className="field-form">
                    <span>Email:</span> 
                    <input type="email" name="email" value={email} onChange={e => onEmailChange(e.target.value)}/></div>
                <div  className="field-form">
                    <span>Password</span> 
                    <input type="password" name="password" value={password} onChange={e => onPassChange(e.target.value)}/>
                </div>
                <div className='error'>{error}</div>
                <button type="submit" className="btn btn-login">Login</button>
            </form>
            ) : (
                    <DataCard data={data.data} currentPage={data.page} totalPage={data.total_page} />
            )}
        </div>
    );
};

export default Main;