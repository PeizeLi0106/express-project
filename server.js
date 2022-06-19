const express = require('express');
const app = express();
const PORT = 3000;

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');


app.listen(PORT, ()=>{
    console.log(`Listening to PORT ${PORT}...`);
})
app.use((req, res, next) => {
    const start = Date.now();
    console.log(`${req.method} ${req.url}`);
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl} ${req.url} took ${delta}ms`);

})
app.use(express.json()); // convert JSON to a JS object

app.use('/site', express.static('public'));
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);




