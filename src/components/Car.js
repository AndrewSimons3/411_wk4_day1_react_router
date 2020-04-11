import React from 'react'
import cars from '../cars.json'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
// import material ui components here //
// Container, Paper, Chip //

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    //   justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      width: '500px',
      padding: '25px'

    //   '& > *': {
    // margin: theme.spacing(1),
    //     width: theme.spacing(16),
    //     height: theme.spacing(16),
    //   },
    },
  }));

const Car = (props) => {
    const classes = useStyles();
    const id = props.match.params.id
    console.log(props.match.params)
    const findCars = cars[id]
    return (
        <Container className={classes.root}>
            <Paper className ={classes.root} elevation={3}>
                <h2>{findCars.Name}</h2> 
                <Chip label={`id: ${findCars.id}`} />
                <Chip label={`Miles_per_Gallon: ${findCars.Miles_per_Gallon}`} /> 
                <Chip label={`Cylinders: ${findCars.Cylinders}`} /> 
                <Chip label={`Displacement: ${findCars.Displacement}`} /> 
                <Chip label={`Horsepower: ${findCars.Horsepower}`} /> 
                <Chip label={`Weight_in_lbs: ${findCars.Weight_in_lbs}`} /> 
                <Chip label={`Acceleration: ${findCars.Acceleration}`} />    
                <Chip label={`Year: ${findCars.Year}`} /> 
                <Chip label={`Origin: ${findCars.Origin}`} />      
            </Paper>
        </Container>
    )
}

export default Car