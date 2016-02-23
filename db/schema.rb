# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160223193440) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "pg_search_documents", force: :cascade do |t|
    t.text     "content"
    t.integer  "searchable_id"
    t.string   "searchable_type"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "pg_search_documents", ["searchable_type", "searchable_id"], name: "index_pg_search_documents_on_searchable_type_and_searchable_id", using: :btree

  create_table "photos", force: :cascade do |t|
    t.integer  "photoable_id"
    t.string   "photoable_type"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.integer  "user_id"
  end

  add_index "photos", ["photoable_type", "photoable_id"], name: "index_photos_on_photoable_type_and_photoable_id", using: :btree

  create_table "restaurants", force: :cascade do |t|
    t.string   "name",                       null: false
    t.string   "address",                    null: false
    t.string   "phone_number"
    t.string   "website"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.string   "city",                       null: false
    t.integer  "zipcode",                    null: false
    t.string   "default_photo_file_name"
    t.string   "default_photo_content_type"
    t.integer  "default_photo_file_size"
    t.datetime "default_photo_updated_at"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer  "author_id",     null: false
    t.integer  "restaurant_id", null: false
    t.integer  "star_rating",   null: false
    t.integer  "price_rating"
    t.text     "body"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "reviews", ["author_id"], name: "index_reviews_on_author_id", using: :btree
  add_index "reviews", ["restaurant_id"], name: "index_reviews_on_restaurant_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                                         null: false
    t.string   "username",                                      null: false
    t.string   "password_digest",                               null: false
    t.string   "session_token",                                 null: false
    t.string   "address"
    t.string   "gender",              limit: 1
    t.datetime "created_at",                                    null: false
    t.datetime "updated_at",                                    null: false
    t.date     "birthdate"
    t.string   "city"
    t.integer  "zipcode"
    t.boolean  "onboarded",                     default: false
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
  end

end
