# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(email: 'guest@email.com',
  username: 'guest',
  password: 'password',
  password_confirmation: 'password',
  address: '123 sunny st, nyc, 10023',
  gender: 'M',
  birthdate: '1/19/1990')
