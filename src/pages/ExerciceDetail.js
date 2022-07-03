import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import { Box } from '@mui/material';
import { exercisesOptions, FetchData } from '../utils/FetchData';
import Detail from '../componants/Detail';
import ExerciseVideo from '../componants/ExerciseVideo';
import SimilarExercises from '../componants/SimilarExercises';
const ExerciceDetail = (props) => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const fetchExercisesData = async ()=>{
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeUrlSearch ='https://youtube-search-and-download.p.rapidapi.com';
            const exerciseDetailData = await FetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exercisesOptions)
            setExerciseDetail(exerciseDetailData);
        }   
        fetchExercisesData();
    },[id])
    return (
        <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
            <Detail exerciseDetail={exerciseDetail}/>
            <ExerciseVideo/>
            <SimilarExercises/>
        </Box>
    );
};

export default ExerciceDetail;