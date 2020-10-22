class Api::AppointmentSendersController < ApplicationController

	def create
		AppointmentSenderMailer.send_appointment(params).deliver
		if response.status === 200 || 201 || 202 || 203 || 204
			NotificationSenderMailer.send_notification(params).deliver
		end
	end

end
