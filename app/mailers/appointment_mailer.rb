class ProjectSenderMailer < ApplicationMailer

	# using SendGrid's Ruby Library
	# https://github.com/sendgrid/sendgrid-ruby
	require 'sendgrid-ruby'

	include SendGrid

	def send_project(params)
		from = Email.new(email: 'apollo105010@gmail.com')
		to = Email.new(email: 'chris.anderson955@gmail.com')
		subject = 'Project Estimate'
		content = Content.new(type: 'text/plain', value: 'and easy to do
		anywhere, even with Ruby')
		mail = Mail.new(from, subject, to, content)
		binding.pry
		sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
		response = sg.client.mail._('send').post(request_body: mail.to_json)

		puts response.status_code
		puts response.body
		puts response.headers
	end

end
