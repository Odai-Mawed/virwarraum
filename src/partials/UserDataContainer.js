import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const UserDataContainer = styled(Box)(({theme})=>({
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > :not(style)': { m: 1 }
}));



export default UserDataContainer;