class AppointmentSenderMailer < ApplicationMailer

	# using SendGrid's Ruby Library
	# https://github.com/sendgrid/sendgrid-ruby
	require 'sendgrid-ruby'
	include SendGrid

	def send_appointment(params)

		mail = JSON.parse("{
			'personalizations': [
        {
          'to': [
            {
              'email': '#{params[:email]}'
            }
          ],
          'subject': 'Appointment Submitted'
        }
      ],
      'from': {
        'email': 'ceojanitorial@gmail.com'
				'name': 'CEO Janitorial'
      },
      'content': [
        {
          'type': 'text/html',
          'value': #{I18n.t('appointment_submitted', params: params[:first_name], params2: params[:last_name], params3: params[:phone1], params4: params[:phone2], params5: params[:phone3], var: Date.parse(params[:date]).strftime("%m/%d/%Y"), params6: params[:time], params7: params[:company], params8: params[:message])}
        }
      ],
			'mail_settings': {
				'sandbox_mode': {
					'enable': false
				}
			}
		}")

		# ceo_email    = Email.new(email: 'ceojanitorial@gmail.com', name: 'CEO Janitorial')
		# client_email = Email.new(email: "#{params[:email]}")
		#
		# from    = ceo_email
		# to      = client_email
		# subject = 'Appointment Submitted'
		# content = Content.new(type: 'text/html', value: I18n.t('appointment_submitted', params: params[:first_name], params2: params[:last_name], params3: params[:phone1], params4: params[:phone2], params5: params[:phone3], var: Date.parse(params[:date]).strftime("%m/%d/%Y"), params6: params[:time], params7: params[:company], params8: params[:message]))
		#
		# mail = Mail.new(from, subject, to, content)

		sg       = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
		sg.client.mail._('send').post(request_body: mail.to_json)
		# puts response.status_code
		# puts response.body
		# puts response.parsed_body
		# puts response.headers

	end
end
