import React, { useEffect, useState } from 'react';
import './back.css';

const BackToTop = () => {

    const [scroll, setScroll] = useState(0); // initial scroll position

    useEffect(() =>{
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
        });
        return () => {
            window.removeEventListener('scroll', () => {
                setScroll(window.scrollY);
            });
        };
    }, [scroll]);

    const backToTop =() => {
        window.scrollTo(0,0); //scroll back to top
    }

  return (
    <a
    onClick={backToTop}
    className={`back-to-top d-flex align-items-center justify-content-center ${scroll > 100 ? 'active' : undefined}`}
    href="">
        <i className="bi bi-arrow-up-short"></i> Something
    </a>
  )
}

export default BackToTop