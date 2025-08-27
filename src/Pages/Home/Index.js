import React,{useState} from 'react';
import './Home.css';
import { TextField, MenuItem, Button } from '@material-ui/core';
import Categories from '../../Data/Categories'
import { useHistory } from 'react-router-dom';
import ErrorMessage from '../../Components/ErrorMessage';

const Home = ({name, setName, fetchQuestions}) => {
    const [category, setCategory] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [error, seteError] = useState(false);


    const history = useHistory();

    const handleSubmit = () => {
        if(!category || !difficulty|| !name){
            seteError(true);
        }else{
            seteError(false);
            fetchQuestions(category,difficulty);
            history.push("/quiz");
        }
    };

    return (
        <div className="content">
            <div className="settings">
                <span style={{fontSize: 30}}>Quiz Settings</span>
                <div className="settings__select">
                    {error && <ErrorMessage />}
                    <TextField style={{marginBottom: 25}} 
                    label="Enter your name" 
                    variant='outlined' 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <TextField 
                    select 
                    label="select Category"
                    variant='outlined'
                    style={{marginBottom: 30}}
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    >
                        {
                         Categories.map((cat)=> (
                        <MenuItem key={cat.category} value={cat.value}>
                          {cat.category}
                        </MenuItem>
                         ))
                        }
                    </TextField>
                    <TextField
            select
            label="Select Difficulty"
            variant="outlined"
            style={{ marginBottom: 30 }}
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
                </div>
            </div>
            <img src="./quiz2.png" className="banner" alt="quiz img" />
        </div>
    )
}

export default Home
