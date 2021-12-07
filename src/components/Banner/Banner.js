import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Cerousel from './Cerousel'

const useStyles=makeStyles(()=>({
    banner:{
        backgroundImage: "url(./banner2.jpg)",
    },
    bannerContent:{
        height:370,
        display:"flex",
        flexDirection:"column",
        paddingTop:25,
        justifyContent:"space-around",
    },
    tagline:{
        display:"flex",
        height: "40%",
        flexDirection:"column",
        justifyContent:"center",
        textAlign:"center",
    },
}))

const Banner = () => {
    const classes=useStyles()
    return (
        <div className={classes.banner}>
            <Container className={classes.bannerContent}>
                <div className={classes.tagline}>
                <Typography
                variant="h2"
                style={{
                    fontWeight:"bold",
                    marginTop:1,
                    fontFamily:"Montserrat",
                }}
                >
                    Crypto Hunter
                </Typography>
                <Typography
                variant="subtitle2"
                style={{
                    color:"darkgrey",
                    textTransform:"capitalize",
                    fontFamily:"Montserrat",
                }}
                >
                    Get All the Info Regarding Your Favourite Crypto Currency
                </Typography>
                </div>
                <Cerousel/>
            </Container>
        </div>
    )
}

export default Banner
