import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Card from '../Card';
import Navbar from '../Navbar';
import Pagination from '../Pagination';
import './styles.css';



export default function Home () {
    let aux = [1];

    let allDogs = useSelector(state => state.allDogs);

    let [currentPage, setCurrentPage] = useState(1);

    let indexLastDogPage = currentPage * 8;
    let indexFirstDogPage = indexLastDogPage - 8
    let currentDogsPage = allDogs.slice(indexFirstDogPage, indexLastDogPage)

    const paginate = (numPag) => {
        setCurrentPage(numPag)
    }







    return (
        <div className='Home'>
            <Navbar/>
            <div className="cards">
                {

                    currentDogsPage.length > 0 ?
                    currentDogsPage.map((e) => (
                        <Card 
                        key={e.id}
                        id={e.id} 
                        image={e.image} 
                        name={e.name} 
                        weightMax={e.weightMax} 
                        weightMin={e.weightMin} 
                        temperament={e.temperament}
                        />
                    )): aux.map(e => {
                            if(allDogs.length > 0) return (<h2 key={e}>Loading</h2>)
                            else  return (<h2 key={e}>Not Dogs</h2>)
                        })

                }
            </div>
                    <Pagination 
                        dogsPages={8}
                        allDogs={allDogs.length}
                        paginate={paginate}
                    />
        </div>
        
        
        
    )


}