import React from 'react'
import '../../styles/topBarUnit.css'



export default class FilterBar extends React.Component {

    handleChange = () => { }

    handleClick = () => { }

    render() {
        return (
            <div className="filterBarContainer">
                <div className="textFilter">
                    <input type="text" onChange={this.handleChange} />
                </div>
                <div className="genderFilter">
                    <select name="genderSelect" onChange={this.handleChange}>
                        <option value="all">All</option>
                        <option value="alien">Alien</option>
                        <option value="female" >Female</option>
                        <option value="male">Male</option>
                    </select>
                </div>
                <div className="speciesFilter">
                    <button type="text" onClick={this.handleClick} > Species </button>

                </div>
                <div className="planetFilter">
                    <button type="text" onClick={this.handleClick} > Planets </button>
                </div>
            </div>
        )
    }

}
