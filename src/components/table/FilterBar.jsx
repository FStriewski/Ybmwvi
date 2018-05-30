import React from 'react'
import { connect } from 'react-redux'
import { filterByName } from '../../actions/filter'
import '../../styles/topBarUnit.css'



 class FilterBar extends React.Component {

    toggleVisibility = () => {
        let el = document.getElementById("wrapper");
        (el.style.display !== 'block') ? el.style.display = 'block' : el.style.display = 'none';

    }

    handleChange = (e) => {
        this.props.filterByName(e.target.value.toLowerCase())

    }


    handleClick = () => { }

    render() {
        return (
            <div >
                <div className="filterBarContainer" onClick={this.toggleVisibility}> &#x21D5; Filter </div>
                <div id="wrapper">
                    <div id="filters">
                        <div className="textFilter">
                            <input type="text" placeholder="search" onChange={this.handleChange} />
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

const mapStateToProps = (state, props) => ({
    people: state.people,
})

export default connect(mapStateToProps, { filterByName })(FilterBar)