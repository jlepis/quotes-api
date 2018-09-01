class Source < ApplicationRecord
  # model association
  has_many :quotes, dependent: :destroy

  # validations
  validates_presence_of :title, :created_by

  accepts_nested_attributes_for :quotes
end
