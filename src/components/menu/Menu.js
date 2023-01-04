import React from 'react'
import './menu.css'
const Data = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    }
]


function Menu() {
    return (
        <>
            {
                Data.map((e) => {
                    return (
                        <div>

                            <div className=' container p-5'>
                                <div className='row '>
                                    <div className='d-flex justify-content '>
                                        
                                        <div className="col-5"><h1>logo</h1></div>
                                        <div className="col">
                                            <h6 className=''>{e.name}</h6></div>
                                        <div className="col">
                                            <button className=' btn btn-light'>Follow</button>

                                            <button className=' mx-3 btn btn-light'>message</button>
                                            <>...</>
                                        </div>
                                        <div className="col"></div>


                                    </div>

                                </div>
                            </div>
                            <div>
                                
                                    <div className="row">
                                        <div className='d-flex justify-content '></div>
                                        <div className="col-5"></div>
                                        <div className="col"><h5 className=''>1233 Post</h5></div>
                                        <div className="col"><h5> 3223 Following</h5></div>
                                        <div className="col"><h5> 234 Followers</h5></div>
                                        <div className="col"></div>
                                        
                                    </div>
                                    <div><h6 className='d-flex justify-content-center'>{e.name}</h6></div>
                                    <div><h6 className='d-flex justify-content-center'>{e.email}</h6></div>
                                    
                                </div>
                            </div>
                    






                    )
                })
            }
        </>








    )
}

export default Menu
