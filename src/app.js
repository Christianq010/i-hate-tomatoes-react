import React from 'react';
import PropTypes from 'prop-types';

export class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            buyitems: [
                {
                    name: "milk",
                    id: "234"
                },
                {
                    name: "bread",
                    id: "4545"
                },
                {
                    name: "butter",
                    id: "5758"
                }
            ]
        }
    }



    render() {
        const {buyitems} = this.state;
        return (
            <div className="some-div">    
                <h1>Shopping List</h1>
                {
                    buyitems.map (item => {
                        return <p key={item.id}> {item.name} </p>
                    })
                }
            </div>
        )
    }
}



