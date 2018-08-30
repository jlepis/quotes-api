class Quote < ApplicationRecord
  belongs_to :source

  # validation
  validates_presence_of :quote
end
