class House < ApplicationRecord
  has_many :visits
  has_many :users, through: :visits
  has_many :reviews
end
