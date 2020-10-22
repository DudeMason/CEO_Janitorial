class Api::AppointmentSendersController < ApplicationController

	def create
		if AppointmentSenderMailer.send_appointment(params).deliver
			NotificationSenderMailer.send_notification(params).deliver
		else
			puts 'Neither appointment nor notification emails were sent!'
		end
	end

end
