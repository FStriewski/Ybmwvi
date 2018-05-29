import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import '../../styles/tableUnit.css'



export default class TableUnit extends React.Component {

    render() {
        return (
            <div className="tableUnitContainer">
                <TableHeader />
                <TableBody />
            </div>
        )
    }
}
