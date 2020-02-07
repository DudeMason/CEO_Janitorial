class AppointmentSenderMailer < ApplicationMailer

	# using SendGrid's Ruby Library
	# https://github.com/sendgrid/sendgrid-ruby
	require 'sendgrid-ruby'
	include SendGrid

	def send_appointment(params)

		email = params[:email]

		puts email

		from = Email.new(email: 'mason.deyre@gmail.com')
		to = Email.new(email: "mason.deyre@gmail.com")
		subject = 'CEO Appointment'
		content = Content.new(type: 'text/html', value:
			"<html>
				<body>
					<div>
						Appointment has been set!
						#{params[:first_name]}
					</div>
				</body>
			</html>"
		)
		mail = Mail.new(from, subject, to, content)
		sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
		response = sg.client.mail._('send').post(request_body: mail.to_json)

		puts response.status_code
		puts response.body
		puts response.headers

	end
end
