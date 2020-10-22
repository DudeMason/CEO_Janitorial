class Api::AppointmentSendersController < ApplicationController

	def create
		AppointmentSenderMailer.send_appointment(params)
		if response.status === 200 || 201 || 202 || 203 || 204
			NotificationSenderMailer.send_notification(params)
		else
			puts '*****************************'
			puts '**Neither emails were sent!**'
			puts '*****************************'
		end
	end

end
