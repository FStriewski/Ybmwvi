import React from 'react'
import FilterBar from './FilterBar'
import TableBody from './TableBody'
import '../../styles/tableUnit.css'

export default class TableUnit extends React.Component {

    render() {
        return (
            <div className="tableUnitContainer">
                <FilterBar />
                <TableBody />
            </div>
        )
    }
}
