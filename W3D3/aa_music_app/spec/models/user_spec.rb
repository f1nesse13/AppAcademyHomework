require "rails_helper"

RSpec.describe User, type: :model do
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_length_of(:password).is_at_least(6) }

  subject(:user) { User.create(email: "google@google.com", password: "googlepassword") }
  describe "#is_password?" do
    it "validates a users password" do
      expect(user.is_password?("notthepassword")).to be false
      expect(user.is_password?("googlepassword")).to be true
    end
  end

  describe "#reset_session_token!" do
    it "resets a users session_token" do
      current_session_token = user.session_token
      expect(current_session_token).not_to be_nil
      expect(user.reset_session_token!).not_to eq(current_session_token)
    end
  end

  describe "::find_by_credentials" do
    context "correct email and password combo" do
      it "returns the user" do
        cred_test = User.create(email: "google@google.com", password: "googlepassword")
        expect(User.find_by_credentials("google@google.com", "googlepassword")).not_to be_nil
        expect(User.find_by_credentials("google@google.com", "googlepassword")).to be_a(Object)
      end
    end

    context "incorrect email and password" do
      it "returns nil" do
        cred_test = User.create(email: "google@google.com", password: "googlepassword")
        expect(User.find_by_credentials("google@google.com", "notthepassword")).to be_nil
        expect(User.find_by_credentials("jpell@google.com", "googlepassword")).to be_nil
      end
    end
  end
end
