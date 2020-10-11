import React from 'react'
import cars from '../cars.json'

//material-ui
import { Container, Paper, Chip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'inline-flex',
      flexWrap: 'wrap-reverse',
      '& > *': {
        margin: theme.spacing(3, 7, 0, 16),
        padding: theme.spacing(4),
      },
    },
  }));

const Car = (props) => {
    const classes = useStyles();
    let id = props.match.params.id
    const car = cars.find(car => car.id === Number(id))
    let carName = car.Name.toUpperCase();
    return (
        <Container maxWidth='md' className={classes.root} id='container'>
            <Paper  square elevation={3}>
                <h1>{carName}</h1>
                <Chip label={`ID: ${id}`} />
                <Chip label={`Name: ${carName}`}/>
                <Chip label={`Year: ${car.Year}`}/>
                <Chip label={`Place of Origin: ${car.Origin}`}/>
                <Chip label={`Cylinders: ${car.Cylinders}`}/>
                <Chip label={`Horsepower: ${car.Horsepower}`}/>
                <Chip label={`Weight(lbs): ${car.Weight_in_lbs}`}/>
                <Chip label={`Acceleration: ${car.Acceleration}`}/> 
                <Chip label={`Displacement: ${car.Displacement}`}/>          
                <Chip label={`MPG: ${car.Miles_per_Gallon}`}/>    
            </Paper>
        </Container>
     )
}

export default Car