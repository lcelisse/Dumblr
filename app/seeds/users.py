from app.models import bp, Post, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_users():
    kevin = Post(
        username='koolaidman', email='kevin@aa.io', password='password')
    phyllis = Post(
        username='pvance', email='phyllis@aa.io', password='password')
    jim = Post(
        username='jimothy', email='jim@aa.io', password='password')
    pam = Post(
        username='beesly', email='pam@aa.io', password='password')
    andy = Post(
        username='narddog', email='andy@aa.io', password='password')
    oscar = Post(
        username='cspan', email='oscar@aa.io', password='password')
    stanley = Post(
        username='pretzels', email='stanley@aa.io', password='password')
    kelly = Post(
        username='fashionchick', email='kelly@aa.io', password='password')
    angela = Post(
        username='monkey', email='angela@aa.io', password='password')
    dwight = Post(
        username='schrute', email='dwight@aa.io', password='password')
    meredith = Post(
        username='iliketoparty', email='meredith@aa.io', password='password')
    ryan = Post(
        username='fireguy', email='ryan@aa.io', password='password')
    roy = Post(
        username='warehouseguy', email='roy@aa.io', password='password')
    creed = Post(
        username='creed', email='creed@aa.io', password='password')
    toby = Post(
        username='hr', email='toby@aa.io', password='password')
    michael = Post(
        username='agentscarn', email='michael@aa.io', password='password')

    bp.session.add(kevin)
    bp.session.add(phyllis)
    bp.session.add(jim)
    bp.session.add(pam)
    bp.session.add(andy)
    bp.session.add(oscar)
    bp.session.add(stanley)
    bp.session.add(kelly)
    bp.session.add(angela)
    bp.session.add(dwight)
    bp.session.add(meredith)
    bp.session.add(ryan)
    bp.session.add(creed)
    bp.session.add(roy)
    bp.session.add(toby)
    bp.session.add(michael)
    bp.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        bp.session.execute(
            f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        bp.session.execute("DELETE FROM users")

    bp.session.commit()
