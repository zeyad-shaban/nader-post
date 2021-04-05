import {useState}  from 'react'
import './Postscss.css'
import Post from "./Post";
import postsData from '../../data/posts'


function Posts() {
          const [posts, setpost] = useState(postsData)

          const handledelete = (key) =>{
            let curentpost = [...posts]
            let resultcurnt = curentpost.filter(function(post){
                           if(post.id !== key ){
                                      return  post }
            }

            )
            setpost(resultcurnt)
            // console.log('key',key)
            // console.log(curentpost[0] )
            //       console.log(resultcurnt)
          }
          return (
              <div  className="container" >
              <section className="posts ">

              {
                posts.map((post)  => (

                         <Post  id={post.id}
                          img={post.image}
                          title={post.title}
                          author={post.author}
                          body={post.body}
                          handledelete={handledelete}
                          />
                       ))
              }
              </section >
              </div>





    )
}

export default Posts


