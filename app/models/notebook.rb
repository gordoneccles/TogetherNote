class Notebook < ApplicationRecord
  validates :name, presence: true
  validates :user, presence: true

  belongs_to :user

  has_many :notebook_notes, inverse_of: :notebook
  has_many :notes, through: :notebook_notes
end
