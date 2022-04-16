require "test_helper"

class Frame3ControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get frame3_show_url
    assert_response :success
  end
end
