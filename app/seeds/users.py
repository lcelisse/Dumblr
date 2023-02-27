from app.models import db, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want

kevin = User(
    username='koolaidman', email='kevin@aa.io', password='password')
phyllis = User(
    username='pvance', email='phyllis@aa.io', password='password')
jim = User(
    username='jimothy', email='jim@aa.io', password='password')
pam = User(
    username='beesly', email='pam@aa.io', password='password')
andy = User(
    username='narddog', email='andy@aa.io', password='password')
oscar = User(
    username='cspan', email='oscar@aa.io', password='password')
stanley = User(
    username='pretzels', email='stanley@aa.io', password='password')
kelly = User(
    username='fashionchick', email='kelly@aa.io', password='password')
angela = User(
    username='monkey', email='angela@aa.io', password='password')
dwight = User(
    username='schrute', email='dwight@aa.io', password='password')
meredith = User(
    username='iliketoparty', email='meredith@aa.io', password='password')
ryan = User(
    username='fireguy', email='ryan@aa.io', password='password')
roy = User(
    username='warehouseguy', email='roy@aa.io', password='password')
creed = User(
    username='creed', email='creed@aa.io', password='password')
toby = User(
    username='hr', email='toby@aa.io', password='password')
michael = User(
    username='agentscarn', email='michael@aa.io', password='password')


def seed_users():
    db.session.add(kevin)
    db.session.add(phyllis)
    db.session.add(jim)
    db.session.add(pam)
    db.session.add(andy)
    db.session.add(oscar)
    db.session.add(stanley)
    db.session.add(kelly)
    db.session.add(angela)
    db.session.add(dwight)
    db.session.add(meredith)
    db.session.add(ryan)
    db.session.add(creed)
    db.session.add(roy)
    db.session.add(toby)
    db.session.add(michael)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With Usergres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
