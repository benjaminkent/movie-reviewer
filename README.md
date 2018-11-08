# Suncoast Movie Reviewer

## things (nouns) in our business domain

> modeling our business domain

Movies

- name
- description
- year released

Category

- name
- movies

Reviews

- movie
- rating
- user
- message

User

- name
- avatar

## actions

> mapping URLs to actions that interact with that model

Note: all users are visitors, but not all visitors are users

[ ] visitors can search for movies
[ ] visitors can read reviews for movies
[ ] visitors can become users by signing up
[ ] users can write reviews for movies
[ ] users can write reviews that only include a rating

[ ] admins can add movies
[X] admins can add categories
[ ] admins moderate reviews
