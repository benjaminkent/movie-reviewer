class Movie < ApplicationRecord
  belongs_to :category
  validates :name, presence: true
  validates :description, presence: true
  validates :year_released, presence: true, numericality: true
  validates :category_id, presence: true
end
