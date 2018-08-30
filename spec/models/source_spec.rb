require 'rails_helper'

# Test suite for the Source model
RSpec.describe Source, type: :model do
  # Association test
  # ensure Source model has a 1:m relationship with the Quote model
  it { should have_many(:quotes).dependent(:destroy) }
  # Validation tests
  # ensure columns title and created_by are present before saving
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:created_by) }
end
