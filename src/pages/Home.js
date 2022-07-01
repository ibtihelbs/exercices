import React, {useState} from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../componants/HeroBanner';
import SearchExercises from '../componants/SearchExercises';
import Exercises from '../componants/Exercises';
const Home = (props) => {
    const [exercises, setExercises]= useState([]);
    const [bodyPart, setBodyPart] = useState('all');
    return (
        <Box>
            <HeroBanner />
            <SearchExercises bodyPart= {bodyPart} setBodyPart={setBodyPart} setExercises={setExercises}/>
            <Exercises bodyPart= {bodyPart} setBodyPart={setBodyPart} setExercises={setExercises}/>
        </Box>
    );
};

export default Home;