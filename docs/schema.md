
# Schema Information

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
restaurant_id | integer | not null, foreign key (references notebooks), indexed
rating      | integer   | not null, (1..5)
price_rating| integer   | not null, (1..3)

## restaurants
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
website     | string    | 

## users
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
email       | string    | not null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## user_subscriptions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
subscriber_id | integer | not null, foreign key (references users), indexed
subscribee_id | integer | not null, foreign key (references users), indexed

## user_review_helpful_votes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer | not null, foreign key (references users), indexed
review_id   | integer | not null, foreign key (references reviews), indexed
helpful     | boolean   | 

## cuisines
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## cuisine_taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
restaurant_id | integer | not null, foreign key (references restaurants), indexed
cuisine_id    | integer | not null, foreign key (references cuisines), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## user_activity
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
type            | string    | not null
user_id         | string    | not null, foreign key (references users), indexed
restaurant_id   | string    | not null, foreign key (references restaurants), indexed
review_id       | string    | not null, foreign key (references reviews), indexed
