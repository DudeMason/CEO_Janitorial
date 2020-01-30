class Api::AppointmentsController < ApplicationController

  def index
    render json: Appointment.all
  end

  def create
    @appointment = Appointment.new(appointment_params)
    if @appointment.save
      render json: @appointment
    else
      render json: {errors: @appointment.errors}, status: :unprocessable_entity
    end
  end

  def update
    @appointment = Appointment.find(params[:id])
    if @appointment.update(appointment_params)
      render json: @appointment
    else
      render json: {errors: @appointment.errors}, status: :unprocessable_entity
    end
  end

  def destroy
    @appointment = Appointment.find(params[:id])
    @appointment.destroy
    render json: {message: 'Appointment deleted!'}
  end

  private

  def appointment_params
    params.require(:appointment).permit(
      :first_name, :last_name, :email, :phone, :company, :date, :time, :message
    )
  end
end
