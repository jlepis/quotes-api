class Quote < ApplicationRecord
  belongs_to :source

  # validation
  validates_presence_of :quote, :author

  # get a single random quote
  scope :random_quote, lambda {
    Quote.joins(:source).select("quotes.id, author, quote, title")
      .limit(1)
      .order(Arel.sql('RAND()'))
  }

end
