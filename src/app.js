const express=require('express')
const app = express()
const port = process.env.PORT || 3000



const path = require('path')



const publicDirectory = path.join(__dirname,'../public')
app.use(express.static(publicDirectory))


// //////////////////
 const viewsDirectory = path.join(__dirname,'../templates/views')
 app.set('views',viewsDirectory)


const request = require('request')
const url="https://newsapi.org/v2/top-headlines?country=eg&apiKey=38119b714c9546ac9305dcfd17a31a76"

app.set('view engine','hbs');
const hbs = require('hbs')


request({url,json:true},(error,response)=>{
    const article = response.body.articles;

    app.get('/' , (req,res)=>{

        res.render('index',{
            article

        })
    })

    
})





app.listen(port, () =>{
    console.log(`Server is running ${port}`)
})
