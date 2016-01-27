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
  address: '118 W 74th st',
  city: 'New York City',
  zipcode: '10023',
  gender: 'M',
  birthdate: '1/19/1990')

Restaurant.create(name: "Freddie & Pepper\'s",
  address: "303 Amsterdam Ave",
  city: 'New York City',
  zipcode: '10023',
  phone_number: '2127992463',
  website: 'www.freddieandpeppers.com'
  )
