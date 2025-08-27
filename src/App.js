import React,{useState} from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home/Index';
import Quiz from './Pages/Quiz';
import Result from './Pages/Result';
import axios from 'axios';

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async( category = '', difficulty ='' )=>{
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    )
    setQuestions(data.results);
  };

  return (
    <HashRouter>
    <div className="app" style={{backgroundImage: "url(./ques1.png)"}}>
      <Header />
      <Switch>
        <Route path='/' exact >
           <Home name={name} setName={setName} fetchQuestions={fetchQuestions} /> 
        </Route>
        <Route path="/quiz" >
          <Quiz name={name} 
          questions={questions} 
          score={score} 
          setScore={setScore} 
          setQuestions={setQuestions} 
          />
        </Route>
        <Route path="/result">
          <Result name={name} score={score} />
        </Route> 
      </Switch>
    </div>
      <Footer />
    </HashRouter>
  );
}

export default App;
