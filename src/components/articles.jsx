import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
const Articles = ({data}) =>{
    console.log('articles',data)
    const [articles,setArticles] = ({})
    const {id:_id} = useParams()

    useEffect(()=>{
        const fetchArticles = async() => {
            try{
                const res = await fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=everything&api-key=hgGZ9Qf26H4JZSuum97ZdjfSvdrM1GG0/' + _id)
                const articles = await res.json()
                console.log(articles)
                setArticles(articles.response.docs)
                // setLoading(false)
            }
            catch (err){
                console.log(err)
            }
        }
        fetchArticles()
    },[])
    return(
        <>
        <h2>{articles.abstract}</h2>
     
        </>
    )
}
export default Articles