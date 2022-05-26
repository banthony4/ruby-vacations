class User < ApplicationRecord
  has_many :visits
  has_many :houses, through: :visits

  has_secure_password

  validates :username, presence: true, uniqueness: true
end
