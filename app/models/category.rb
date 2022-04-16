class Category < ApplicationRecord
    validates :name, length: { maximum: 20 }
    validates :name, uniqueness: true
    validates :name, format: { with: /\w+/, message: "only allows letters" }
end
# /\A[0-9a-zA-Z]+\z/