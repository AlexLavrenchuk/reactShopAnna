import React from 'react';

const style = {
  error: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const ErrorPage = () => {
  return (
    <div style={style.error}>
      <h1>404 error</h1>
    </div>
  );
}

export default ErrorPage;