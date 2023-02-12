import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Link } from '@mui/material';

function Navbar() {
    // const preventDefault = (event) => event.preventDefault();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              typography: 'body1',
              '& > :not(style) + :not(style)': {
                ml: 2,
              },
            }}
            // onClick={preventDefault}
          >
            <Link href="/" underline="none" color="inherit">
              Home
            </Link>
            <Link href="/characters" underline="none" color="inherit">
              Characters
            </Link>
            <Link href="/episodes" underline="none" color="inherit">
              Episodes
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
