import React from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { LoaderAction } from '../Redux/Actions/LoaderAction';

import Loader from './Loader';



 
  function LoaderStatusCom({ children }: {children: JSX.Element }) {
    // const disptach = useDispatch()
  const LoaderState = useSelector((state) => state.LoaderReducer);


    if (LoaderState == true) {
      return <Loader />
    }
    return  children;
  }

  

export default LoaderStatusCom


