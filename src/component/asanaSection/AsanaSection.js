import React from 'react'
import "./AsanaSection.css"
import Table from '../table/Table'
import Button from '../button/Button'
function AsanaSection() {
    return (
        <div className='container'>
            <div className='left'>
                <div className='main-heading'>
                    #1 Asana alternative
                </div>
                <p className='para'>
                    Offering <span className='bold'>more features</span> and <span className='bold'>view options</span>, 24/7 <span className='bold'>  customer support for all pricing plans </span> , and more, <span className='bold'> see why team members choose monday.com over Asana </span> as their team collaboration tool.
                </p>
                <div className='centerBtn'>
                    <Button
                        height={"50px"}
                        width={"180px"}
                        backgroundColor={"blue"}
                        borderRadius={"30px"}
                        border={"none"}
                        fontColor={"white"}
                        fontSize={"16px"}
                        hover={"0.7"}


                    >
                        compare Asana
                    </Button>

                </div>
            </div>
            <div className='right' >
                <Table />
            </div>
        </div>
    )
}

export default AsanaSection