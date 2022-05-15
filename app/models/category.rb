class Category < ApplicationRecord
    has_many :materials

    validates :name, uniqueness: true
end
