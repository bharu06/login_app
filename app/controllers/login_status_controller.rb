class LoginStatusController < ApplicationController

    def statistics
        status_with_count = LoginStatus.all.group('status_code').order('status_code asc').count('id')
        status = LoginStatus.all.group('status_code').order('status_code asc')
        statuses = {status_with_count: status_with_count, status: status}
        render json: statuses
    end

    def analysis
    end
end
