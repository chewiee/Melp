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

Restaurant.create(name: "Shake Shack",
  address: "366 Columbus Ave",
  city: 'New York City',
  zipcode: '10023',
  phone_number: '6467478770',
  website: 'www.shakeshack.com'
  )

Restaurant.create(name: "Hummus Place",
  address: "305 Amsterdam Ave",
  city: 'New York City',
  zipcode: '10023',
  phone_number: '2127993335',
  website: 'www.hummusplace.com'
  )

Restaurant.create(name: "Lenwich by Lenny\'s",
  address: "302 Columbus Ave",
  city: 'New York City',
  zipcode: '10023',
  phone_number: '2125808300',
  website: 'www.lenwich.com'
  )

Restaurant.create(name: "Simit & Smith",
  address: "124 W 72nd St",
  city: 'New York City',
  zipcode: '10023',
  phone_number: '2124966605',
  website: 'www.simitandsmith.com'
  )
