import React from 'react'
import DOMPurify from 'dompurify';

function DomPujrifyCom() {


  var somehtml = '<p onclisac="dsfkds">dsfsdf</p>'
  var clean = DOMPurify.sanitize(somehtml);
  console.log(somehtml)
  console.log(clean)
  return (
    <div dangerouslySetInnerHTML={{ __html: clean }}></div>

  )

}

export default DomPujrifyCom