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
  birthdate: '1995-1-1')

ranna = User.create(email: 'rannabansal@gmail.com',
  username: 'ranna',
  password: 'password',
  password_confirmation: 'password',
  address: '118 W 74th st',
  city: 'New York City',
  zipcode: '10023',
  gender: 'M',
  birthdate: '1990-1-19')

tony = User.create(email: 'tony@partsunknown.com',
  username: 'anthony',
  password: 'password',
  password_confirmation: 'password',
  address: '124 Raymond Ave',
  city: 'Poughkeepsie',
  zipcode: '12604',
  gender: 'M',
  birthdate: '1956-6-25')

gordon = User.create(email: 'gordon@hellskitchen.com',
  username: 'gordon-the-great',
  password: 'password',
  password_confirmation: 'password',
  address: '151 W 54th St',
  city: 'New York City',
  zipcode: '10019',
  gender: 'M',
  birthdate: '1966-11-8')

bronson = User.create(email: 'action@bronson.com',
  username: 'bronsolini',
  password: 'password',
  password_confirmation: 'password',
  address: '184-22 Horace Harding Expressway',
  city: 'Queens',
  zipcode: '11365',
  gender: 'M',
  birthdate: '1983-12-2')


freddie = Restaurant.create(name: "Freddie & Pepper\'s",
  address: "303 Amsterdam Ave",
  city: 'New York City',
  zipcode: '10023',
  phone_number: '2127992463',
  website: 'www.freddieandpeppers.com',
  default_photo: File.open("#{Rails.root}/app/assets/images/freddie_default.jpg")
  )

shack = Restaurant.create(name: "Shake Shack",
  address: "366 Columbus Ave",
  city: 'New York City',
  zipcode: '10023',
  phone_number: '6467478770',
  website: 'www.shakeshack.com',
  default_photo: File.open("#{Rails.root}/app/assets/images/shack_default.jpg")
  )

hummus = Restaurant.create(name: "Hummus Place",
  address: "305 Amsterdam Ave",
  city: 'New York City',
  zipcode: '10023',
  phone_number: '2127993335',
  website: 'www.hummusplace.com',
  default_photo: File.open("#{Rails.root}/app/assets/images/hummus_default.jpg")
  )

lenwich = Restaurant.create(name: "Lenwich by Lenny\'s",
  address: "302 Columbus Ave",
  city: 'New York City',
  zipcode: '10023',
  phone_number: '2125808300',
  website: 'www.lenwich.com',
  default_photo: File.open("#{Rails.root}/app/assets/images/lenwich_default.jpg")
  )

simit = Restaurant.create(name: "Simit & Smith",
  address: "124 W 72nd St",
  city: 'New York City',
  zipcode: '10023',
  phone_number: '2124966605',
  website: 'www.simitandsmith.com',
  default_photo: File.open("#{Rails.root}/app/assets/images/simit_default.jpg")
  )

Review.create(author_id: ranna.id,
  restaurant_id: freddie.id,
  star_rating: 4,
  price_rating: 1,
  body: "Solid variety for a pizza place, with big slices. $5 will get you far. Open late too!")

Review.create(author_id: ranna.id,
  restaurant_id: shack.id,
  star_rating: 5,
  price_rating: 2,
  body: "Love the burgers and fries, but the lines are crazy during normal hours.")

Review.create(author_id: ranna.id,
  restaurant_id: hummus.id,
  star_rating: 5,
  price_rating: 3,
  body: "Super delicious, best fries ever. The falafel sandwich is amazing, but not very filling.")

Review.create(author_id: ranna.id,
  restaurant_id: lenwich.id,
  star_rating: 4,
  price_rating: 2,
  body: "Solid deli, fast service.")

Review.create(author_id: ranna.id,
  restaurant_id: simit.id,
  star_rating: 5,
  price_rating: 1,
  body: 'Great breakfast "bagel". Turkish coffee is yummy too, and the line is never long.')
