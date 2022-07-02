import React from 'react'
import Newscard from './Newscard';
import NewsData from "./Newsdata";
// import  "./css/card.css"
const News = () => {
    return (
        <>

            <header className="continer-fluid  d-flex justify-content-center align-items-baseline  col-12 mx-auto bg-info my-5 ">
                <h1 className="text-center text-white fs-1 display-4 fw-bold py-3  my-5">Khabareko Khabar</h1>

            </header>
            <section className="card-list">
            {NewsData.map((val, ind) => {
                return <Newscard key={ind}
                    title={val.title}
                    discription={val.discription}
                />
            })}
        </section>
        </>
    )
};
export default News