import fs from 'fs';
const index = fs.readFileSync('index.html','utf-8');
const dat = JSON.parse(fs.readFileSync('data.json','utf-8'))
const data = dat.products;


import express from 'express'
const app = express();

// app.use(morgan('default'));
app.use(express.json())
// app.use(express.static('public'))

app.use((req,res,next) => {
    console.log(req.get('User-Agent') , req.body);
    next();

})
app.get('/products',(req,res) => res.json(dat))

app.get('/products/:id', (req, res) => {
    console.log(req.params)
    const id = +req.params.id;
    const prod = data.find(p => p.id === id);
    res.json(prod);
});

app.post('/products',(req,res) => {
    data.push(req.body)
    res.send(req.body)
})

app.put('/products/:id', (req, res) => {
    const id = +req.params.id;
    const productIndex = data.findIndex((p) => p.id === id);
    console.log(productIndex);
    if (productIndex !== -1) {
        data.splice(productIndex, 1, {...req.body, id: id});
        res.send('Product updated successfully');
    } else {
        res.status(404).send('Product not found');
    }
});

app.listen(3000,() => {console.log("Server Started")})


