import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


class Square extends React.Component{
    render(){
        return (
            <button className='buttonDesing'>
                {console.log("clicked")}
                Dont clik me 
            </button>
        )
    }
}

class Board extends React.Component {
    renderSquare(){
        return <Square />
    }

    render() {
        const playerName = 'player name ';
        return (
            <div>
                <button className='buttonDesing'>Click me </button>
                <h1>{playerName}</h1>
            </div>
        )

    }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Board />);
