import React, {Component} from 'react'



const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    )
  }

const TableBody = (props) => {
    const rows = props.myData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>            
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
  }

class Table extends Component {
    render() {
      const {myData} = this.props
      return (
        <table>
          <TableHeader />
          <TableBody myData={myData} />
        </table>
      )
    }
  }

export default Table