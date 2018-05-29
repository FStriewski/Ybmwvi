import React from 'react'
import '../../styles/tableUnit.css'



export default class NameFilter extends React.Component {

    state = {}

    handleChange = () => { }

    render() {
        return (

            <div className="nameFilterContainer">
                    <input type="text" onChange={this.handleChange} />
                </div>
        )
    }

}
