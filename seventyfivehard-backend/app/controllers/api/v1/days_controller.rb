class Api::V1::DaysController < ApplicationController

     before_action :set_attempt


    def index
        @days = @attempt.days 
        render json: @days
    end


    def create
        @day = Day.new(day_params)
        if @day.save
            render json: @day
        else
            render json: {error: "Error creating day"}
        end

    end

    def show
        @day = Day.find(params[:id])
        render json: @day
    end

    def destroy
        @day = Day.find(params[:id])
        @day.destroy
    end

    private 

    def set_attempt
        @attempt = Attempt.find(params[:attempt_id])
    end

    def day_params
        params.require(:day).permit(:diet, :workout_one, :workout_two, :no_alcohol, :no_cheatmeal, :progress_pic, :progress_pic_src, :drank_water, :book_read, :book_info, :day_complete, :attempt_id)
    end

end


end
