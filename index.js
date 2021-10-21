const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json())
const port = 5000;

app.get('/', (req, res) => {
    res.send('hello from second node server,And I am excited....')
})
const users = [
    { id: 0, name: "sonali", email: "sonali@gmail.com", phone: "0190245666" },
    { id: 1, name: "sabana", email: "sabana@gmail.com", phone: "0123667666" },
    { id: 2, name: "sabnur", email: "sabnur@gmail.com", phone: "0123782345" },
    { id: 3, name: "sabonti", email: "sabonti@gmail.com", phone: "012369268" },
    { id: 4, name: "susmita", email: "susmita@gmail.com", phone: "01235724" },
    { id: 5, name: "susona", email: "susona@gmail.com", phone: "0147265666" },

]
app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameters
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    } else {
        res.send(users)
    }

});

app.post('/users', (req,res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'banana'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yammy tok fazli')
})

app.listen(port, () => {
    console.log('Listining to port', port)
})