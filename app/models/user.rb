class User < ApplicationRecord
  has_many :visits, dependent: :nullify
  has_many :houses, through: :visits
  has_many :reviews, dependent: :nullify

  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :name, presence: true
  validates :email, presence: true
  
end
