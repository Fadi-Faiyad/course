import express from 'express' 
import router from './router';
import morgan from "morgan"
import { protect } from './modules/auth';
import { createNewUser, signin } from './handlers/user';


const app = express();


const customLogger = (message) => (req, res, next) => {
     console.log(`Hello from ${message}`)
     next()
}



app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(customLogger('customer Logger'))



app.get('/', (req, res) => {
     console.log('hello world from exress');
     res.status(200);
     res.json({message: 'hello'});
})

// they way router work is cool
// /api/router that would be how you call on this
// i think its like the html and css how in html you asing id and in css you can call on that id to change it up
// this is similar we are calling on router only when we call api first
// what ever i want i can add here and i make a differnt route for calling and doing something else 
app.use('/api', protect, router)

app.post('/user', createNewUser)
app.post('/signin', signin)

export default app