import React from 'react';
import TextField from '@mui/material/TextField';
import UserDataContainer from '../partials/UserDataContainer';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LangaugeFlag from '../partials/LanguageFlag';
import { styled } from '@mui/material/styles';

import LanguageSelectButton from '../partials/LanguageSelectButton';



const Tabelle = styled('div')(({theme})=>({
    width: '100%',
}));

const Zeile1 = styled('div')(({theme})=>({
    display: 'flex',
    justifyContent: 'space-between'
}));



var faelle = [
    {value : 0, text: 'Allgemeinarzt'},
    {value : 10, text: 'Frauenarzt'},
    {value : 20, text: 'Sonstiges'},
];

var aerzte = {
    frauenArzt: 'Frauenarzt',
    allgemeinArzt: 'Allgemeinarzt',
    sonstiges: 'Sonstiges'
};

var warteZeitNutzerdaten = [
    {vorname : '', 
    nachname: '', 
    versicherungsnummer: 0, 
    arzt: aerzte.sonstiges, 
    wartezeit: 0, 
    zeitBeimArzt: 0}
];

var initialNutzer = {
    vorname : 'odai', 
    nachname: '', 
    versicherungsnummer: 0, 
    arzt: aerzte.sonstiges, 
    wartezeit: 0, 
    zeitBeimArzt: 0,
    vorgaenger: null,
    istBeimArzt: true
};
const listeDerPatientenX = [

    
    //Fall1
     {
        vorname : 'odai',
        nachname: 'almoued',
        versicherungsnummer : 23132423,
        arzt : 'frauenarzt',
        wartezeit : 15,
        zeitBeimArzt : 0
    },
    //Fall2
   {
        vorname : 'momo',
        nachname: 'kaka',
        versicherungsnummer : 231324123,
        arzt : 'frauenarzt',
        wartezeit : 7,
        zeitBeimArzt : 0
    },

    //Fall3
    {
        vorname : 'ahmed',
        nachname: 'kaaa',
        versicherungsnummer : 231324234,
        arzt : 'allgemeinerArzt',
        wartezeit : 0,
        zeitBeimArzt : 0
    },
    //Fall4
    {
        vorname : 'komo',
        nachname: 'kaka',
        versicherungsnummer : 231324123,
        arzt : 'frauenarzt',
        wartezeit : 0,
        zeitBeimArzt : 3
    },
    //Fall5
    {
        vorname : 'pomo',
        nachname: 'kaka',
        versicherungsnummer : 231324123,
        arzt : 'frauenarzt',
        wartezeit : 0,
        zeitBeimArzt : 20
    },
    //Fall6
    {
        vorname : 'rmo',
        nachname: 'kaka',
        versicherungsnummer : 231324123,
        arzt : 'frauenarzt',
        wartezeit : 0,
        zeitBeimArzt : 15
    }
]



var eingabeFelder = {
    '0' : [
        'Vorname', 
        'Nachname',
        'Versicherungsnummer', 
    ],
    '10' : [
        'Vorname', 
        'Nachname',
        'Versicherungsnummer',
    ],
    '20' : [
        'الاسم الاول', 
        'الاسم الاخير',
        'بطاقة التامين الصحي',
    ],
    '30' : [
        'First name', 
        'Last name',
        'insurance number',
    ],
}

const initialPatient = {
    vorname: '',
    nachname: '',
    versicherungsnummer: 0,
    arzt: ''
}
function UserData(props){
    var [patientenSicht, setPatientenSicht] = React.useState(false);
    var [windowSize, setWindowSize] = React.useState(0);
    const [arzt, setArzt] = React.useState('');
    const [currentPatient, setCurrentPatient] = React.useState(initialPatient);
    const [showCurrentPatient, setShowCurrentPatient] = React.useState(false);
    const [patienten, setPatienten] = React.useState([initialNutzer]);
 

    const handleChange = (event) => {
        setArzt(event.target.value);
        setCurrentPatient({...currentPatient, [event.target.name]: event.target.value})
    };

    function changeSicht(e){
        if(e.target.value == 'patientSicht'){
            setPatientenSicht(true)
            console.log(patientenSicht)
        } else {
            setPatientenSicht(false)
            console.log(patientenSicht)
        }
    }

    function getPatientByVorname(vorname){
        return patienten.find(p=>p.vorname==vorname);
    }

    function currentPatientErweitern(){
        var vorname = currentPatient.vorname;
        var nachname = currentPatient.nachname;
        var versicherungsnummer = currentPatient.versicherungsnummer;
        var arzt = currentPatient.arzt;
        
        if(state[state.length - 1]){
            var derLetztePatient = state[state.length - 1];
            console.log(derLetztePatient)
            var vornameDesLetztenPatienten = derLetztePatient.vorname;
            var vorgaenger = getPatientByVorname(vornameDesLetztenPatienten);
            
            var wartezeitVomCurrentPatienten = 0;
            var zeitBeimArztVomCurrentPatienten = 0;
    
            var currentPatientErweitert = {
                vorname : vorname,
                nachname : nachname,
                versicherungsnummer : versicherungsnummer,
                arzt : arzt,
                wartezeit : wartezeitVomCurrentPatienten,
                zeitBeimArzt : zeitBeimArztVomCurrentPatienten,
                vorgaenger : vornameDesLetztenPatienten,
                istBeimArzt : false
            }
            dispatch({type:'add', payload: currentPatientErweitert})
            setShowCurrentPatient(true);

        }
        else {
            var wartezeitVomCurrentPatienten = 0;
            var zeitBeimArztVomCurrentPatienten = 0;
    
            var currentPatientErweitert = {
                vorname : vorname,
                nachname : nachname,
                versicherungsnummer : versicherungsnummer,
                arzt : arzt,
                wartezeit : wartezeitVomCurrentPatienten,
                zeitBeimArzt : zeitBeimArztVomCurrentPatienten,
                vorgaenger : null,
                istBeimArzt : false
            }
            dispatch({type:'add', payload: currentPatientErweitert})
            setShowCurrentPatient(true);
        }

    }


    React.useEffect(()=>{
       setInterval(() => {
            dispatch({type: 'increment'});
        }, 1500);
    }, [])




    //const initialState = [initialNutzer];
    const initialState = [];
    var zahlen = [5,4,3,2,1];
    function reducer(state, action) {
        let array = []
        var list = [];
        switch (action.type) {
          case 'increment':
              for(let i = 0; i < state.length; i++){
                    if(!state[i - 1]){
                      list.push({...state[i],wartezeit:0, zeitBeimArzt: state[i].zeitBeimArzt + 1})
                    } 
                    else {
                        var wartezeit = 15 - state[i-1].zeitBeimArzt + state[i-1].wartezeit - 1; 
                        if(wartezeit <= 0){
                           var wartezeit = zahlen[Math.abs(wartezeit)%5];
                           console.log(wartezeit)
                           list.push({...state[i],wartezeit:wartezeit});
                        } 
 
                        else {
                            list.push({...state[i],wartezeit:wartezeit})
                        }

                    }
                }
                return list
            case 'add':
                console.log(action.payload)
                 array = [...state, action.payload];
                return array;
            case 'delete':
                console.log(action.payload);
                return [...state.filter(x=>x.vorname != action.payload)]
          default:
            throw new Error();
        }
    }
    const [state, dispatch] = React.useReducer(reducer, initialState);


    const removePatient = (e) => {
        var vorname = e.target.innerText;
        dispatch({type:'delete', payload:vorname})
    }

    
    if(patientenSicht){
        if(showCurrentPatient){
            return(
                <>
                                    <select name="" id="sicht" onChange={changeSicht}>
                        <option value="patientSicht">Patientensicht</option>
                        <option value="arztSicht">Arztsicht</option>
                    </select>
                    hallo {currentPatient.vorname}
                </>
            )
        }
        return(
            <>
                <UserDataContainer>
                    <select name="" id="sicht" onChange={changeSicht}>
                        <option value="patientSicht">Patientensicht</option>
                        <option value="arztSicht">Arztsicht</option>
                    </select>
                <h1>Bitte geben Sie Ihre Daten ein</h1>
                {
                eingabeFelder[props.language].map(eingabeFeld=>(
                    <>
                    <TextField
                    onChange={e=>setCurrentPatient({...currentPatient, [e.target.name]: e.target.value})}
                    name={eingabeFeld.toLowerCase()}
                    key={eingabeFeld.index}
                    helperText={`${eingabeFeld}*`}
                    id="demo-helper-text-aligned"
                    label={eingabeFeld}
                    />
    
                    </>
                    ))   
                }

                <Box component={'div'} sx={{width: 'fit-content' ,marginTop:'10px', marginBottom: '10px',minWidth: 230, marginRight: 'auto',  marginLeft: 'auto'}}>
                    <FormControl fullWidth >
                        <InputLabel id="demo-simple-select-label">Arzt</InputLabel>
                        <Select
                        name="arzt"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={arzt}
                        label="Arzt"
                        onChange={handleChange}
                        >
                            {
                                faelle.map(fall=>(
                                    <MenuItem key={fall.value} value={fall.text}>         
                                    {fall.text}
                                    </MenuItem>
                                    
                                ))
                            }
                        </Select>
                    </FormControl>
                </Box>

                <LanguageSelectButton onClick={currentPatientErweitern}>
                    speichern
                </LanguageSelectButton>
                </UserDataContainer>
            </>
        )
    } else {
        return(
            
            <UserDataContainer>
                <select name="" id="sicht" onChange={changeSicht}>
                    <option value="patientSicht">Patientensicht</option>
                    <option value="arztSicht">Arztsicht</option>
                </select>
                <Tabelle>
                    <Zeile1>
                        <p>vorname</p>
                        <p>nachname</p>
                        <p>versicherungsnummer</p>
                        <p>wartezeit</p>
                        <p>zeti Beim Arzt</p>
                    </Zeile1>
                    {
                        state.map(patient=>(

                            <Zeile1>
                                <p onClick={removePatient}>{patient.vorname}</p>
                                <p>{patient.nachname}</p>
                                <p>{patient.versicherungsnummer}</p>
                                <p>{patient.wartezeit}</p>
                                <p>{patient.zeitBeimArzt}</p>
                            </Zeile1>
                        ))
                    }

                </Tabelle>
            </UserDataContainer>
        )

    }


   
};



export default UserData;
