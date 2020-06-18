class Api::V1::AttemptsController < ApplicationController

    before_action :set_user

    def index
        @attempts = @user.attempts
        render json: @attempts
    end


    def create
        @attempt = attempt.new(attempt_params)
        if @attempt.save
            render json: @attempt
        else
            render json: {error: "Error creating attempt"}
        end

    end

    def show
        @attempt = attempt.find(params[:id])
        render json: @attempt

    end

    def destroy
        @attempt = attempt.find(params[:id])
        @attempt.destroy
    end

    private 

    def set_user
        @user = User.find(params[:user_id])
    end

    def attempt_params
        params.require(:attempt).permit(:user_id, :startdate, :completed)
    end

end
