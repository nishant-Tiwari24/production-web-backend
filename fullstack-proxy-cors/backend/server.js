import express from 'express';
const app = express();

const port = process.env.PORT || 3000;
// app.get('/',(req,res) => {
//     res.send('Hello World');
// });

app.use(express.static('dist'));

app.get('/api/jokes',(req,res) => {
    const jokes = [
          {
            "id": 1,
            "title": "The Chicken and the Road",
            "joke": "Why did the chicken cross the road? To get to the other side!"
          },
          {
            "id": 2,
            "title": "Dad Joke Alert",
            "joke": "I told my wife she was drawing her eyebrows too high. She looked surprised."
          },
          {
            "id": 3,
            "title": "Penguin Adventure",
            "joke": "Why don't you ever see penguins in the UK? Because they're afraid of Wales!"
          },
          {
            "id": 4,
            "title": "Coffee and Computers",
            "joke": "Why do programmers prefer dark mode? Because light attracts bugs!"
          },
          {
            "id": 5,
            "title": "Time Travel Woes",
            "joke": "I told my wife I'll be back in a minute. I'm still not back, but I'm optimistic."
          },
          {
            "id": 6,
            "title": "Math Class Mystery",
            "joke": "Why was six afraid of seven? Because seven eight (ate) nine!"
          },
          {
            "id": 7,
            "title": "The Invisible Man",
            "joke": "I used to play piano by ear, but now I use my hands and fingers."
          },
          {
            "id": 8,
            "title": "Gravity Joke",
            "joke": "I would tell you a joke about"
          }
    ]
      
    res.json(jokes);
})

app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})