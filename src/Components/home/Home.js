import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './home.css'
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';

function Home() {
    const [items, setItems] = useState([]);
    const [page, ] = useState(0);

    const fetchData = () => {
        axios.get(`https://randomuser.me/api/?results=20&page=${page}`).then(data => {
            setItems([...items, ...data.data.results])
        }).catch(err => {
            console.log(err);
        });
    }

    useEffect(()=> {
        fetchData();
    }, [])

    
    return (
        <div>
            <div id='left'>
                <Link to='/'>
                    <input type="button" value="Log Out" />
                </Link>
            </div>
            <InfiniteScroll
                dataLength={items.length}
                next={fetchData}
                hasMore={true || false}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <div>
                    {items.map((item, i) => <div key={item.id.value + i}>
                        <img src={item.picture.thumbnail} alt={item.name.first} />
                        <span>{item.name.first}</span>
                    </div>)}
                </div>
            </InfiniteScroll>
        </div>
    )
}

export default Home;