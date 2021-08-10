# frozen_string_literal: true

class Category < ApplicationRecord
  belongs_to :type
end
