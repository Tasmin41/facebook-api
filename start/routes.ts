/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

/*Post routes*/
Route.get('/posts', 'PostsController.index')
Route.post("/posts","PostsController.store")
Route.post("/posts/:id","PostsController.update")
Route.delete("/posts/:id","PostsController.delete")

/*react routes*/

Route.post("/reacts","ReactsController.store")
Route.post('/reacts/:id', 'ReactsController.update')


/*comment routes*/
Route.post("/comments","CommentsController.store")

/*Replies routes*/
Route.post("/replies","RepliesController.store")




// Route.resource('tests','Postscontroller').apiOnly()