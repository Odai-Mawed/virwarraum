import React from 'react';
import TextField from '@mui/material/TextField';
import UserDataContainer from '../partials/UserDataContainer';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';

import LanguageSelectButton from '../partials/LanguageSelectButton';


const Tabelle = styled('div')(({theme})=>({
    width: '60%',
    [theme.breakpoints.down('md')] : {
        width:'90%'
    },
    boxShadow: "1px -1px 14px 0px #818181", 
    marginTop: "30px"
}));

const Zeile1 = styled('div')(({theme})=>({
    display: 'flex',
    justifyContent: 'space-between'
}));

const Zeile0 = styled('div')(({theme})=>({
    display: 'flex',
    justifyContent: 'space-between',
    boxShadow: '0px 7px 18px 0px #818181', 
}));


const Text = styled('p')(({theme})=>({
    minWidth: '25%',
    [theme.breakpoints.down('md')] : {
        minWidth:'20%'
    },
    textAlign: 'center',
    padding:'10px'
}));

const Ueberschrift = styled('h1')(({theme})=>({
    textAlign: 'center'
}));


const VornameText = styled('p')(({theme})=>({
   color:'red',
   minWidth: '25%',
   [theme.breakpoints.down('md')] : {
       minWidth:'20%'
   },
   textAlign: 'center',
   padding:'10px'
}));

const DeleteButton = styled(Button)(({theme})=>({
    [theme.breakpoints.down('md')] : {
        fontSize:'10px'
    },
}));



var faelle = [
    {value : 0, text: 'Allgemeinarzt'},
    {value : 10, text: 'Frauenarzt'},
    {value : 20, text: 'Sonstiges'},
];

var sichtenArray = [
    {value : 0, text: 'patientSicht'},
    {value : 10, text: 'arztsicht'},
]

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
    wartezeit: 0, 
    zeitBeimArzt: 0,

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
    var [patientenSicht, setPatientenSicht] = React.useState(true);
    const [arzt, setArzt] = React.useState('');
    const [currentPatient, setCurrentPatient] = React.useState(initialPatient);
    const [showCurrentPatient, setShowCurrentPatient] = React.useState(false);
    const [patienten, setPatienten] = React.useState([initialNutzer]);
    const [sekunden, setSekunden] = React.useState(new Date().getSeconds());
    const [minuten, setMinuten] = React.useState(new Date().getMinutes());
    const [stunden, setStunden] = React.useState(new Date().getHours());
    const [neuMinuten, setNeuMinuten] = React.useState(0);
    const [neuStunden, setNeuStunden] = React.useState(0);
    const [neuSekunden, setNeuSekunden] = React.useState(0);
    const [sichten, setSichten] = React.useState('patientSicht')

    const handleChange2 = (event)=>{
        setSichten(event.target.value);
        changeSicht(event.target.value)
    }
    const handleChange = (event) => {
        setArzt(event.target.value);
        setCurrentPatient({...currentPatient, [event.target.name]: event.target.value})
    };

    function changeSicht(x){
        if(x == 'patientSicht'){
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

    async function currentPatientErweitern(){
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
                wartezeit : wartezeitVomCurrentPatienten,
                zeitBeimArzt : zeitBeimArztVomCurrentPatienten,

            }

            var current = new Date();
            var neu = new Date(current.getTime() + 60*60000)
            console.log(neu) 
            setNeuSekunden(neu.getSeconds());
            setNeuMinuten(neu.getMinutes());
            setNeuStunden(neu.getHours());

            dispatch({type:'add', payload: currentPatientErweitert})
            setShowCurrentPatient(true);

        }
        else {
            var wartezeitVomCurrentPatienten = 0;
            var zeitBeimArztVomCurrentPatienten = 0;
    
            var currentPatientErweitert = {
                id:vorname,
                vorname : vorname,
                nachname : nachname,
                versicherungsnummer : versicherungsnummer,
                
                wartezeit : wartezeitVomCurrentPatienten,
                zeitBeimArzt : zeitBeimArztVomCurrentPatienten,

            }

            var current = new Date();
            setNeuSekunden(new Date(current.getTime() + 60*60000).getSeconds());
            setNeuMinuten(new Date(current.getTime() + 60*60000).getMinutes());
            setNeuStunden(new Date(current.getTime() + 60*60000).getHours());

            dispatch({type:'add', payload: currentPatientErweitert})
            setShowCurrentPatient(true);
        }

    }


    React.useEffect(()=>{
       setInterval(() => {
            dispatch({type: 'increment'});
            setSekunden(new Date().getSeconds())
            setMinuten(new Date().getMinutes())
            setStunden(new Date().getHours())
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


    const removePatient = (patient) => {
        console.log(patient)
        dispatch({type:'delete', payload:patient})
    }

    
    if(patientenSicht){
        if(false){
            return(
                <>
                    <UserDataContainer>
                        <select name="" id="sicht" onChange={changeSicht}>
                            <option value="patientSicht">Patientensicht</option>
                            <option value="arztSicht">Arztsicht</option>
                        </select>

                        <CardContent sx={{  display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            boxShadow: "-1px 1px 10px 0px #8f8a8a",
                            margin: "68px"}}>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Hallo <span style={{fontWeight:'bolder'}}>{currentPatient.vorname.toUpperCase()}</span> es ist gerade: 
                            </Typography>
                            <Typography variant="h5" component="div">
                                {stunden<10?`0${stunden}`:stunden}:
                                {minuten<10?`0${minuten}`:minuten}:
                                {sekunden<10?`0${sekunden}`:sekunden}Uhr
                            </Typography>
                            <Typography sx={{ mb: 1.5, textAlign:'center' }} color="text.secondary">
                                Es sind gerade 4 Leute vor Ihnen
                            </Typography>
                            <Typography variant="body2" sx={{textAlign:'center'}}>
                                Das heißt Sie haben eine Wartezeit von ungefähr 60min also um
                                <br />
                                {neuStunden<10?`0${neuStunden}`:neuStunden}:
                                {neuMinuten<10?`0${neuMinuten}`:neuMinuten}:
                                {neuSekunden<10?`0${neuSekunden}`:neuSekunden}Uhr
                            </Typography>
                            </CardContent>
                            <CardActions>
                            <Button size="small">ZURÜCK</Button>
                        </CardActions>
                    </UserDataContainer>
                </>
            )
        }
        return(
            <>
                <UserDataContainer>
                    <Select
                        name="sichten"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sichten}
                        label="Sicht"
                        onChange={handleChange2}
                        >
                            {
                                sichtenArray.map(sicht=>(
                                    <MenuItem key={sicht.value} value={sicht.text}>         
                                        {sicht.text}
                                    </MenuItem>
                                    
                                ))
                            }
                    </Select>
                    <Ueberschrift>Bitte geben Sie Ihre Daten ein</Ueberschrift>
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
                <Select
                    name="sichten"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sichten}
                    label="Sicht"
                    onChange={handleChange2}
                    >
                        {
                            sichtenArray.map(sicht=>(
                                <MenuItem key={sicht.value} value={sicht.text}>         
                                    {sicht.text}
                                </MenuItem>
                                
                            ))
                        }
                </Select>

                <Tabelle>
                    <Zeile0 sx={{borderBottom:'1px solid black'}}>
                        <Text>Vorname</Text>

                        <Text>Wartezeit</Text>
                        <Text>Zeit Beim Arzt</Text>
                        <Text></Text>

                    </Zeile0>
                    {   
                        state.map(patient=>(
                            <Zeile1>
                                <VornameText>{patient.vorname}</VornameText>
                                <Text>{patient.wartezeit}</Text>
                                <Text>{patient.zeitBeimArzt}</Text>
                                <DeleteButton variant="text" onClick={()=>removePatient(patient.vorname)}>LÖSCHEN</DeleteButton>
                            </Zeile1>
                        ))
                    }
                </Tabelle>
            </UserDataContainer>
        )
    }   
};



export default UserData;
