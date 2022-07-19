import { app } from "./app"

import { UserController } from "./UserController"

const user = new UserController()

app.post('/user/signup', user.signup)
app.post('/user/login', user.login)

// app.put('/task', createTask)
app.get('/all', user.getAll)

