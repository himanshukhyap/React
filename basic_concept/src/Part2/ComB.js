import React from 'react'
import PropTypes from 'prop-types';

ComB.propTypes ={
    name: PropTypes.string,
    age:PropTypes.number.isRequired
}
ComB.defaultProps={
    lname:"Kashyap"

}
function ComB(props) {

   
  return (
    <div>Hellow {props.name} {props.lname} {props.age+5}</div>
  )
}

export default ComB