import React,{useState,useEffect} from 'react'
import { Container,PostCard } from '../components'
import appwriteService from "../appwrtie/config"
function AllPost() {
    const [posts,setPosts] = useState();
    useEffect(()=>{},[]);

    appwriteService.getPosts([]).then((posts)=>{
        if (posts) {
            setPosts(posts.documents); 
        }
    })
  return (
    <div className='w-full px-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post)=>(
                    <div key={post.$id} className='py-2 w-1/4'>
                        <PostCard post={post}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPost