import React from 'react'
// import TableHeader from './TableHeader'
import FilterBar from './FilterBar'

import TableBody from './TableBody'
import '../../styles/tableUnit.css'



export default class TableUnit extends React.Component {

    render() {
        return (
            <div className="tableUnitContainer">
                {/* <TableHeader /> */}
                <FilterBar />
                <TableBody />
            </div>
        )
    }
}
