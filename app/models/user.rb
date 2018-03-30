class User < ApplicationRecord
  validates :name, :presence => true, :on => :create
  validates :email, presence: true, :uniqueness => true
  validates :password, presence: true
  validates_length_of :password, :in => 6..20, :on => :create

end
