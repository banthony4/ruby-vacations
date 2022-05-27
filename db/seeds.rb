require 'faker'

puts "🌱 Seeding spices..."

#create USERS
puts 'Seeding users..'
first = User.create(name: Faker::Name.first_name, email: Faker::Internet.email, username: Faker::Internet.username, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKg2mVZQEjyiI-PJmbuTf42UQv_am3-DBboA&usqp=CAU" )
second = User.create(name: Faker::Name.first_name, email: Faker::Internet.email, username: Faker::Internet.username, avatar: "https://i.imgur.com/7xktJyjh.jpg" )
third = User.create(name: Faker::Name.first_name, email: Faker::Internet.email, username: Faker::Internet.username, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuihFdDZ697HZvoVshamz53_IH9DAc6z89uA&usqp=CAU" )
fourth = User.create(name: Faker::Name.first_name, email: Faker::Internet.email, username: Faker::Internet.username, avatar: "https://static.wikia.nocookie.net/xbox/images/b/ba/Dragon-gamerpic.jpg/revision/latest/scale-to-width-down/250?cb=20200426103318")
fifth = User.create(name: Faker::Name.first_name, email: Faker::Internet.email, username: Faker::Internet.username, avatar: "https://preview.redd.it/cm7v4jwetbt21.png?width=640&crop=smart&auto=webp&s=0471c340ed13054160b579ea809ce19dfc1de92f")


# create HOUSES
puts 'Seeding Houses..'
house1 = House.create(name: "Rothbeard Castle", location: "Southern Florida" , description: "Beautiful modern castle located in the chraming Florida Keys", image: "https://gallery.streamlinevrs.com/units-gallery/00/06/BD/image_157340673.jpeg")
house2 = House.create(name: "Greenham Manor", location: "Southern Texas" , description: "Magnificant cinderella styled castle located near the peaceful Guadalupe Mountains in Texas", image: "http://www.wideopencountry.com/wp-content/uploads/2017/03/Whitechapel-castle.jpg")
house3 = House.create(name: "Falcons Nest", location: "Upstate New York" , description: "Comfortable modern treehouse that is located along the Adirondack Mountains", image: "https://i0.wp.com/files.tripstodiscover.com/files/2019/10/Dreamy-Treehouse-Retreat.jpg?resize=784%2C588")
house4 = House.create(name: "Ruby Penthouse", location: "Downtown Chicago" , description: "Extremly modern styled penthouse located in the busy downtown of Chicago", image: "https://www.downtownapartmentcompany.com/wp-content/uploads/2019/12/West-Loop-Luxury-2-bedroom-Penthouse-for-Rent-in-downtow-Chicago.1532-1-4-768x432.jpg")
house5 = House.create(name: "Sinatra's Lake House", location: "Lake Tahoe California" , description: "Delightful family sized home located along Lake Tahoe in California", image: "https://i.pinimg.com/originals/f2/b9/0f/f2b90fd8f7ab2fc52f45edf19b214231.jpg")
house6 = House.create(name: "THe Great Escape", location: "Miami Florida" , description: "Stylish modern penthouse located on the coast of Miami City", image: "https://luxlifemiamiblog.com/wp-content/uploads/2019/01/GetMedia-2020-10-20T161504.719.jpeg")
house7 = House.create(name: "Farmer's Dream", location: "Central Montana" , description: "Quiet and comfy home hidden in the hundreds of acres in Montana", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvT5jEm9D0Kr9qumK47ZTrf_ZmtmIqj04WGQ&usqp=CAU")
house8 = House.create(name: "The Python Nest", location: "Washington State" , description: "Lovely couples tent located on private land in Washington", image: "https://a0.muscache.com/pictures/77171678-5023-43fc-8ccc-a74a60652bb7.jpg")
house9 = House.create(name: "Alaskan Escape", location: "Southern Alaska" , description: "Experience the beauty of nature in this modern home hidden in the forests of Alaska", image: "https://www.homebuilderdigest.com/wp-content/uploads/2019/11/image12-4.jpg")
house10 = House.create(name: "The Avalanche", location: "Utah Mountains" , description: "Touch the sky while staying in the mountains of Utah with easy skiing access", image: "https://media.glampinghub.com/CACHE/images/accommodations/moving-mountains-trails-edge-lodge-cottage-1528713182930/d4334babd933e74902f94d2239cd5b7b.jpg")
house11 = House.create(name: "The Cozy Blizzard", location: "Colorado Mountains" , description: "Relaxing winter escape home located in the Colorado Mountains", image: "https://www.coloradotimberframe.com/wp-content/uploads/2019/07/sisters-hut-3-1.jpg")
house12 = House.create(name: "Fishermans Cave", location: "Florida Coast" , description: "Luxury houseboat located along the coast of southern Florida", image: "https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2017/08/boat-side.jpg")

#create REVIEWS

puts 'Seeding Reviews..'
Review.create(content: "I absolutely loved the weather!", rating: 5, user_id: first.id, house_id: house1.id)
Review.create(content: "I absolutely loved the weather!", rating: 5, user_id: first.id, house_id: house2.id)
Review.create(content: "I absolutely loved the weather!", rating: 5, user_id: fourth.id, house_id: house3.id)
Review.create(content: "I absolutely loved the weather!", rating: 5, user_id: first.id, house_id: house4.id)
Review.create(content: "I absolutely loved the weather!", rating: 5, user_id: second.id, house_id: house5.id)
Review.create(content: "I absolutely loved the weather!", rating: 5, user_id: second.id, house_id: house6.id)
Review.create(content: "I absolutely loved the weather!", rating: 5, user_id: second.id, house_id: house7.id)
Review.create(content: "I absolutely loved the weather!", rating: 5, user_id: third.id, house_id: house8.id)
Review.create(content: "I absolutely loved the weather!", rating: 5, user_id: third.id, house_id: house9.id)
Review.create(content: "I absolutely loved the weather!", rating: 5, user_id: fourth.id, house_id: house10.id)
Review.create(content: "I absolutely loved the weather!", rating: 5, user_id: fifth.id, house_id: house11.id)
Review.create(content: "I absolutely loved the weather!", rating: 5, user_id: fifth.id, house_id: house12.id)


# puts 'Seeding Visits..'
# Visit.create(date: "12/12/2020", user_id:second.id, house_id: house7.id)


puts "✅ Done seeding!"