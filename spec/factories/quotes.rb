FactoryBot.define do
  factory :quote do
    quote { Faker::MichaelScott.quote }
    source_id { nil }
  end
end
