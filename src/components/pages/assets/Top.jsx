import React, { useState } from 'react'
// import { Link} from 'react-router-dom';
const Top = () => {

    const [visible, setVisible] = useState(false)


    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 20) {
            setVisible(true)
        } else if (scrolled <= 20) {
            setVisible(false)
        }
    };

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    window.addEventListener('scroll', toggleVisible);



    return (
        <>




            <button id="myBtn" onClick={toTop} style={{ display: visible ? 'inline' : 'none' }} ><b>^</b></button>
        </>
    )


}

export default Top