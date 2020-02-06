class Api::ProjectSendersController < ApplicationController

	def create
		ProjectSenderMailer.send_project(params).deliver
	end

end
