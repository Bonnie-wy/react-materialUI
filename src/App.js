import React, { useState } from 'react';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import { FormControlLabel } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles'
import { green, orange } from '@material-ui/core/colors'
import 'fontsource-roboto'

import { Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import AppBar from '@material-ui/core/AppBar'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: 15,
    marginBottom: 15,
    color: 'white',
    padding: '5px 30px',
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
  }
})

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15,
    }
  },
  // palette: {
  //   primary: {
  //     main: green[500],
  //   },
  //   secondary: {
  //     main: orange[500],
  //   },
  // }
})

function ButtonStyled() {
  const classes = useStyles()
  return <Button className={classes.root}>TEST STYLED BUTTON</Button>
}

function CheckboxExample(){
  const [checked, setChecked] = useState(true);

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            icon={<SaveIcon />}
            checkedIcon={<SaveIcon />}
            onChange={(e)=>setChecked(e.target.checked)}
            inputProps={{
              'aria-label': 'secondary checkbox'
            }}
          />
        }
        label="Testing Checkout"
      />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <div className="App">
          <header className="App-header">
            <AppBar color="secondary">
              <ToolBar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                  MUI Theming
                </Typography>
                <Button>
                  Login
                </Button>
              </ToolBar>
            </AppBar>
            <Paper></Paper>
            <Typography variant="h2" component="div">
              Welcome to MUI
            </Typography>

            <Typography variant="body1">
              Learn how to use Material UI
            </Typography>

            <ButtonStyled />

            <Grid container spacing={2} justify="center">
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width:'100%', }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width:'100%', }} />
              </Grid>
              <Grid item xs={3} sm={12}>
                <Paper style={{ height: 75, width:'100%', }} />
              </Grid>
            </Grid>

            <TextField
              variant="outlined"
              color="secondary"
              type="email"
              label="The Time"
              placeholder="test@test.com"
            />
            <CheckboxExample />
            <ButtonGroup>
              <Button
                startIcon={<SaveIcon />}
                onClick={()=>alert('hello')}
                size="large"
                // style={{
                //   fontSize: 24
                // }}
                variant="contained"
                color="primary"
              >
                Save
              </Button>
              <Button
                startIcon={<DeleteIcon />}
                onClick={()=>alert('hello')}
                size="large"
                variant="contained"
                color="secondary"
              >
                Discard
              </Button>
            </ButtonGroup>
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
