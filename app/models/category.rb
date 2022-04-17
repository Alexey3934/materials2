class Category < ApplicationRecord
    validates :name, length: { maximum: 20 }
    validates :name, uniqueness: true
    validates :name, format: { with: /[А-Яа-яA-Za-z0-9]+/, message: "only allows letters" }
end
# /\A[0-9a-zA-Z]+\z/
# /\w+/