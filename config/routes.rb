Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create, :update, :show, :index]
    resources :restaurants, only: [:create, :show, :update, :index] do
      resources :photos, only: [:create]      
    end
    resources :reviews
    resource :session, only: [:show, :create, :destroy]
    get "search", to: "utils#search"
  end

end
