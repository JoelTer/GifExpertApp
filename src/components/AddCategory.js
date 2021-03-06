import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChance = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length>2){
      setCategories(cats => [inputValue, ...cats]);
      setInputValue('');
    }
  }
  return (
    <form onSubmit={ handleSubmit }>
      {/* <h1>Add category</h1> */}
      <input type="text" value={inputValue} onChange={(e)=>handleInputChance(e)} />
    </form>
  )
}

export default AddCategory;


AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}