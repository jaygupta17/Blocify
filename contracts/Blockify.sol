// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract Blockify {
    //Structs
    struct User{
        string id; //for appwrite queries
        address  user;
        string name;
        string pfp;
        string email;
        uint followers;
        uint followings;
        uint posts;
    }
    struct Comment{
        string text;
        address author;
    }
    struct Post{
        string id; //for appwrite queries
        address author;
        string img;
        string descr;
        uint comments;
        uint likes;
        uint count;    
    }
    
    //Mappings
    mapping(address=>User) public addressToUser;
    mapping(address=>mapping (uint=>Post)) public  userToPosts; //list all posts of user by iterating from 1 to user.posts
    mapping(address => User[]) public  userToFollowers;
    mapping(address => User[]) public  userToFollowings;
    mapping(string => User[]) public  PostToLikes;
    mapping(string => Comment[]) public  PostToComments;

    //Events
    event UserCreated(address indexed user, string name, string email,string pfp);
    event NameUpdated(address indexed user, string newName);
    event PfpUpdated(address indexed user, string pfp);
    event EmailUpdated(address indexed user, string email);
    event Followed( address indexed user , address indexed currentUser);
    event Unfollowed( address indexed user , address indexed currentUser);
    event PostCreated(address indexed author,uint count, string id, string descr,string img);
    event Postdeleted(address indexed author,uint count, string id,string descr, string img);
    event Liked(address indexed liker,address indexed author, string indexed id , string descr,string img);
    event unLiked(address indexed unLiker,address author, string indexed id , string descr,string img);
    
    //Functions
    function createUser(string memory _id , string memory _name , string memory _pfp , string memory _email) public{
        User memory user = User(_id,msg.sender,_name,_pfp,_email,0,0,0);
        addressToUser[msg.sender] = user;
    }

    function updateName(string memory _name) public{
        addressToUser[msg.sender].name = _name;
    }

    function updatePfp(string memory _pfp) public{
        addressToUser[msg.sender].pfp = _pfp;
    }

    function updateEmail(string memory _email) public{
        addressToUser[msg.sender].email = _email;
    }

    function createPost(string memory _id,address _author, string memory _img, string memory _descr) public {
        require(msg.sender==_author, "You are not authorized");
        Post memory post = Post(_id,_author,_img,_descr,0,0,++addressToUser[_author].posts);
        userToPosts[_author][post.count] = post;
    }

    function deletePost(address _author, uint _count) public {
        require(msg.sender==_author, "You are not authorized");
        delete userToPosts[_author][_count];
    }

    function follow(address _user) public {
        User memory follower = addressToUser[msg.sender];
        userToFollowers[_user].push(follower);
        addressToUser[_user].followers++;
    }

    function unfollow(address _user) public {
        User[] storage followers = userToFollowers[_user];
        for (uint i; i<followers.length; i++) 
        {
            if (followers[i].user == msg.sender) {
                followers[i] = followers[followers.length -1];
                followers.pop();
                break ;
            }
        }
        addressToUser[_user].followers--;
    }

    function like(string memory _id) public {
        User memory liker = addressToUser[msg.sender];
        PostToLikes[_id].push(liker);
    }
    
    function unLike(string memory _id) public {
        for (uint i; i<PostToLikes[_id].length; i++) 
        {
            if (PostToLikes[_id][i].user == msg.sender) {
                PostToLikes[_id][i] = PostToLikes[_id][PostToLikes[_id].length -1];
                PostToLikes[_id].pop();
                break ;
            }
        }
    }

    function addComment(string memory _text , string memory _id) public {
        PostToComments[_id].push(Comment(_text,msg.sender));
    }
    // deletes all the comment by user in specified post
    function deleteComment(string memory _id) public {
        for (uint i; i<PostToComments[_id].length; i++) 
        {
            if (PostToComments[_id][i].author == msg.sender) {
                PostToComments[_id][i] = PostToComments[_id][PostToComments[_id].length -1];
                PostToComments[_id].pop();
            }
        }
    }
}