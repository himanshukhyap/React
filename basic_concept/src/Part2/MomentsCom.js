import React from 'react'

import * as moment from 'moment';
moment().format();



function MomentsCom() {
  return (
    <>
      <span>{moment().date()}</span>-<span>{moment().month()}</span>-<span>{moment().year()}</span><br />
      <span>{moment().hour()}</span> :<span>{moment().minute()}</span>:<span>{moment().seconds()}</span>
      <br />
      <div className='d-flex'>
        <h1>{moment().get('date')}</h1> - <h1>{moment().get('month')}</h1>

      </div>
      <h1>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</h1>
    </>
  )
}

export default MomentsCom