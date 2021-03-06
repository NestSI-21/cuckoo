# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users

  post 'slack/login', to: 'slack_auth#create'
  resources :categories, only: :index
  resources :companies, only: :index
  resources :posts, only: %I[index create destroy]
  namespace :users do
    resource :profiles, only: %i[show update]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'home#index'
end
