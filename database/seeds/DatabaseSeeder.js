'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const User = use('App/Models/User')

class DatabaseSeeder {
  async run () {
    const user = await User.create({
      name: 'Cleyton Gama',
      email: 'cleytongama@gmail.com',
      password: '123456'
    })

    await user.teams().create({
      name: 'CgamaTech',
      user_id: user.id
    })
  }
}

module.exports = DatabaseSeeder
