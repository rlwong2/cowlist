import React from 'react';

let Cow = (props) => {
  console.log(props.cow)
  return (
    <div>
      <h4>{props.cow.name}</h4>
      <p>{props.cow.description}</p>
    </div>
  )
}

export default Cow;