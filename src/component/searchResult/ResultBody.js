import React, { useState, useEffect } from 'react'
import Card from './Card';
import '../../asserts/css/searchResult.css';

const ResultBody = () => {
    const [items, setItems] = useState('');
    const [itemNo] = useState([0, 1, 2, 3, 4, 5, 6, 7]);
    useEffect(() => {
        let Item = itemNo.map((item, idx) => {
            return <Card key={idx} />
        });
        setItems(Item);
    }, [itemNo])

    return (
        <div className="container result-body">
            <div className="my-row">
                {items}
            </div>
        </div>
    )
}

export default ResultBody
