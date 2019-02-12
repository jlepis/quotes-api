FactoryBot.define do
  factory :quote do
    quote { Faker::TvShows::MichaelScott.quote }
    author { Faker::Movies::StarWars.character }
    source_id { nil }
  end
end
