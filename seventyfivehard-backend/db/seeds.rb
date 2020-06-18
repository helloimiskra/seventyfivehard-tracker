# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user = User.create(name: 'Iskra', username: 'mishka_umma', goals: "to get stronger and challenge myself")

attempt = Attempt.create(completed: false, user_id: 1, startdate: Date.today)

day = Day.create(attempt_id: 1, diet: false, workout_one: false, workout_two: false, no_alcohol: false, no_cheatmeal: false, progress_pic: false, progress_pic_src: '', drank_water: false, book_read: false, book_info: "Atomic Habits", day_complete: false)