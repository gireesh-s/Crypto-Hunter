import { AppBar, Container, createTheme, makeStyles, MenuItem, Select, Toolbar, Typography,ThemeProvider } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { CryptoState } from '../CryptoContext'

const useSyles=makeStyles(()=>({
    title:{
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
    },
}))
const Header = () => {
    const classes=useSyles();
    const { currency,setCurrency }= CryptoState();
    const darkTheme = createTheme({
        palette:{
            primary:{
                main: "#fff",
            },
            type: "dark",
        }
    })
    const history=useHistory()
    return (
        <ThemeProvider theme={darkTheme}>
        <AppBar color="transparent" position="static">
            <Container>
                <Toolbar>
                    <Typography onClick={() => history.push(`/`)} variant="h6" className={classes.title}>
                        Crypto Hunter
                    </Typography>
                    <Select variant="outlined" style={{
                        width: 100,
                        height: 40,
                        marginRight: 15,
                    }}
                    value={currency}
                    onChange={(e)=>setCurrency(e.target.value)}>
                        <MenuItem value={"USD"}>USD</MenuItem>
                        <MenuItem value={"INR"}>INR</MenuItem>
                    </Select>
                </Toolbar>
            </Container>
        </AppBar>
        </ThemeProvider>
    )
}

export default Header
