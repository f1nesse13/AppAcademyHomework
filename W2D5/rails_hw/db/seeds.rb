# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
saul = House.create(address: "2108 Saul Street")
front = House.create(address: "2293 Front Street")
joe = Person.create(name: "Joe", house_id: saul.id)
layla = Person.create(name: "Layla", house_id: front.id)
