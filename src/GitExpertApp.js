import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GitExpertApp = () => {

  // const categories = ['Goku', 'Vegeta', 'Gohan' ];

  const [categories, setCategories] = useState(['Goku']);

  // const handleAdd = () =>{
  //   // setCategories([...categories,'DSDS']);
  //   setCategories(cats => [...cats,'DSDS']);
  // }
  return (
    <div>
    <h2>Gif Expert App</h2>
    <AddCategory setCategories = { setCategories }/>
    <hr />
    <ol>
      {
        categories.map((category) => <GifGrid key={category} category={category} />)
      }
    </ol>
    </div>
    )
}

export default GitExpertApp;
