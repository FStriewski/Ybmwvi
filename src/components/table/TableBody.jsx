import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchAllPeople, fetchMorePeople } from '../../actions/people'
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

    loadMore = () => {
        this.props.fetchMorePeople()
    }

    render() {
        const { people } = this.props
        if (!people.results) return ""

        return (
            <div className="tableContainer">

                <table >
                    <thead className="tableHeader">
                        <tr>
                            <td >Name</td>
                            <td >Gender</td>
                            <td >Species</td>
                            <td >Homeworld</td>
                        </tr>
                    </thead>
                    <tbody className="tableBody">
                        {people.results.map(i => {
                            let id = i.url.slice(28, 29)
                            console.log(i.url)
                            console.log(id)
                            return (
                                <tr key={i.name}>
                                    <td ><Link to={`/people/${i.id}`}>{i.name}</Link></td>
                                    <td >{i.gender}</td>
                                    <td >{i.species}</td>
                                    <td >{i.homeworld}</td>
                                </tr>
                            )
                        }
                        )}
                    </tbody>
                </table>
                <button onClick={this.loadMore}> More...</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({

    people: state.people

})

export default connect(mapStateToProps, { fetchAllPeople, fetchMorePeople })(TableBody)

// https://swapi.co/api/people/