FactoryBot.define do
  factory :quote do
    quote { Faker::MichaelScott.quote }
    author { Faker::StarWars.character}
    source_id { nil }
  end
end
