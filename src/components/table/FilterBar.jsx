import React from 'react'
import NameFilter from './NameFilter'
import '../../styles/topBarUnit.css'



export default class FilterBar extends React.Component {

    toggleVisibility = () => {

        let el = document.getElementById("wrapper");
        (el.style.display !== 'block') ? el.style.display = 'block' : el.style.display = 'none';

    }

    handleChange = () => { }

    handleClick = () => { }

    render() {
        return (
            <div >
                <div className="filterBarContainer" onClick={this.toggleVisibility}> Filter </div>
                <div id="wrapper">
                    <div id="filters">
                        <div className="textFilter">
                            <NameFilter />
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
                </div>
            </div>
        )
    }

}
