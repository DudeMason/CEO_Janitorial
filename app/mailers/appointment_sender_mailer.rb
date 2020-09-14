class AppointmentSenderMailer < ApplicationMailer

	# using SendGrid's Ruby Library
	# https://github.com/sendgrid/sendgrid-ruby
	require 'sendgrid-ruby'
	include SendGrid

	def send_appointment(params)

		email = params[:email]

		ceoEmail = Email.new(email: 'ceojanitorial@gmail.com')

		from = ceoEmail
		to = Email.new(email: "#{email}")
		bcc = ceoEmail
		subject = 'Appointment Submitted'
		content = Content.new(type: 'text/html', value:
			"<html>
				<body>
					<h2>Your appointment has been submitted.</h2>
					<h3>Please be aware that they may contact you to reschedule if there are any scheduling conflicts.</h3>
					<ul>
						<li>
							Name: #{params[:first_name]} #{params[:last_name]}
						</li>
						<li>
							Phone: #{params[:phone1]}-#{params[:phone2]}-#{params[:phone3]}
						</li>
						<li>
							Company: #{params[:company]}
						</li>
						<li>
							Date: #{Date.parse(params[:date]).strftime("%m/%d/%Y")}
						</li>
						<li>
							Time: #{params[:time]}
						</li>
						<p>
							Your message:
							<br/>
							'#{params[:message]}'
						</p>
					</ul>
					<h3>Thank you for choosing CEO Janitorial!</h3>
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
