# usage: bundle exec rake quotes:add_data
# assume there is an admin user with id = 1
# TODO - fix so that it checks if source exists.

namespace :quotes do
  desc "Populate Data"
  task add_data: :environment do
    sources = [{title: "The Office", created_by: 1,
      quotes_attributes:
      { '0' => { quote: "That's what she said.", author: "Michael Scott" },
        '1' => { quote: "I am fast. To give you a reference point I am somewhere between a snake and a mongoose… And a panther.", author: "Dwight Schrutte"} }},
      {title: "Archer", created_by: 1,
      quotes_attributes:
      {
        '0' => { quote: "Idiots doing idiot things, because they’re idiots.", author: "Archer" },
        '1' => { quote: "The cumulative hangover will kill me.", author: "Archer" }
      }},
      {title: "Blues Brothers", created_by: 1,
      quotes_attributes:
      {
        '0' => { quote: "There's 106 miles to Chicago, we've got a full tank of gas, half a pack of cigarettes, it's dark out, and we're wearing sunglasses.", author: "Elwood Blues" },
        '1' => { quote: "Bring me four fried chickens and a Coke.", author: "Elwood Blues" }
      }},
      {title: "Arrested Development", created_by: 1,
      quotes_attributes:
      {
        '0' => { quote: "I had to. It's vodka. It goes bad once it's opened", author: "Lindsay Bluth" },
        '1' => { quote: "Oh, please. I've been drinking since before you were born. So if alchol is the reason I'm here, I got news for you, bub, it's the only reason you're here too.", author: "Lucille Bluth" },
        '2' => { quote: "So watery. And yet there's a smack of ham to it.", author: "Buster" },
      }},
      {title: "Star Wars", created_by: 1,
      quotes_attributes:
      {
         '0' => { quote: "I find your lack of faith disturbing.", author: "Darth Vader" },
         '1' => { quote: "It’s the ship that made the Kessel run in less than twelve parsecs. I’ve outrun Imperial starships. Not the local bulk cruisers, mind you. I’m talking about the big Corellian ships, now. She’s fast enough for you, old man.", author: "Han Solo" },
         '2' => { quote: "The Force will be with you. Always.", author: "Obi-Wan Kenobi" }
       }}]
    # loop through each source and save it, then save quote
    Source.create!(sources)
  end

end

# {title: "Arrested Development", created_by: 1,
# quotes_attributes:
# {
#   '0' => { quote: "", author: "" },
#   '1' => { quote: "", author: "" }
# }},
