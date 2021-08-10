# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users

  post 'slack/login', to: 'slack_auth#create'
  post 'users/complete_profile', to: 'complete_profile#update'
  resources :categories, only: :index
  resources :companies, only: :index
  resources :posts, only: %I[index create destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'home#index'
end
