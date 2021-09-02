import React,{useState,useEffect} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'
import Mapping from './newsmap';

const News = ({data,setData,getData}) =>{
    const [ Loading,setLoading ] = useState(true)
    const[ initial,setInitial ] = useState('everything')

    useEffect(()=>{
        const fetchArticles = async() => {
            try{
                const res = await fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=everything&api-key=hgGZ9Qf26H4JZSuum97ZdjfSvdrM1GG0 ')
                const articles = await res.json()
                console.log(articles)
                setData(articles.response.docs)
                setLoading(false)
            }
            catch (err){
                console.log(err)
            }
        }
        fetchArticles()
    },[])
    
      return(
        <>
        <div className="container">
            <div className="layout">
                {Loading ? (
                    <h3>Loading</h3>
                ):(
                    <section>
                        <h1>Articles about</h1>
                        {data.map((articles)=>{
                            const {_id,abstract,headline:{main},byline:{original},lead_paragraph,news_desk} = articles
                            return(
                                <Mapping abstract={abstract} _id={_id} headline={main} lead_paragraph={lead_paragraph} />
                            )
                        })}
                    </section>
                )
                }
            </div>
        </div>
        </>
    )
}
export default News