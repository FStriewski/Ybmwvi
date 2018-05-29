import React from 'react'
import '../../styles/tableUnit.css'



export default class TableHeader extends React.Component {

    render() {
        return (

            <div className="tableHeaderContainer">
                <table >
                    <tbody>
                        <tr>
                            <td >Name</td>
                            <td >Gender</td>
                            <td >Species</td>
                            <td >Homeworld</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

}
