import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import '../App.css'
import {Link} from 'react-router-dom'

const Category = ({ title, movies }) => {

    // const length = img.length

    const useStyles = makeStyles({
        root: {
            backgroundColor: '#000',
            color: '#fff',
            padding: '5px',
        },
        scroll: {
            overflowX: 'scroll'
        },
        moviesContainer: {
            overflowX: 'scroll',
            width: '100%',
            display: 'flex'
        },
        img: {
            width: '100px',
            borderRadius: '10px'
        }
    });


    const classes = useStyles();
    return (
        <Link to={`/movie/${"movie.id"}`}>
        <div className={classes.root}>
            <h3>{title}</h3>
            <div className={classes.moviesContainer}>
                {movies.map(movie => (
                    <div key={movie.id}>
                        {movie.original_title}
                    </div>
                ))}
            </div>
            {/* <div className={classes.scroll}>
                <div className={classes.container}>
                    {props.img === undefined ? null : props.img.map(e => {
                        return <img key={e} alt={e.original_title} className={classes.img} src={e} />
                    })}
                </div>
            </div> */}


        </div>
        </Link>
    )
}

export default Category