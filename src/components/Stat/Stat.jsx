import React, {useState, useEffect} from 'react';
import Card from '../Crad/Card';

const Stat = () => {

    const [cards, setCards] = useState([]);

    const fetchData = () => {
        fetch('http://localhost:4000/cards')
        .then(res => res.json())
        .then(data => {
            setCards(data);
        })
        .catch(e => console.log(e.message));
    };
    useEffect(() => {
        fetchData();
    }, []);


  return (
    <>
        {
            cards && cards.length > 0 &&
            cards.map(card => <Card  key={card._id} card={card}/>)
        }
    </>
  )
}

export default Stat