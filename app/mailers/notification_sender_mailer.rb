class NotificationSenderMailer < ApplicationMailer

	# using SendGrid's Ruby Library
	# https://github.com/sendgrid/sendgrid-ruby
	require 'sendgrid-ruby'
	include SendGrid

	def send_notification(params)
		app_email = Email.new(email: 'no-reply@ceojanitorial.com', name: 'CEO Appointments')
		ceo_email = Email.new(email: 'ceojanitorial@gmail.com')

		from    = app_email
		to      = ceo_email
		subject = 'New Appointment Submitted'
		content = Content.new(type: 'text/html', value: I18n.t('appointment_notification', params: params[:first_name], params2: params[:last_name], params3: params[:phone1], params4: params[:phone2], params5: params[:phone3], var: Date.parse(params[:date]).strftime("%m/%d/%Y"), params6: params[:time], params7: params[:company], params8: params[:message]))

		mail = Mail.new(from, subject, to, content)

		sg       = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
		response = sg.client.mail._('send').post(request_body: mail.to_json)
		puts response.status_code
		puts response.body

	end
end
