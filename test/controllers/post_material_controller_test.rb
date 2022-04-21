require "test_helper"

class PostMaterialControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get post_material_index_url
    assert_response :success
  end
end
