require 'rails_helper'

# Test suite for the Quote model
RSpec.describe Quote, type: :model do
  # Association test
  # ensure an Quote record belongs to a single Source record
  it { should belong_to(:source) }
  # Validation test
  # ensure column quote is present before saving
  it { should validate_presence_of(:quote) }

  it "is not valid without a quote" do
    quote = Quote.new(quote: nil)
    expect(quote).to_not be_valid
  end

  # ensure column author is present before saving
  it { should validate_presence_of(:author) }

  it "is not valid without an author" do
    quote = Quote.new(author: nil)
    expect(quote).to_not be_valid
  end
end
