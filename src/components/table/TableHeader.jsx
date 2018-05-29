import React from 'react'
import '../../styles/tableUnit.css'



export default class TableHeader extends React.Component {

    render() {
        return (

            <div className="tableHeaderContainer">
                <table >
                    <tr>
                        <th >1</th>
                        <th >2</th>
                        <th>3</th>
                        <th>4</th>
                    </tr>
                </table>
            </div>
        )
    }

}
