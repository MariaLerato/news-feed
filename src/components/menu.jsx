import React,{useState} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import News from './newsfeed'
import Landing from './landing'
import Mapping from './newsmap'
import Articles from './articles'

const Menu = () =>{
    const [ data,setData ] = useState([])
    const getData=(abstract)=>{
        setData(abstract)
    }
    return(
        <>
        <Router>
        <div className="shadow-lg p-3 mb-5 bg-white rounded">
        </div>
            <Switch>
            <Route path={'/articles/:id'}>
                    <Articles data={data} />
                </Route>
                <Route path={'/newsmap'}>
                    <Mapping data={data} setData={setData}/>
                </Route>
                
                <Route path={'/landing'}>
                    <Landing getData={getData} />
                </Route>
                <Route path={'/'}>
                    <News data={data} setData={setData} getData={getData}/>
                </Route>
               
            </Switch>
        </Router>
        </>
    )
}
export default Menu