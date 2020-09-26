class AppointmentSenderMailer < ApplicationMailer

	# using SendGrid's Ruby Library
	# https://github.com/sendgrid/sendgrid-ruby
	require 'sendgrid-ruby'
	include SendGrid

	def send_appointment(params)
		ceoEmail = 	  Email.new(email: 'ceojanitorial@gmail.com', name: 'CEO Janitorial')
		clientEmail = Email.new(email: "#{params[:email]}")

		from = 		ceoEmail
		to = 		clientEmail
		subject = 	'Appointment Submitted'
		content = 	Content.new(
			type: 'text/html', 
			value: "<html>
						<body>
							<h2>Your appointment has been submitted.</h2>
							<h3>Please be aware that they may contact you to reschedule if there are any scheduling conflicts.</h3>
							<ul>
								<br>
									<u>Name</u>: #{params[:first_name]} #{params[:last_name]}
								</br>
								<br>
									<u>Phone</u>: #{params[:phone1]}-#{params[:phone2]}-#{params[:phone3]}
								</br>
								<br>
									<u>Date</u>: #{Date.parse(params[:date]).strftime("%m/%d/%Y")}
								</br>
								<br>
									<u>Time</u>: #{params[:time]}
								</br>
								<br>
									<u>Company</u>: #{params[:company]}
								</br>
								<p>
									Your message:
									<br/>
									\"#{params[:message]}\"
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

	end
end
