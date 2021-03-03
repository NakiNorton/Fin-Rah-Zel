import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';


export default function LoadingSpinner() {
  return (
    <div style={{ height: '200px', marginTop: '15%' }}>
      <CircularProgress />
    </div >
  )
}