import React, { Component } from 'react'
import './table.css'
export class FetchTable extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users:[]
        }
    }
    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(result=>{
            return result.json()
        }).then(data=>{
            let users=data.map((user)=>
            {
                return(
                    
                        <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        </tr> 
                )
            })
            this.setState({users:users})
            console.log(this.state.users)
        })
    }
    render() {
        return (
            <table>
                <tbody><tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                {this.state.users}
                </tbody>
                        
            </table>
        )
    }
}

export default FetchTable
