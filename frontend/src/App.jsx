// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


//Starts here.

import React from 'react';
import { AppBar, Toolbar, Typography, Container, CssBaseline, IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import PersonIcon from '@mui/icons-material/Person';  // Importing Person icon
import MenuIcon from '@mui/icons-material/Menu';      // Importing Menu icon for hamburger menu

// Use styles for the layout
const useStyles = makeStyles({
  root: {
    backgroundColor: 'white',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
  },
  navbar: {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Shadow for navbar
  },
  title: {
    flexGrow: 1,
  },
  content: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  profile: {
    fontSize: 30, // Adjust the size of the human figure icon
  },
  menuButton: {
    marginRight: 16, // Add some space to the right of the menu icon
  }
});

// Create a custom theme to override AppBar color
const theme = createTheme({
  palette: {
    primary: {
      main: '#cac9c9', // Set the primary color of the navbar to light grey
    },
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Apply baseline styles */}
      <div className={classes.root}>
        {/* Navbar */}
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            {/* Menu icon on the left */}
            <IconButton edge="start" color="inherit" className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Translation Web App
            </Typography>
            {/* Profile logo on the right using Person icon */}
            <IconButton edge="end" color="inherit">
              <PersonIcon className={classes.profile} />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Page content */}
        <Container maxWidth={false} className={classes.content}>
          <Typography variant="h4" gutterBottom align="center">
            {/* Your welcome message can go here */}
          </Typography>
          <p align="center">WELCOME...</p>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;





