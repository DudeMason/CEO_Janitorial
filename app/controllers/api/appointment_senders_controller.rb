class Api::AppointmentSendersController < ApplicationController

  def create
    AppointmentSenderMailer.send_appointment(params).deliver
    NotificationSenderMailer.send_notification(params).deliver
  end

end
