import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getMovies, getAmericanMovies, getPopularMovies, getKidMovies, getAnimeMovies, getGenres } from '../store/actions/moviesAction'
import BottomMenu from '../components/BottomMenu'
import Category from '../components/Category'
import GenresMenu from '../components/GenresMenu'
import '../App.css'
import { makeStyles } from '@material-ui/core/styles';


const Home = () => {

    const dispatch = useDispatch()
    const { movieList } = useSelector(state => state.movieList)
    const { americanMovieList } = useSelector(state => state.americanMovieList)
    const { popularMovieList } = useSelector(state => state.popularMovieList)
    const { kidMovieList } = useSelector(state => state.kidMovieList)
    const { animeMovieList } = useSelector(state => state.animeMovieList)
    const { genresList } = useSelector(state => state.genresList)
    


    const posterUrl = 'https://image.tmdb.org/t/p/w500'

    const movieNames = movieList === undefined ? [] : movieList.map(e => { return e.original_title })
    const imgArray = movieList === undefined ? [] : movieList.filter(e => { return e.poster_path !== null }).map(e => { return posterUrl + e.poster_path })
    const americanMovieNames = americanMovieList === undefined ? [] : americanMovieList.map(e => { return e.original_title })
    const imgAmericanArray = americanMovieList === undefined ? [] : americanMovieList.filter(e => { return e.poster_path !== null }).map(e => { return posterUrl + e.poster_path })
    const popularMovieNames = popularMovieList === undefined ? [] : popularMovieList.map(e => { return e.original_title })
    const imgPopularArray = popularMovieList === undefined ? [] : popularMovieList.filter(e => { return e.poster_path !== null }).map(e => { return posterUrl + e.poster_path })
    const kidMovieNames = kidMovieList === undefined ? [] : kidMovieList.map(e => { return e.original_title })
    const imgKidArray = kidMovieList === undefined ? [] : kidMovieList.filter(e => { return e.poster_path !== null }).map(e => { return posterUrl + e.poster_path })
    const animeMovieNames = animeMovieList === undefined ? [] : animeMovieList.map(e => { return e.original_title })
    const imgAnimeArray = animeMovieList === undefined ? [] : animeMovieList.filter(e => { return e.poster_path !== null }).map(e => { return posterUrl + e.poster_path })
    const coverMoviesList = movieList.map(e => { return e.vote_average })
    let biggerVote = 0
    const headCoverVote = coverMoviesList.filter(e => {
        if (e > biggerVote) {
            return biggerVote = e
        }
        return
})

    const headCover = movieList.filter(e => { return e.vote_average === headCoverVote })

    console.log(americanMovieList)
    

    const useStyles = makeStyles({
        root: {
            backgroundColor: '#000',
            color: '#fff',
            marginBottom: '55px'
        },
        header: {
            width: '50%',
            display: 'block',
            margin: '0px auto 10px',
            textAlign: 'center',
            paddingTop: '50px'
        },
        img: {
            width: '100%'
        },
        menu:{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px'
        }
    });


    const classes = useStyles();

    useEffect(
        () => {
            dispatch(getMovies());
            dispatch(getAmericanMovies());
            dispatch(getPopularMovies());
            dispatch(getKidMovies());
            dispatch(getAnimeMovies());
            dispatch(getGenres());
            
        },
        [dispatch])

    return (
        <div className={classes.root}>
            <Category title="American Movies" movies={americanMovieList}/>
            {/* <div className={classes.header}>
                <div className={classes.menu}>
                   <p style={{marginTop: '5px'}}>Serie TV</p>
                    <p style={{marginTop: '5px'}}>Film</p>
                    <GenresMenu style={{marginBottom: '5px'}} genres={genresList}/>
                </div>
           
                {movieList.filter(e => { return e.vote_average == headCoverVote }).map(e => {
                    return (
                        <img className={classes.img} key={e.original_title} alt={e.original_title} src={posterUrl + e.poster_path} />
                    )
                })}
                <h3>Oggi al n° 1 in Italia</h3>
            </div>
               {movieList === undefined ? null : movieList.map(e=>{
                   return <Category  movieName={e.original_title}  title="I titoli del momento"  img={posterUrl + e.poster_path}/>
               })}
            {<Category movieName={movieNames} title="I titoli del momento" img={imgArray} />}
            {<Category movieName={americanMovieNames} title="Film e serie TV Americane " img={imgAmericanArray} />}
            {<Category movieName={popularMovieNames} title="I film più visti " img={imgPopularArray} />}
            {<Category movieName={kidMovieNames} title="Per i più piccoli " img={imgKidArray} />}
            {<Category movieName={animeMovieNames} title="Film anime " img={imgAnimeArray} />}
            */}
        </div>
    )
}

export default Home
