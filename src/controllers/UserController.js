const User = require('../models/User');
const { response } = require('express');

module.exports = {
   
   async store(request, response) {
      const { name, email } = request.body;

      const user = await User.create({
         name, 
         email
      });

      return response.json(user);
   },

   async index(request, response) {
      const users = await User.findAll()

      return response.json(users);
   }
}