import React from 'react';

import '../App.css';

import UserData from '../components/UserData';

import {useParams} from 'react-router-dom';

import { API, graphqlOperation } from 'aws-amplify';

import {createPatient} from '../graphql/mutations';
import {listPatients} from '../graphql/queries';


function GiveYourData() {
    const {language} = useParams();

    React.useEffect(async ()=>{
    })
    return (
         <UserData language={language} />
    )
};

export default GiveYourData;
