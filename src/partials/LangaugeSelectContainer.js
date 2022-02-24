import { styled } from '@mui/material/styles';

const LanguageSelectContainer = styled('div')(({theme})=>({
    margin: '10px auto',
    width: '500px',
    padding: '30px',
    display: 'flex',
    [theme.breakpoints.up('sm')] : {
      flexDirection : 'column'
    }
  
}));



export default LanguageSelectContainer;