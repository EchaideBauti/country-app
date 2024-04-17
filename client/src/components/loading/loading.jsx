import React from 'react';
import ReactLoading from 'react-loading';
 
const Loading = ({ type, color }) => (
    <ReactLoading type={type} color={color} height={'20%'} width={'20%'} className='position-absolute top-50 start-50 translate-middle' />
);
 
export default Loading;