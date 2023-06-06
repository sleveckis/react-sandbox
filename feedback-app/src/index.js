import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// Passing in our component called App, which returns a JSX h1, that gets put into the div called root in ../public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

