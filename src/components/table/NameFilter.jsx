import React from 'react'
import { connect } from 'react-redux'
import { filterByName} from '../../actions/filter'
import '../../styles/tableUnit.css'



class NameFilter extends React.Component {
   
    handleChange = (e) => {
        let filter = this.props.people.results.filter(person => person.name.toLowerCase().includes(e.target.value.toLowerCase()))

        return this.props.filterByName(filter)

        //console.log(e.target.value.toLowerCase())
     }

    render() {
        const { people } = this.props
        if (!people) return 
        console.log(people)
        return (

            <div className="nameFilterContainer">
                <input type="text" onChange={this.handleChange} placeholder='search' value={""}/>
                </div>
        )
    }

}

const mapStateToProps = (state) => ({
    people: state.people,
})

export default connect(mapStateToProps, { filterByName })(NameFilter)
