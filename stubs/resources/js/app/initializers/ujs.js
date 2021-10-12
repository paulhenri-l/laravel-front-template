import Rails from '@rails/ujs'

window.RailsUjs = Rails

if (!window._rails_loaded) {
  window.RailsUjs = Rails.start()
}
