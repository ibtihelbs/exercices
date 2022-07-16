import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import { Box } from '@mui/material';
import { exercisesOptions, optionsYoutube, FetchData } from '../utils/FetchData';
import Detail from '../componants/Detail';
import ExerciseVideo from '../componants/ExerciseVideo';
import SimilarExercises from '../componants/SimilarExercises';
const ExerciceDetail = (props) => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos]= useState([]);
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        const fetchExercisesData = async ()=>{
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeUrlSearch ='https://youtube-search-and-download.p.rapidapi.com';
            const exerciseDetailData = await FetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exercisesOptions)
            setExerciseDetail(exerciseDetailData);
            const exerciseYoutube = await FetchData(`${youtubeUrlSearch}/search?query=${exerciseDetailData.name} exercise`,optionsYoutube);
            setExerciseVideos(exerciseYoutube.contents);
            const targetMuscleExercisesData = await FetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exercisesOptions);
            setTargetMuscleExercises(targetMuscleExercisesData);
            
            const equimentExercisesData = await FetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exercisesOptions);
            setEquipmentExercises(equimentExercisesData);
        }   
        fetchExercisesData();
    },[id])
    console.log(exerciseVideos)
    return (
        <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
            <Detail key={exerciseDetail.id} exerciseDetail={exerciseDetail}/>
            <ExerciseVideo exerciseVideos={exerciseVideos} name ={exerciseDetail.name} />
            <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
        </Box>
    );
};

export default ExerciceDetail;