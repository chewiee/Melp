# YelpClone
aA Capstone: Yelp clone

(will be added after day 1) - [Heroku link][heroku]

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

YelpClone is a web application inspired by Yelp built using Ruby on Rails
and React.js. FresherNote allows users to:

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create, read, edit, and delete reviews of restaurants
- [ ] Subscribe to other users' review feeds
- [ ] Search for restaurants by cuisine, rating, price, and location
- [ ] Search for reviews matching a phrase
- [ ] Rate reviews as helpful or unhelpful
- [ ] Create a profile with review stats

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Review Model and JSON API (1.5 days)

I'll first build user sign and authentication (using BCrypt, including e-mail 
confirmation). There will be a review feed landing page after signup that will
contain the application's root React component. Before building out the front
end, I will set up a full JSON API for Reviews.

[Details][phase-one]

### Phase 2: Flux Architecture and Review CRUD (2.5 days)

For Phase 2, I'll set up the Flux and React structure for the main application,
including a Review Store and necessary Review Actions. I will then create React
views for Reviews `List`, `Item`, and `Form`. At the end of the phase,
Reviews can be created, read, edited and destroyed in the browser. Reviews
should save to the database when the form loses focus or is left idle after 
editing. I'll start using basic bootstrap for styling.

[Details][phase-two]

### Phase 3: Restaurants and Search (3 days)

After Reviews are functional, I will add in Restaurants. Reviews must be 
associated with a particular Restaurant. I will also create a JSON API
for Restaurants along with a `Item` view to display one Restaurant and 
its Reviews. Restaurants will have properties that are aggregates of
their Reviews' properties. Users will also be able to filter Restaurants
and Reviews using `SearchIndex` and `SearchIndex` views. Finally, I will
create a Restaurants `Form` view to add potential new Restaurants pending
Admin review.

[Details][phase-three]

### Phase 4: Allow Subscribing to other Users and Rating Reviews (2 days)

I will create models and views to allow users to search for and subscribe to
other users. This will grant additional weight to these users' reviews when 
calculating Restaurant ratings. Users will also be able to modify their
profile page and "thumbs up" or "thumbs down" other reviews.

[Details][phase-four]

### Phase 5: Tracking (1 day)

I will implement a backend server which tracks user activity including
account creation, Restaurants and Review impressions and interaction,
and any available demographic data for the user (location, device).

[Details][phase-five]

### Phase 6: Styling Cleanup and Seeding (1 day)

I will make everything beautiful.

### Bonus Features (TBD)
- [ ] Transitions and subtle animations
- [ ] Find library for better user/review search
- [ ] Detect key phrases in review body to populate other fields (price, what menu item was ordered, etc.)
- [ ] Geolocation and E-mail submitted reviews

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
