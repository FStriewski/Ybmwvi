import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchAllPeople, fetchMorePeople } from '../../actions/people'
import { fetchAllSpecies } from '../../actions/species'
import { fetchAllPlanets } from '../../actions/planets'
import { Link } from 'react-router-dom'
import '../../styles/tableUnit.css'


class TableBody extends React.Component {
    // static propTypes = {
    //     people: PropTypes.arrayOf(PropTypes.shape({
    //         name: PropTypes.string.isRequired,
    //         gender: PropTypes.string.isRequired,
    //         species: PropTypes.string,
    //         homeworld: PropTypes.string.isRequired
    //     })).isRequired
    // }


    componentWillMount() {
        this.props.fetchAllPeople()
        this.props.fetchAllSpecies()
        this.props.fetchAllPlanets()
    }

    loadMore = (url) => {
        this.props.fetchMorePeople(url)
    }

    decodeSpecies = (obj, val) => {
        return Object.keys(obj).find(key => obj[key] === val);
    }

    render() {
        const { people, species, planets } = this.props
        if (!people.results) return ""
        if (!species) return ""

            
        let filteredNames =
            people.results
                .filter(i =>
                    (this.props.filter.term === "") ? true : i.name.toLowerCase().includes(this.props.filter.term)
                ).filter(i =>
                    (this.props.filter.gender === "all") ? true : i.gender.toLowerCase() === (this.props.filter.gender)
                ).filter(i =>
                    (this.props.filter.race === "all") ? true : i.species[0] === this.decodeSpecies(species, this.props.filter.race)
                )
            
        return (
            <div className="tableContainer">
                <table >
                    <thead className="tableHeader">
                        <tr>
                            <td >Name</td>
                            <td >Gender</td>
                            <td >Species</td>
                            <td >Homeworld</td>
                            <td >Link</td>
                        </tr>
                    </thead>
                    <tbody className="tableBody">
                        {filteredNames
                            .map(i => {
                                let id = i.url.replace(/^\D+/g, ''
                                )

                                return (
                                    <tr key={i.name}>
                                        <td ><Link to={`/people/${id}`}>{i.name}</Link></td>
                                        <td >{i.gender}</td>
                                        <td >{species[i.species] || "unknown"}</td>
                                        <td >{planets[i.homeworld] || "unknown"}</td>
                                        <td ><Link to={`/people/${id}`}> &#x21D2;...Profile</Link></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <button onClick={() => this.loadMore(people.next)}> More...</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({

    people: state.people,
    species: state.species,
    planets: state.planets,
    filter: state.filter

})

export default connect(mapStateToProps, { fetchAllPeople, fetchMorePeople, fetchAllSpecies, fetchAllPlanets })(TableBody)
