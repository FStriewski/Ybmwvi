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
                {people.results.map(i =>

                    <table >
                        <tbody>
                            <tr>
                                <th >{i.name}</th>
                                <th >{i.gender}</th>
                                <th >{i.species}</th>
                                <th >{i.homeworld}</th>

                            </tr>
                        </tbody>
                    </table>
                )}
            </div>
        )
    }

}

const mapStateToProps = (state) => ({

    people: state.people

})

export default connect(mapStateToProps, { fetchAllPeople })(TableBody)