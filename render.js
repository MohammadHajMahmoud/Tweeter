const Renderer=function(){
    const renderPosts=function(posts){
        $('#posts').empty();
        for(let post of posts){
            $('#posts').append(`<div
             class="post" id='${post.id}'>${post.text}<button class="delPost">Delete</button>
             <div class="comCon"><input type="text" placeholder="Whats on your mind?" id="input1">
             <button class="addComment">Add Comment</button></div>
               </div>`)
            for(let comment of post.comments){
                $('#'+post.id ).append(`<div class="comments" data-id=${comment.id}>${comment.text}<i class="delComment fa-solid fa-trash-can"></i></div>`)
            }
        }
    }
    return{
        renderPosts
    }
}




