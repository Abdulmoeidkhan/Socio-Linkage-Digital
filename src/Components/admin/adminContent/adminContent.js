import React, { useState, useEffect } from 'react';
import { Input,Button } from 'antd';
import firebase from "../../Config/firebaseConfig"
import "./adminContent.css"

const { TextArea } = Input;


export const AdminContent = () => {
    const [article, setArticle] = useState("")
    const [news, setNews] = useState("")

    let onChangeArticle = ({ target: { value } }) => {
        setArticle( value );
    };
    let onChangeNews = ({ target: { value } }) => {
        setNews( value )
    }

    let submitData=()=>{
        let content ={
            article:article,
            news:news
        }
        firebase.setContent(content).then((val)=>alert(val))
    }

    useEffect(() => {
        firebase.getContent().then((val) => {
            setArticle(val.article)
            setNews(val.news)
        })
    }, [])
    

    let myArticle  = article
    let myNews  = news
    return (
        <div className="adminTextAreaClass">
            Article
            <TextArea
                value={myArticle}
                onChange={onChangeArticle}
                placeholder="Controlled autosize"
                autoSize={{ minRows: 3, maxRows: 5 }}
            />
            News
            <TextArea
                value={myNews}
                onChange={onChangeNews}
                placeholder="Controlled autosize"
                autoSize={{ minRows: 3, maxRows: 5 }}
            />
            <br/>
            <br/>
            <Button onClick={submitData}>Update</Button>
        </div>
    )
}