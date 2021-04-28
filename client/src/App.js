import './App.css';
import Todo from './components/Todo';
import { useEffect, useState } from 'react';
import api from './service/index';

function App() {
  const [list, setList] = useState([])

  async function add(work){
    let newList = [...list]
    newList.push(work)
    // localStorage.setItem('list', JSON.stringify(newList))
    setList(newList)
    await api.post('/', {work})
  }

  async function del(i){
    let newList = [...list]
    newList.splice(i, 1)
    // localStorage.setItem('list', JSON.stringify(newList))
    setList(newList)
    await api.put('/', {i})
  }

  useEffect(()=>{
    async function getData(){
      console.log('hihi');
      let data = (await api.get()).data
      setList(data)
    }
    getData()
  },[])

  return (
    <div className="App">
        <p>hook</p>
        <Todo addWork={(work)=> add(work)} delWork={(i)=> del(i)} list={list}/>
    </div>

  );
}

export default App; 
