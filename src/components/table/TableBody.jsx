import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchAllPeople } from '../../actions/people'
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
    }

    render() {
        const { people } = this.props
        if (!people.results) return ""
        return (
            <div className="tableContainer">

                <table >
                    <thead class="tableHeader">
                        <tr>
                            <td >Name</td>
                            <td >Gender</td>
                            <td >Species</td>
                            <td >Homeworld</td>
                        </tr>
                    </thead>
                    <tbody className="tableBody">
                        {people.results.map(i =>
                            <tr>
                                <td ><Link to={`/people/${i.name}`}>{i.name}</Link></td>
                                <td >{i.gender}</td>
                                <td >{i.species}</td>
                                <td >{i.homeworld}</td>

                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

    people: state.people

})

export default connect(mapStateToProps, { fetchAllPeople })(TableBody)