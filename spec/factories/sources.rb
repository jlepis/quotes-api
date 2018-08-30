FactoryBot.define do
  factory :source do
    title { Faker::Lorem.word }
    description { Faker::Lorem.paragraph }
    created_by { Faker::Number.number(10) }
  end
end
