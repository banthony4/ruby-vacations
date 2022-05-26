class House < ApplicationRecord
  has_many :visits, dependent: :destroy
  has_many :users, through: :visits
  has_many :reviews, dependent: :destroy
end
