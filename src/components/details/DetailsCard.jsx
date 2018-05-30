import React from 'react'
import { fetchCharacter } from '../../actions/people'
import { connect } from 'react-redux'
import '../../styles/detailsUnit.css'



 class DetailsCard extends React.Component {

     componentWillMount(props) {
           this.props.fetchCharacter(this.props.match.params.id)
    }

    render() {
        const { people } = this.props
        if (!people) return null

        return (
            <div className="detailsCardContainer">
               {people.name}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
        people: state.people
})


export default connect(mapStateToProps, { fetchCharacter })(DetailsCard)