import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LangaugeFlag from '../partials/LanguageFlag';

import LanguageSelectButton from '../partials/LanguageSelectButton';
import LanguageSelectContainer from '../partials/LangaugeSelectContainer';


import {useNavigate} from 'react-router-dom';

var laender = [
    {value : 0, code: '', text: '-'},
    {value : 10, code: 'de', text: 'Deutsch'},
    {value : 20, code: 'sa', text: 'عربي'},
    {value : 30, code: 'au', text: 'English'},
]

export function LanguageMenuItem(){
    const navigate = useNavigate();
    const [language, setLanguage] = React.useState('');

    const handleChange = (event) => {
      setLanguage(event.target.value);
    };

    const changeLanguage = () => {
        navigate(`/GiveYourData/${language}`)
    }
    return(
            <>
            <LanguageSelectContainer>

                <Box sx={{marginTop:'10px', marginBottom: '10px',minWidth: 330, marginRight: '10px'}}>
                <FormControl fullWidth >
                    <InputLabel id="demo-simple-select-label">Sprache</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={language}
                    label="Sprache"
                    onChange={handleChange}
                    >
                        {
                            laender.map(land=>(
                                land.value == 0 ? <MenuItem key={land.value} value={land.value}>-</MenuItem>  :
                                <MenuItem key={land.value} value={land.value}>         
                                <LangaugeFlag
                                loading="lazy"
                                width="25"
                                height="15"
                                src={`https://flagcdn.com/w20/${land.code}.png`}
                                srcSet={`https://flagcdn.com/w40/${land.code}.png 2x`}
            
                                />
                                {land.text}
                                </MenuItem>
                                
                            ))
                        }
                    </Select>
                </FormControl>
                </Box>
                <LanguageSelectButton variant="contained" disableElevation onClick={changeLanguage}>
                    select
                </LanguageSelectButton>   
            </LanguageSelectContainer>
        </>
    )
};







