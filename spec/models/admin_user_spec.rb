require 'rails_helper'

# Test suite for User model
RSpec.describe AdminUser, type: :model do
  # TODO: Association test

  # Validation tests
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password) }

end
