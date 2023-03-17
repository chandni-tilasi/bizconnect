import React from 'react'
import { TiTick } from 'react-icons/ti';
import {RxCross2} from 'react-icons/rx'
import "./Table.css"
function Table() {
    return (
        <div className='table-container'>
            <table id="customers">
                <tr>
                    <th className='space'> Company name </th>
                    <th> <img src='https://download.logo.wine/logo/Monday.com/Monday.com-Logo.wine.png' height={"80px"} width={"120px"} /> </th>

                    <th> <img src='https://assets.asana.biz/m/5f083bc48e06e1e2/original/asana-logo-1200x1200.png' height={"80px"} width={"100px"} /> </th>
                </tr>
                <tr>
                    <td>Fully customizable no-code platform</td>
                    <td> <TiTick size='2em' color='green' bg="red" /> </td>
                    <td> <TiTick size='2em' color='green' bg="red" /> </td>

                </tr>
                <tr>
                    <td>Cross-departmental solutions</td>
                    <td> <TiTick size='2em' color='green' bg="red" /> </td>
                    <td> <RxCross2 size='1.5em' color='gray'  /> </td>

                </tr>
                <tr>
                    <td>Enterprise-grade security
                    </td>
                    <td> <TiTick size='2em' color='green' bg="red" /> </td>
                    <td> <TiTick size='2em' color='green' bg="red" /> </td>

                </tr>
                <tr>
                    <td>Column types
                    </td>
                    <td> 24+ types </td>
                    <td> 4 types</td>
                </tr>
                <tr>
                    <td>Price for Pro/Business package per month</td>
                    <td> $16/users </td>
                    <td> $24.99/users </td>
                </tr>
                <tr>
                    <td>Templates</td>
                    {/* <td> <RxCross2 size='1.5em' color='gray'  /> </td> */}
                    <td> 200+ solutions   </td>

                    <td> 50+ solutions </td>
                </tr>


            </table>






        </div>
    )
}

export default Table