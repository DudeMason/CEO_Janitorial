class ApplicationMailer < ActionMailer::Base
  default from: 'ceojanitorial@gmail.com'
  default bcc:  'ceojanitorial@gmail.com'

  layout  'mailer'
end
