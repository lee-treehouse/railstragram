class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
protected
def configure_permitted_parameters
  # will this work? this is what rubocop wants instead of keys: [:username :phone_number :full_name]
    devise_parameter_sanitizer.permit(:sign_up, keys: %i[username phone_number full_name])
  end
end