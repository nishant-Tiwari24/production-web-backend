const express  = require('express');
require('dotenv').config()             //important
const app = express()
const port = 4000

const githubData = {
    "login": "nishant-Tiwari24",
    "id": 124623023,
    "node_id": "U_kgDOB22Yrw",
    "avatar_url": "https://avatars.githubusercontent.com/u/124623023?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/nishant-Tiwari24",
    "html_url": "https://github.com/nishant-Tiwari24",
    "followers_url": "https://api.github.com/users/nishant-Tiwari24/followers",
    "following_url": "https://api.github.com/users/nishant-Tiwari24/following{/other_user}",
    "gists_url": "https://api.github.com/users/nishant-Tiwari24/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/nishant-Tiwari24/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/nishant-Tiwari24/subscriptions",
    "organizations_url": "https://api.github.com/users/nishant-Tiwari24/orgs",
    "repos_url": "https://api.github.com/users/nishant-Tiwari24/repos",
    "events_url": "https://api.github.com/users/nishant-Tiwari24/events{/privacy}",
    "received_events_url": "https://api.github.com/users/nishant-Tiwari24/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Nishant Tiwari",
    "company": "SRM University Andhra Pradesh ",
    "blog": "",
    "location": "Secunderabad, Telangana, lndia ",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 27,
    "public_gists": 0,
    "followers": 11,
    "following": 16,
    "created_at": "2023-02-06T18:51:06Z",
    "updated_at": "2024-02-02T15:47:02Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about',(req,res) => {
    res.send("About page")
})

app.get('/login',(req,res) => {
    res.send("<h1>Login page</h1>")
})

app.get('/github',(req,res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {    // important
  console.log(`Example app listening on port ${port}`)
})