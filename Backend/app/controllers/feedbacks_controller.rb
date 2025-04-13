class FeedbacksController < ApplicationController
    before_action :set_feedback, only: [:show]

    def index
        @feedbacks = Feedback.all
        render json: @feedbacks
    end

    def show
        render json: {
    id: @feedback.id,
    message: @feedback.message,
    author: {
      id: @feedback.author.id,
      full_name: "#{@feedback.author.first_name} #{@feedback.author.last_name}"
    },
    recipient: {
      id: @feedback.recipient.id,
      full_name: "#{@feedback.recipient.first_name} #{@feedback.recipient.last_name}"
    },
    created_at: @feedback.created_at
  }
    end

    def create
        @feedback = Feedback.new(feedback_params)
        if @feedback.save
            render json: @feedback, status: :created
        else
            render json: { errors: @feedback.errors.full_messages }, status: :unprocessable_entity    
        end
    end

    def update
        @feedback = Feedback.find(params[:id])
        if @feedback.update(feedback_params)
            render json: @feedback
        else
            render json: { errors: @feedback.errors.full_messages }, status: :unprocessable_entity    
        end
    end
    def destroy
        @feedback = Feedback.find(params[:id])
        @feedback.destroy
        head :no_content
    end
    private
    def set_feedback
            @feedback = Feedback.find_by(id: params[:id])
        unless @feedback
            render json: { error: "Feedback not found" }, status: :not_found
        end
    end
    
      def feedback_params
        params.require(:feedback).permit(:message, :author_id, :recipient_id)
      end
    
end
