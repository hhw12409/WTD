import FlexBox from '@components/@shared/FlexBox/FlexBox';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';

const LoginPage = () => {
  const [name, setName] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  return (
    <FlexBox alignItems="center" justifyContent="center" height="100vh">
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-name" label="ID" value={name} onChange={handleChange} />
        <TextField id="outlined-uncontrolled" label="Password" type="password" />
      </Box>
      <Button variant="outlined">Login</Button>
    </FlexBox>
  );
};

export default LoginPage;
