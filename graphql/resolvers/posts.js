const Post = require('../../models/Post');
module.exports = {
    Query: {
        async getPosts(){
            //always use try incase you query fails this will prevent the server from stopping
            try{
               const posts = await Post.find();
               return posts; 
            }catch(err){
                throw new Error(err);
            }
        }
      }
};