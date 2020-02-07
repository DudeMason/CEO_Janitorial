class Api::AppointmentSendersController < ApplicationController

	def create
		AppointmentSenderMailer.send_appointment(params).deliver
	end

end
