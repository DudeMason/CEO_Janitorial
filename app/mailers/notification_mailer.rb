class NotificationMailer < ApplicationMailer

	# using SendGrid's Ruby Library
	# https://github.com/sendgrid/sendgrid-ruby
	require 'sendgrid-ruby'
	include SendGrid

	def send_appointment(params)

		ceoEmail = Email.new(email: 'ceojanitorial@gmail.com')

		from = ceoEmail
		to = ["#{ceoEmail}", "mason.deyre@gmail.com"]
		subject = 'New Appointment'
		content = Content.new(type: 'text/html', value:
			"<html>
				<body>
					<h2>A client has set an appointment.</h2>
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
							Their message:
							<br/>
							'#{params[:message]}'
						</p>
					</ul>
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
