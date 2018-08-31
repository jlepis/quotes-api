require 'rails_helper'

# Test suite for the Quote model
RSpec.describe Quote, type: :model do
  # Association test
  # ensure an Quote record belongs to a single Source record
  it { should belong_to(:source) }
  # Validation test
  # ensure column quote is present before saving
  it { should validate_presence_of(:quote) }
  # ensure column author is present before saving
  it { should validate_presence_of(:author) }
end
