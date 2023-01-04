import React from 'react'
import "./Layout.css"
//  import Data from "../Data"
const DataList =[

    {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://via.placeholder.com/600/771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
      "albumId": 1,
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "https://via.placeholder.com/600/24f355",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
      "albumId": 1,
      "id": 4,
      "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      "url": "https://via.placeholder.com/600/d32776",
      "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
   
    {
      "albumId": 1,
      "id": 4,
      "title": "vitae est facere quia itaque adipisci perferendis id maiores",
      "url": "https://via.placeholder.com/600/35185e",
      "thumbnailUrl": "https://via.placeholder.com/150/35185e"
    },
    {
      "albumId": 1,
      "id": 5,
      "title": "tenetur minus voluptatum et",
      "url": "https://via.placeholder.com/600/c96cad",
      "thumbnailUrl": "https://via.placeholder.com/150/c96cad"
    },
    {
      "albumId": 1,
      "id": 6,
      "title": "expedita rerum eaque",
      "url": "https://via.placeholder.com/600/4d564d",
      "thumbnailUrl": "https://via.placeholder.com/150/4d564d"
    },
    {
    "albumId": 1,
    "id": 20,
    "title": "assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error",
    "url": "https://via.placeholder.com/600/8985dc",
    "thumbnailUrl": "https://via.placeholder.com/150/8985dc"
  },
  {
    "albumId": 1,
    "id": 21,
    "title": "ad et natus qui",
    "url": "https://via.placeholder.com/600/5e12c6",
    "thumbnailUrl": "https://via.placeholder.com/150/5e12c6"
  },
  {
    "albumId": 1,
    "id": 22,
    "title": "et ea illo et sit voluptas animi blanditiis porro",
    "url": "https://via.placeholder.com/600/45601a",
    "thumbnailUrl": "https://via.placeholder.com/150/45601a"
  },
  {
    "albumId": 1,
    "id": 23,
    "title": "harum velit vero totam",
    "url": "https://via.placeholder.com/600/e924e6",
    "thumbnailUrl": "https://via.placeholder.com/150/e924e6"
  },
  {
    "albumId": 1,
    "id": 24,
    "title": "beatae officiis ut aut",
    "url": "https://via.placeholder.com/600/8f209a",
    "thumbnailUrl": "https://via.placeholder.com/150/8f209a"
  },
  {
    "albumId": 1,
    "id": 25,
    "title": "facere non quis fuga fugit vitae",
    "url": "https://via.placeholder.com/600/5e3a73",
    "thumbnailUrl": "https://via.placeholder.com/150/5e3a73"
  },
  {
    "albumId": 1,
    "id": 26,
    "title": "asperiores nobis voluptate qui",
    "url": "https://via.placeholder.com/600/474645",
    "thumbnailUrl": "https://via.placeholder.com/150/474645"
  },
  {
    "albumId": 1,
    "id": 27,
    "title": "sit asperiores est quos quis nisi veniam error",
    "url": "https://via.placeholder.com/600/c984bf",
    "thumbnailUrl": "https://via.placeholder.com/150/c984bf"
  },
    ]




const Layout = () => {
  return (
    <>
    <div>
        <hr />
        <div className=' d-flex justify-content-center  '> 
            <p className='mx-4'>Post</p>
            <p className='mx-4'>Reels</p>
            <p className='mx-4'>Tagged</p>
        </div>
    </div>
        {
            DataList.map(e=>{
                return(
                    <div className ="container">
                           <div className=' d-flex flex-row'> 
                           <div class="p-2"><img src={e.url} alt=""  style={{height:'350px',widgh:"40%"}}/>
                           <p>{e.title}</p> </div>
                           <div class="p-2"><img src={e.url} alt=""  style={{height:'350px',widgh:"50%"}}/>
                           <p>{e.title}</p>  </div>
                            <div class="p-2"><img src={e.url} alt=""  style={{height:'350px',widgh:"40%"}}/>
                            <p>{e.title}</p>  </div>
                           
                        
                        
                        </div>
                        
                        
                       
                       
                    </div>
                    
                )
            })
        }
      
    </>
  )
}

export default Layout
