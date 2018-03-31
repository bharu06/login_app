class LoginStatusController < ApplicationController

    def statistics
        status_with_count = LoginStatus.all.group('status_code').order('status_code asc').count('id')
        status = LoginStatus.all.group('status_code').order('status_code asc').count('id')
        statuses = {status_with_count: status_with_count, status: status}
        puts statuses
        render json: statuses
    end

    def login_status_code
      login_status = LoginStatus.new
      login_status.status_code = params[:status_code]
      login_status.time = params[:time]
      login_status.save
      render json: login_status
    end

    def analysis
    end
end
