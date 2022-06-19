const model = require('../models/friends.model');

function getFriends(req, res){
    res.status(200).json(model);
}

function getFriend(req, res){
    const friendID = Number(req.params.friendID); // since req.params.friendID is a string
    const friend = model[friendID];
    if (friend){
        res.status(200).json(friend); // good habit to send json response always
    }else{
        res.status(404).json({
            error: "Friend doesn't exist"
        })
    }
}

function postFriend(req, res){
    if (!req.body.name){
        return res.status(400).json({
            error: "Missing friend name"
        })
    }
    const newFriend = {
        name: req.body.name, // since I implemented the express.json() middleware, I don't need to convert the body to a JSON
        id: model.length
    }
    model.push(newFriend);
    res.json(newFriend)
}

module.exports = {
    getFriends, 
    getFriend, 
    postFriend, 
};