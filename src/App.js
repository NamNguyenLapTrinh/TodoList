import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";






function App() {
    const [listJobs, setLlistJobs] = useState(()=> {
       const JobsLocal = JSON.parse(localStorage.getItem('jobs'))

       return JobsLocal
      }
     

    )
    const [word,setWord] = useState('')
    const [time,setTime] = useState('')

    const handleClick = () => {
      if(word !== '' && time !== '') {
        setLlistJobs(jobs => {
          const listJob = [...jobs, {word,time}]
          
          const newList = listJob.sort(function (a,b) {
            if(a.time < b.time) {
              return -1
            }
          })
          console.log(newList);
          const stringJobs = JSON.stringify(newList)
          localStorage.setItem('jobs',stringJobs)
  
  
          
          return newList
        }
        )
      }
      setWord('')
      setTime('')

    }

    const handleDlete = (index)  => {
       listJobs.splice(index, 1)
       setLlistJobs(job => {
        const list = [...job]

        const stringJob = JSON.stringify(list)
        localStorage.setItem('jobs',stringJob)     
        
        return list

       }

       )
    }

    const handleEdit = (index) => {
      setWord(listJobs[index].word)
      setTime(listJobs[index].time)
    }

    const handleUpdate = (index) => {
      setLlistJobs(job => {
        const jobs = [...job]
        console.log(jobs);
        const form = {word,time}
        const list = jobs.fill(form,index, index + 1)
        const stringJob = JSON.stringify(list)
        localStorage.setItem('jobs',stringJob)    
        return list
      })

      setWord('')
      setTime('')
    }

    // useTase doing 

    const [word2,setWord2] = useState([])
    

  return (
    
    <div className="App">
      <div className="todo">
          <input type="text" value={word} onChange={(e) => setWord(e.target.value)}  />
          <input type="date" value={time} onChange={(e) => setTime(e.target.value)} />
          <button onClick={handleClick}>ADD</button>
          {listJobs.map((job,index)=> (

            <ul key={index} className="list-item" >
            <input  
              type="checkbox"
            />
              <li>{job.word}</li>
              <li>{job.time}</li>
              <button onClick={ () => handleDlete(index)}>Xoa</button>
              <button onClick={ () => handleEdit(index)}>Sua</button>
              <button onClick={ () => handleUpdate(index)}>Update</button>


            </ul>
           

          ))}
      </div>
     

      <div className="doing">


      </div>      

     

    </div>
  )
  
}

export default App;
