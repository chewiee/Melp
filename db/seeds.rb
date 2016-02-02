# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Review.destroy_all
Restaurant.destroy_all

guest = User.create(email: 'guest@email.com',
  username: 'guest',
  password: 'password',
  password_confirmation: 'password',
  address: '118 W 74th st',
  city: 'New York City',
  zipcode: '10023',
  gender: 'F',
  birthdate: '1/1/1995')

ranna = User.create(email: 'rannabansal@gmail.com',
  username: 'ranna',
  password: 'password',
  password_confirmation: 'password',
  address: '118 W 74th st',
  city: 'New York City',
  zipcode: '10023',
  gender: 'M',
  birthdate: '1/19/1990')

tony = User.create(email: 'tony@partsunknown.com',
  username: 'anthony',
  password: 'password',
  password_confirmation: 'password',
  address: '124 Raymond Ave',
  city: 'Poughkeepsie',
  zipcode: '12604',
  gender: 'M',
  birthdate: '6/25/1956')

gordon = User.create(email: 'gordon@hellskitchen.com',
  username: 'gordon-the-great',
  password: 'password',
  password_confirmation: 'password',
  address: '151 W 54th St',
  city: 'New York City',
  zipcode: '10019',
  gender: 'M',
  birthdate: '11/8/1966')

bronson = User.create(email: 'action@bronson.com',
  username: 'bronsolini',
  password: 'password',
  password_confirmation: 'password',
  address: '184-22 Horace Harding Expressway',
  city: 'Queens',
  zipcode: '11365',
  gender: 'M',
  birthdate: '12/2/1983')


freddies = Restaurant.create(name: "Freddie & Pepper\'s",
  address: "303 Amsterdam Ave",
  city: 'New York City',
  zipcode: '10023',
  phone_number: '2127992463',
  website: 'www.freddieandpeppers.com'
  )

shack = Restaurant.create(name: "Shake Shack",
  address: "366 Columbus Ave",
  city: 'New York City',
  zipcode: '10023',
  phone_number: '6467478770',
  website: 'www.shakeshack.com'
  )

hummus = Restaurant.create(name: "Hummus Place",
  address: "305 Amsterdam Ave",
  city: 'New York City',
  zipcode: '10023',
  phone_number: '2127993335',
  website: 'www.hummusplace.com'
  )

lenwich = Restaurant.create(name: "Lenwich by Lenny\'s",
  address: "302 Columbus Ave",
  city: 'New York City',
  zipcode: '10023',
  phone_number: '2125808300',
  website: 'www.lenwich.com'
  )

simit = Restaurant.create(name: "Simit & Smith",
  address: "124 W 72nd St",
  city: 'New York City',
  zipcode: '10023',
  phone_number: '2124966605',
  website: 'www.simitandsmith.com'
  )

Review.create(author_id: ranna.id,
  restaurant_id: freddies.id,
  star_rating: 4,
  price_rating: 1,
  snippet: "Solid variety for a pizza place, with big slices. $5 will get you far. Open late too!")

Review.create(author_id: ranna.id,
  restaurant_id: shack.id,
  star_rating: 5,
  price_rating: 2,
  snippet: "Love the burgers and fries, but the lines are crazy during normal hours.")

Review.create(author_id: ranna.id,
  restaurant_id: hummus.id,
  star_rating: 5,
  price_rating: 3,
  snippet: "Super delicious, best fries ever. The falafel sandwich is amazing, but not very filling.")

Review.create(author_id: ranna.id,
  restaurant_id: lenwich.id,
  star_rating: 4,
  price_rating: 2,
  snippet: "Solid deli, fast service.")

  Review.create(author_id: ranna.id,
    restaurant_id: simit.id,
    star_rating: 5,
    price_rating: 1,
    snippet: 'Great breakfast "bagel". Turkish coffee is yummy too, and the line is never long.')
