require "test_helper"

class CategoryControllerTest < ActionDispatch::IntegrationTest
  test "should get show3" do
    get category_show3_url
    assert_response :success
  end

  test "should get show4" do
    get category_show4_url
    assert_response :success
  end
end
