import React, { useEffect, useState } from 'react';
import './App.css';
import Amplify, {API, graphqlOperation } from 'aws-amplify'
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react"
import awsconfig from './aws-exports';
import { listTodos } from './graphql/queries';

Amplify.configure(awsconfig);


function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
}, []);


  const fetchTodos = async () => {
    try {
        const todosData: any = await API.graphql(graphqlOperation(listTodos));
       const todoList = todosData.data.listTodos.items;
        console.log('song list', todoList);
        setTodos(todoList); 
    } catch (error) {
        console.log('error on fetching songs', error);
    }
};



  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut/>
        <h2> Content</h2>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
