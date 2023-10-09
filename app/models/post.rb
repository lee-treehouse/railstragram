class Post < ApplicationRecord
  belongs_to :user
  has_many_attached :images

  validates :images, presence: true

  has_many :likes
end
