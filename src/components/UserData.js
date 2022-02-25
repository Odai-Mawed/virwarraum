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

import '../App.css';

import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';

import LanguageSelectButton from '../partials/LanguageSelectButton';
import { SignalWifiStatusbarNullRounded } from '@mui/icons-material';


const Tabelle = styled('div')(({theme})=>({
    width: '60%',
    [theme.breakpoints.down('md')] : {
        width:'90%'
    },
    boxShadow: "1px -1px 14px 0px #818181", 
    marginTop: "30px",
    '&:hover' : {
        fontWeigt: '900',
        boxShadow: "-1px 1px 20px 5px #8f8a8a"
    }
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
        
    },
    fontSize: "0.6rem"
}));

const CostumCardContent = styled(CardContent)(({theme})=>({
    '&:hover' : {
        fontWeigt: '900',
        boxShadow: "-1px 1px 20px 5px #8f8a8a"
    }
}));



var faelle = [
    {value : 0, text: 'Allgemeinarzt'},
    {value : 10, text: 'Frauenarzt'},
    {value : 20, text: 'Sonstiges'},
];

var sichtenArray = [
    {value : 0, text: 'patientSicht'},
    {value : 10, text: 'arztsicht'},
    {value : 20, text: 'extraSicht'},
]

var aerzte = {
    '0' : [
        {value : 0, text: 'Allgemeinarzt'},
        {value : 10, text: 'Frauenarzt'},
        {value : 20, text: 'Sonstiges'},
    ]
    ,
    '10' : [
        {value : 0, text: 'Allgemeinarzt'},
        {value : 10, text: 'Frauenarzt'},
        {value : 20, text: 'Sonstiges'},
    ]
    ,
    '20' : 
    [
        {value : 0, text: 'طبيب عام'},
        {value : 10, text: 'دكتور امراض نساء'},
        {value : 20, text: 'غيره'},
    ]
    ,
    '30' : 
    [
        {value : 0, text: 'general practitioner'},
        {value : 10, text: 'gynecologist'},
        {value : 20, text: 'miscellaneous'},
    ]
    ,
};


var initialNutzer = {
    vorname : 'odai', 
    nachname: '', 
    versicherungsnummer: 0, 
    wartezeit: 0, 
    zeitBeimArzt: 0,

};




var eingabeFelder = {
    '0' : [
        'Vorname', 
        'Nachname',
        'Versicherungsnummer', 
        {'ueberschrift' : 'Bitte geben Sie Ihre Daten ein'}
    ],
    '10' : [
        'Vorname', 
        'Nachname',
        'Versicherungsnummer',
        {'ueberschrift' : 'Bitte geben Sie Ihre Daten ein'}
    ],
    '20' : [
        'الاسم الاول', 
        'الاسم الاخير',
        'بطاقة التامين الصحي',
        {'ueberschrift' : 'الرجاءادخال المعلومات المطلوبة'}
    ],
    '30' : [
        'First name', 
        'Last name',
        'insurance number',
        {'ueberschrift' : 'Bitte geben Sie Ihre Daten ein'}
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
            document.getElementById('tabelle').classList.add('bewegen')
            setTimeout(() => {
                setPatientenSicht(true)
                setShowCurrentPatient(true);
                console.log(patientenSicht)
            }, 1500);
        } else if(x == 'extraSicht'){
            setPatientenSicht(true)
            setShowCurrentPatient(false);
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
         
            setNeuSekunden(new Date(current.getTime() + state.length*15*60000).getSeconds());
            setNeuMinuten(new Date(current.getTime() + state.length*15*60000).getMinutes());
            setNeuStunden(new Date(current.getTime() + state.length*15*60000).getHours());

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
            setNeuSekunden(new Date(current.getTime() + state.length*15*60000).getSeconds());
            setNeuMinuten(new Date(current.getTime() + state.length*15*60000).getMinutes());
            setNeuStunden(new Date(current.getTime() + state.length*15*60000).getHours());

            dispatch({type:'add', payload: currentPatientErweitert})
            setShowCurrentPatient(true);
            console.log(state)
        }

    }


    React.useEffect(()=>{
       setInterval(() => {
            dispatch({type: 'increment'});
            setSekunden(new Date().getSeconds())
            setMinuten(new Date().getMinutes())
            setStunden(new Date().getHours())
        }, 1000);
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
        if(showCurrentPatient){
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

                        <CostumCardContent sx={{  display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            boxShadow: "-1px 1px 10px 0px #8f8a8a",
                            margin: "68px"}}>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {
                                    props.language == 20 ?
                                    <>
                                     مرحبا <span style={{fontWeight:'bolder', fontSize: "16px", textDecoration: 'underline'}}>{currentPatient.vorname.toUpperCase()}</span> الساعة الان: 
                                    </>
                                    :
                                    <>
                                        Hallo <span style={{fontWeight:'bolder', fontSize: "16px", textDecoration: 'underline'}}>{currentPatient.vorname.toUpperCase()}</span> es ist gerade: 
                                    </>
                                }
                            
                            </Typography>
                            <Typography variant="h5" component="div">
                                {
                                    props.language == 20 ?
                                    <>
                                        {stunden<10?`0${stunden}`:stunden}:
                                        {minuten<10?`0${minuten}`:minuten}:
                                        {sekunden<10?`0${sekunden}`:sekunden} 
                                    </>
                                    :
                                    <>
                                        {stunden<10?`0${stunden}`:stunden}:
                                        {minuten<10?`0${minuten}`:minuten}:
                                        {sekunden<10?`0${sekunden}`:sekunden} Uhr
                                    </>
                                }
                            </Typography>
                            <Typography sx={{ mb: 1.5, textAlign:'center' }} color="text.secondary">
                                { props.language == 20 ?
                                <>
                                هناك حاليا <span style={{fontWeight:'bolder'}}>{state.length - 1}</span> اشخاص قبلك 
                                </>
                                :
                                <>
                                Es sind gerade <span style={{fontWeight:'bolder'}}>{state.length - 1}</span> Personen vor Ihnen
                                </>
                                }
                            </Typography>
                            <Typography variant="body2" sx={{textAlign:'center'}}>
                                {props.language == 20 ?
                                <>
                                وقت الانتظار حوالي <span style={{fontWeight:'bolder'}}>{(state.length - 1) * 15} دقيقة</span> في الساعة
                                <br />
                                <span style={{fontWeight:'bolder'}}>
                                {neuStunden<10?`0${neuStunden}`:neuStunden}:
                                {neuMinuten<10?`0${neuMinuten}`:neuMinuten}:
                                {neuSekunden<10?`0${neuSekunden}`:neuSekunden} 
                                </span>
                                </>
                                :
                                <>
                                Ihre Wartezeit beträgt ca. <span style={{fontWeight:'bolder'}}>{(state.length - 1) * 15}min</span> also um
                                <br />
                                <span style={{fontWeight:'bolder'}}>
                                {neuStunden<10?`0${neuStunden}`:neuStunden}:
                                {neuMinuten<10?`0${neuMinuten}`:neuMinuten}:
                                {neuSekunden<10?`0${neuSekunden}`:neuSekunden} Uhr
                                </span>
                                </>
                                }
                            </Typography>
                            </CostumCardContent>
                            <CardActions>
                            <Button size="small" onClick={()=>changeSicht('extraSicht')}>ZURÜCK</Button>
                        </CardActions>
                    </UserDataContainer>
                </>
            )
        }
        return(
            <>
                <UserDataContainer id='userContainer'>
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
                    <Ueberschrift>{eingabeFelder[props.language][3].ueberschrift}</Ueberschrift>
                {
                eingabeFelder[props.language].map(eingabeFeld=>(
                    <>
                    {
                        typeof eingabeFeld == 'string' ?
                    
                    <TextField
                    onChange={e=>setCurrentPatient({...currentPatient, [e.target.name]: e.target.value})}
                    name={eingabeFeld.toLowerCase()}
                    key={eingabeFeld.index}
                    helperText={`${eingabeFeld}*`}
                    id="demo-helper-text-aligned"
                    label={eingabeFeld}
                    />
                    :
                    null
                    }
                    </>
                    ))   
                }

                <Box component={'div'} sx={{width: 'fit-content' ,marginTop:'10px', marginBottom: '10px',minWidth: 230, marginRight: 'auto',  marginLeft: 'auto'}}>
                    <FormControl fullWidth >
                        <InputLabel id="demo-simple-select-label">{props.language == 20 ? 'طبيب' : 'Aqrzt'}</InputLabel>
                        <Select
                        name="Asrzt"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={arzt}
                        label={'Arzt'}
                        onChange={handleChange}
                        >
                            {
                                aerzte[props.language].map(fall=>(
                                    <MenuItem key={fall.value} value={fall.text}>         
                                    {fall.text}
                                    </MenuItem>
                                    
                                ))
                            }
                        </Select>
                    </FormControl>
                </Box>

                <LanguageSelectButton onClick={currentPatientErweitern}>
                    {props.language == 20 ? 'حفظ' : 'Speichern'}
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

                <Tabelle id='tabelle' className=''>
                    <Zeile0 sx={{borderBottom:'1px solid black'}}>
                        <Text>Vorname</Text>

                        <Text>Wartezeit</Text>
                        <Text>Zeit Beim Arzt</Text>
                        <Text></Text>

                    </Zeile0>
                    {   
                        state.map(patient=>(
                            <Zeile1>
                                <VornameText>{patient.vorname.toUpperCase()}</VornameText>
                                <Text>{patient.wartezeit}min</Text>
                                <Text>{patient.zeitBeimArzt}min</Text>
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
