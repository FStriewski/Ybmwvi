import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchAllPeople } from '../../actions/people'
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
            <div className="tableBodyContainer">

                    <table >
                        <tbody>
                {people.results.map(i =>
                            <tr>
                                <td >{i.name}</td>
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