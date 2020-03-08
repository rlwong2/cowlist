import React from 'react';

let Cowlist = (props) => {
  return (
    <div>
      <h4>All the cows:</h4>
      {props.cows.map((cow) => (
        <div>
          <p>{cow.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Cowlist;