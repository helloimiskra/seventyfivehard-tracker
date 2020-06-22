class Api::V1::UsersController < ApplicationController

    def index
        @users = User.all 
        render json: UserSerializer.new(@users)
    end


    def create
 
        @user = User.new(user_params)
        if @user.save
            render json: UserSerializer.new(@user)
        else
            render json: {error: "Error creating user"}
        end

    end

    def show
        @user = User.find(params[:id])
        render json: UserSerializer.new(@user)

    end

    def destroy
        @user = User.find(params[:id])
        @user.destroy
    end

    def edit
        @user = User.find(params[:id])
    end

    def update
        @user = User.find(params[:id])
        @user.update(name: params[:user][:name], username: params[:user][:username], goals: params[:user][:goals])
        render json: UserSerializer(@user)
    end


    private 


    def user_params
        params.require(:user).permit(:username, :name, :goals)
    end

end
