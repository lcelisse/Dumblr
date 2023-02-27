from app.models import db, Comment, environment, SCHEMA


def seed_comments():
    comment1 = Comment(comment="creeds kind of crazy", user_id=9, post_id=96)
    comment2 = Comment(comment="dwight lol ", user_id=2, post_id=82)
    comment3 = Comment(comment="kevin", user_id=16, post_id=7)
    comment4 = Comment(comment="get a journal !", user_id=6, post_id=115)
    comment5 = Comment(
        comment="If I don’t have some cake soon, I might die.", user_id=11, post_id=109)
    comment6 = Comment(
        comment="The worst thing about prison was the dementors", user_id=11, post_id=101)
    comment7 = Comment(comment="very nice", user_id=1, post_id=55)
    comment8 = Comment(comment="yummmm", user_id=2, post_id=4)
    comment9 = Comment(
        comment="And I feel God in this Chili’s tonight.", user_id=12, post_id=124)
    comment10 = Comment(
        comment="I normally don’t enjoy making people laugh.", user_id=5, post_id=104)
    comment11 = Comment(
        comment="I wanna do a cartwheel. But real casual-like. Not enough to make a big deal out of it, but I know everyone saw it. One stunning, gorgeous cartwheel.", user_id=3, post_id=46)
    comment12 = Comment(
        comment="I don’t care what they say about me. I just want to eat. Which I realize is a lot to ask for…at a dinner party.", user_id=15, post_id=94)
    comment13 = Comment(
        comment="My roommate wants to meet everybody. Because I’m pretty sure he thinks I’m making Dwight up. He is very real", user_id=15, post_id=20)
    comment14 = Comment(
        comment="I don’t want to be married in a tent like a hobo.", user_id=15, post_id=106)
    comment15 = Comment(
        comment="If I were buying my coffin, I would get one with thicker walls so you couldn’t hear the other dead people.", user_id=1, post_id=72)
    comment16 = Comment(
        comment="Today, smoking is going to save lives.", user_id=12, post_id=100)
    comment17 = Comment(
        comment="Dwight mercy-killed Angela’s cat.", user_id=15, post_id=52)
    comment18 = Comment(
        comment="Oh, you’re paying way too much for worms. Who’s your worm guy?", user_id=9, post_id=38)
    comment19 = Comment(
        comment="How is it possible that in five years, I’ve had two engagements and only one chair?", user_id=13, post_id=107)
    comment20 = Comment(
        comment="I guess I’ve been working so hard, I forgot what it’s like to be hardly working.", user_id=13, post_id=49)
    comment21 = Comment(
        comment="Who says exactly what they’re thinking? What kind of a game is that?", user_id=9, post_id=81)
    comment22 = Comment(
        comment="I’m guessing Angela is the one in the neighborhood that gives the trick-or-treaters toothbrushes, pennies, walnuts.", user_id=5, post_id=55)
    comment23 = Comment(
        comment="I once reported Oscar to the INS. Turns out he’s clean, but I’m glad I did it.", user_id=6, post_id=88)
    comment24 = Comment(
        comment="I never thought I’d say this, but I think I ate too much bone marrow", user_id=4, post_id=24)
    comment25 = Comment(
        comment="I don’t hate it. I just don’t like it at all and it’s terrible.", user_id=12, post_id=52)
    comment26 = Comment(
        comment="I am a black belt in gift wrapping.", user_id=16, post_id=25)
    comment27 = Comment(
        comment="Sometimes I get so bored I just want to scream, and then sometimes I actually do scream. I just sort of feel out what the situation calls for.", user_id=13, post_id=99)
    comment28 = Comment(
        comment="Identity theft is not a joke, Jim! Millions of families suffer every year.", user_id=14, post_id=42)
    comment29 = Comment(comment="I am Beyonce, always.",
                        user_id=15, post_id=81)
    comment30 = Comment(comment="i love sushi !!", user_id=5, post_id=1)
    comment31 = Comment(comment="TEEMO CAT", user_id=2, post_id=11)
    comment32 = Comment(
        comment="I hate the idea that someone out there hates me. I even hate thinking that Al Qaeda hates me. I think if they got to know me, they wouldn’t hate me.", user_id=4, post_id=20)
    comment33 = Comment(comment="be careful kevin !", user_id=11, post_id=3)
    comment34 = Comment(comment="o wow bahahaha", user_id=10, post_id=3)
    comment35 = Comment(
        comment="Tell him to call me ASAP as possible.e", user_id=14, post_id=13)
    comment36 = Comment(comment="i love your chili ", user_id=3, post_id=2)
    comment37 = Comment(comment="very nice", user_id=3, post_id=12)
    comment38 = Comment(
        comment="Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.", user_id=2, post_id=17)
    comment39 = Comment(
        comment="I talk a lot, so I’ve learned to tune myself out.", user_id=1, post_id=7)
    comment40 = Comment(
        comment="I’m not superstitious, but I am a little stitious.", user_id=11, post_id=9)
    comment41 = Comment(
        comment="Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.", user_id=15, post_id=15)

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.add(comment5)
    db.session.add(comment6)
    db.session.add(comment7)
    db.session.add(comment8)
    db.session.add(comment9)
    db.session.add(comment10)
    db.session.add(comment11)
    db.session.add(comment12)
    db.session.add(comment13)
    db.session.add(comment14)
    db.session.add(comment15)
    db.session.add(comment16)
    db.session.add(comment17)
    db.session.add(comment18)
    db.session.add(comment19)
    db.session.add(comment20)
    db.session.add(comment21)
    db.session.add(comment22)
    db.session.add(comment23)
    db.session.add(comment24)
    db.session.add(comment25)
    db.session.add(comment26)
    db.session.add(comment27)
    db.session.add(comment28)
    db.session.add(comment29)
    db.session.add(comment30)
    db.session.add(comment31)
    db.session.add(comment32)
    db.session.add(comment33)
    db.session.add(comment34)
    db.session.add(comment35)
    db.session.add(comment36)
    db.session.add(comment37)
    db.session.add(comment38)
    db.session.add(comment39)
    db.session.add(comment40)
    db.session.add(comment41)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.


def undo_comments():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM comments")

    db.session.commit()
