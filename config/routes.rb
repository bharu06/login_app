Rails.application.routes.draw do
  resources :users do
    collection do
      get 'login_form'
      post 'login'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :login_status do
    collection do
      get 'statistics'
      post 'login_status_code'
    end
  end

  root 'login_status#analysis'
end
