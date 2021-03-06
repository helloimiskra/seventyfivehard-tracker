class Api::V1::DaysController < ApplicationController

     before_action :set_user

    def index
        @days = @user.days 
        render json: DaySerializer.new(@days)
    end

    def create
        @day = @user.days.new(day_params)
        if @day.save
            render json: DaySerializer.new(@day)
        else
            render json: {error: "Error creating day"}
        end

    end

    def show
        @day = Day.find(params[:id])
        @day.created_at = @day.created_at.strftime("%Y-%m-%d")
        render json: DaySerializer.new(@day)
    end

    def edit
        @day = Day.find(params[:id])
    end

    def update
        @day = Day.find(params[:id])
        @day.update(diet: params[:day][:diet], workout_one: params[:day][:workout_one], workout_two: params[:day][:workout_two], no_alcohol: params[:day][:no_alcohol], no_cheatmeal: params[:day][:no_cheatmeal], progress_pic: params[:day][:progress_pic], progress_pic_src: params[:day][:progress_pic_src], drank_water: params[:day][:drank_water], book_read: params[:day][:book_read], book_info: params[:day][:book_info])
        render json: DaySerializer.new(@day)
    end

    def destroy
        @day = Day.find(params[:id])
        @day.destroy
    end

    private 

    def set_user
        @user = User.find(params[:user_id])
    end

    def day_params
        params.require(:day).permit(:diet, :workout_one, :workout_two, :no_alcohol, :no_cheatmeal, :progress_pic, :progress_pic_src, :drank_water, :book_read, :book_info, :day_complete, :user_id)
    end

end




