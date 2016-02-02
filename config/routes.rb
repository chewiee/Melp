Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create, :update, :show, :index]
    resources :restaurants, only: [:create, :show, :index]
    resources :reviews
    resource :session, only: [:show, :create, :destroy]
  end

end
