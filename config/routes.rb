Rails.application.routes.draw do
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :login_status do
    collection do
      get 'statistics'
    end
  end

  root 'login_status#analysis'
end
