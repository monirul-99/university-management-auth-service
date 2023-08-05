import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()
import userRouters from './app/modules/usersModule/users.route'
import usersServices from './app/modules/usersModule/users.services'

app.use(cors())

// Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application Route
app.use('/api/v1/users', userRouters)
// Testing
app.get('/', async (req: Request, res: Response) => {
  await usersServices.createUser({
    id: '999',
    password: '1234',
    role: 'student',
  })
  res.send('Working Successfully')
})

export default app
