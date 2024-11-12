// Tweet.js
import React, { useState } from 'react';

/* 
Create a new componnet called 'Tweet' make sure to pass down all the props you will need.
You will also need to use 'useState' for two variables. Then you want to create an event
handler for when the user clicks 'like'. You can ue whatever h1s or h2s or HTML elements that 
you want for your tweet, just make sure all the information from the screenshot I sent is there.
Also, if the post isn't liked already, then you want to display a white heart "🤍" otherwise, 
display a red heart "❤️" make sure to increase or decrease the like counter appropriately.
Theres a 'tweet' class you can use to style your tweet.
*/

//src/Tweet.tsx

function Tweet({username,initialLikes,content,timeStamp} : {username : string; initialLikes : number; content : string; timeStamp : string;}){
    const [likes,setLikes] = useState(initialLikes);

    const [isLiked,setIsLiked] = useState(false);

    return(
    <div className='tweet'>
        <h3>@{username}</h3>
        <p>{content}</p>
        <p>{timeStamp}</p>
        <div onClick={Like}> {isLiked ? '\u2764\uFE0F' : '\u2661'} {likes} Likes</div>
    </div>);
    function Like(){
        if(isLiked){
            setLikes(likes-1);
            setIsLiked(false);
        }
        else{
            setLikes(likes+1);
            setIsLiked(true);
        } 
    }
}

    
export default Tweet;
