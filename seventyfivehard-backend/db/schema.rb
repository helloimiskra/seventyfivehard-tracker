# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_06_18_111141) do

  create_table "attempts", force: :cascade do |t|
    t.boolean "completed"
    t.datetime "startdate"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "days", force: :cascade do |t|
    t.boolean "diet"
    t.boolean "workout_one"
    t.boolean "workout_two"
    t.boolean "no_alcohol"
    t.boolean "no_cheatmeal"
    t.boolean "progress_pic"
    t.string "progress_pic_src"
    t.boolean "drank_water"
    t.boolean "book_read"
    t.string "book_info"
    t.boolean "day_complete"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "goals"
    t.boolean "challenge_completed"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
