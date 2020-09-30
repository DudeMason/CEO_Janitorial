class NotificationSenderMailer < ApplicationMailer

  # using SendGrid's Ruby Library
  # https://github.com/sendgrid/sendgrid-ruby
  require 'sendgrid-ruby'
  include SendGrid

  def send_notification(params)
    app_email = Email.new(email: 'no-reply@ceojanitorial.com', name: 'CEO Appointments')
    ceo_email = Email.new(email: 'ceojanitorial@gmail.com')

    from = app_email
    to = ceo_email
    subject = 'New Appointment Submitted'
    content = Content.new(
        type: 'text/html',
        value: "<html>
						<body>
							<h2>A client has submitted an appointment.</h2>
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
									Their message:
									<br/>
									\"#{params[:message]}\"
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

  end
end
