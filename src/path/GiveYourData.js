import React from 'react';

import '../App.css';

import UserData from '../components/UserData';

import {useParams} from 'react-router-dom';


function GiveYourData() {
    const {language} = useParams();
    return (
         <UserData language={language} />
    )
};

export default GiveYourData;
