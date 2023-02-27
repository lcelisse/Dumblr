from app.models import db, Post, environment, SCHEMA
from .users import kevin, pam, jim, michael, kelly, ryan, dwight, roy, oscar, angela, meredith, phyllis, andy, stanley, creed, toby

# Adds a demo user, you can add other users here if you want


def seed_posts():
    kevin_post_text_1 = Post(
        user_id=1, post_type='text', title="Stuff about me", body="My favorite foods are cookies, Cup o' Noodles, and M&M's. I won a World Series of Poker bracelet for the $2500 No-Limit Deuce-Seven Draw in 2002. I  also enjoys cooking", post_likes=[michael, kelly, ryan, dwight])
    kevin_post_img_1 = Post(
        user_id=1, post_type='img', title="throwback... lets laugh together", url="https://hips.hearstapps.com/hmg-prod/images/sub-buzz-1231-1556130239-1-1605110613.png", post_likes=[michael, kelly, ryan, dwight])
    kevin_post_img_2 = Post(
        user_id=1, post_type='img', title="chili", url="https://www.washingtonpost.com/pbox.php?url=https://www.washingtonpost.com/resizer/O5_Esvkb27G_by7QmxPzrxjESyg=/arc-anglerfish-washpost-prod-washpost/public/OP5EEARY7AI63OFPBICOLXB5WY.jpg&w=1484&op=resize&opt=1&filter=a", post_likes=[kevin, pam, jim, michael, kelly, ryan, dwight, roy, oscar, angela, meredith, phyllis, andy, stanley, creed, toby])
    kevin_post_quote_2 = Post(
        user_id=1, post_type='text', body="ME THINK, WHY WASTE TIME SAY LOT WORD, WHEN FEW WORD DO TRICK. WHEN ME PRESIDENT THEY SEE. THEY SEE.", post_likes=[kevin, pam, jim, michael, kelly, ryan, dwight, roy])
    kevin_post_img_3 = Post(
        user_id=1, post_type='img', title="awkard", url="https://64.media.tumblr.com/1ae33f24e0ed1c29894aeb8e9deca7aa/tumblr_pq599h8h2d1y8f60oo1_500.png", post_likes=[michael, kelly, ryan, dwight])
    kevin_post_text_2 = Post(
        user_id=1, post_type='text', title="In need Of New Chili Recipe", body=" Once a year I bring in a large pot of my 'famous' chili for the office. This year I think I'd Like to change it up so if anyone knows any good recipes email me", post_likes=[michael, kelly, ryan, dwight])
    kevin_post_quote_1 = Post(
        user_id=1, post_type='text', body="NO, IT'S NOT ASHTON KUTCHER. IT'S KEVIN MALONE.", post_likes=[phyllis, andy, stanley, creed, toby])
    kevin_post_img_4 = Post(
        user_id=1, post_type='img', title="candy!!", url="https://www.lifeandstylemag.com/wp-content/uploads/2018/01/kevin-malone-the-office.jpg?quality=86&strip=all", post_likes=[oscar, angela, meredith, phyllis, andy, stanley, creed, toby])
    kevin_post_img_5 = Post(
        user_id=1, post_type='img', title="hey its me!", url="https://m.media-amazon.com/images/I/51D5L0MU8TL.jpg", post_likes=[kevin, pam, jim, michael, kelly])

    phyllis_post_text_1 = Post(
        user_id=2, post_type='text', title="Confession", body="I serve on the Party Planning Committee where I often butts heads with hypercritical Angela Martin, whom I've told to her face that I do not likeher .... Is that too mean ?", post_likes=[kevin, pam, jim, michael, kelly, ryan, dwight, roy, oscar, angela, meredith, phyllis, andy, stanley, creed, toby])
    phyllis_post_img_1 = Post(
        user_id=2, post_type='img', title="Happy Halloween", url="https://imgb.srgcdn.com/4c35ef56-f8a6-431d-9ceb-b7865d7da83e.gif", post_likes=[kevin, pam, jim, michael, kelly, ryan, dwight, roy])
    phyllis_post_img_2 = Post(
        user_id=2, post_type='img', title="bobby and me", url="https://www.cheatsheet.com/wp-content/uploads/2020/07/Phyllis-and-Bob-4.jpg?w=1024&h=682", post_likes=[kevin, pam, jim, michael, kelly])
    phyllis_post_quote_2 = Post(
        user_id=2, post_type='text', body="I DON'T THINK IT'S BLACKMAIL. ANGELA JUST DOES WHAT I ASK HER TO DO SO I WON'T TELL EVERYONE THAT SHE'S CHEATING ON ANDY WITH DWIGHT.", post_likes=[kevin, pam, jim, michael, kelly])
    phyllis_post_img_3 = Post(
        user_id=2, post_type='img', title="hohoho", url="https://media.gamestop.com/i/gamestop/11157091/Funko-POP-TV-The-Office-Santa-Phyllis-4.25-in-Vinyl-Figure", post_likes=[kevin, pam, jim, michael, kelly])
    phyllis_post_text_2 = Post(
        user_id=2, post_type='text', title="Party Planning", body=" Email me your decoration request for toby's going away party ", post_likes=[michael, kelly, ryan, dwight])
    phyllis_post_quote_1 = Post(
        user_id=2, post_type='text', body="I JUST THINK WE ALL DESERVE TO BE WITH SOMEONE WHO WANTS TO BE WITH US.", post_likes=[phyllis, andy, stanley, creed, toby])
    phyllis_post_img_4 = Post(
        user_id=2, post_type='img', title="workk", url="https://i.ebayimg.com/images/g/lSsAAOSwkqJf8xJ0/s-l1600.jpg", post_likes=[ryan, dwight, roy, oscar, angela, meredith, phyllis, andy, stanley])
    phyllis_post_img_5 = Post(
        user_id=2, post_type='img', url="https://i.pinimg.com/originals/b5/8c/fa/b58cfa0f7433143f677ac00b00e8da84.gif", post_likes=[kevin, pam, jim, michael, kelly])

    jim_post_text_1 = Post(
        user_id=3, post_type='text', title="cookout", body="My roommate wants to meet everybody. Because I'm pretty sure he thinks I'm making Dwight up. He is very real.", post_likes=[kevin, pam, jim, michael, kelly])
    jim_post_img_1 = Post(
        user_id=3, post_type='img', title="throwback... lets laugh together", url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWx449Ru_F21YiVMDU1n-faA8Uy1XAHJqltA&usqp=CAU", post_likes=[michael, kelly, ryan, dwight])
    jim_post_img_2 = Post(
        user_id=3, post_type='img', title="no way !", url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNLBek_wUQLL66nugDHG0aLQN7nKs-Wdj_Iw&usqp=CAU", post_likes=[kevin, pam, jim, michael, kelly, ryan, dwight, roy])
    jim_post_quote_2 = Post(
        user_id=3, post_type='text', body=" I am about to do something very bold in this job that I've never done before: try.", post_likes=[phyllis, andy, stanley, creed, toby])
    jim_post_img_3 = Post(
        user_id=3, post_type='img', title="BEARS BEETS ....", url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwrseVd2GA2ZLCdIEEatb7IZmhnk_XV5gmkQ&usqp=CAU", post_likes=[kevin, pam, jim, michael, kelly])
    jim_post_text_2 = Post(
        user_id=3, post_type='text', title="ha", body="  Fact: Bears eat beets. Bears. Beets. Battlestar Galactica.", post_likes=[kevin, pam, jim, michael, kelly])
    jim_post_quote_1 = Post(
        user_id=3, post_type='text', body="Stanley just drank OJ out of my mug and didn't seem to realize that it wasn't his hot coffee. So the question has to be asked, is there no limit to what he won’t notice?", post_likes=[ryan, dwight, roy, oscar, angela, meredith, phyllis, andy, stanley])
    jim_post_img_4 = Post(
        user_id=3, post_type='img', title="hahah", url="https://decider.com/wp-content/uploads/2018/10/the-office-jim-three-hole-punch.jpg?quality=75&strip=all", post_likes=[michael, kelly, ryan, dwight])
    jim_post_img_5 = Post(
        user_id=3, post_type='img', title="hey its me!", url="https://i.pinimg.com/736x/e1/36/11/e136114cd3bdc194a49e6314b6faf636--jim-halpert-beets.jpg", post_likes=[phyllis, andy, stanley, creed, toby])

    pam_post_text_1 = Post(
        user_id=4, post_type='text',  title="thoughts on the camera crew", body="I think an ordinary paper company like Dunder-Mifflin was a great subject for a documentary. There's a lot of beauty in ordinary things. Isn't that kind of the point?", post_likes=[kevin, pam, jim, michael, kelly, ryan, dwight, roy, oscar, angela, meredith, phyllis, andy, stanley, creed, toby])
    pam_post_img_1 = Post(
        user_id=4, post_type='img', title="i aint do it !!", url="https://medias.spotern.com/spots/w640/216/216608-1563526925.jpg", post_likes=[kevin, pam, jim, michael, kelly, ryan, dwight, roy])
    pam_post_img_2 = Post(
        user_id=4, post_type='img', title="art", url="https://cdnb.artstation.com/p/assets/images/images/030/681/017/large/lucca-finardi-pam-beesly-copia.jpg?1601332694", post_likes=[kevin, pam, jim, michael, kelly])
    pam_post_quote_2 = Post(
        user_id=4, post_type='text', body="You can't be scared of a room full of Jims. I love the guy but he's basically Gumby with hair.", post_likes=[phyllis, andy, stanley, creed, toby])
    pam_post_img_3 = Post(
        user_id=4, post_type='img', title="always wondered if id get one", url="https://media.gamestop.com/i/gamestop/11156374/Funko-POP-Television-The-Office-Pam-Beesly-3.75-in-Vinyl-Figure", post_likes=[kevin, pam, jim, michael, kelly])
    pam_post_text_2 = Post(
        user_id=4, post_type='text', title="lice in the office ?", body=" I'm sure she's just confused. People scratch their heads when they're confused. Not always like an ape, the way Meredith just did, but it happens.", post_likes=[ryan, dwight, roy, oscar, angela, meredith, phyllis, andy, stanley])
    pam_post_quote_1 = Post(
        user_id=4, post_type='text', body="Michael's been trying to get me and Jim to hang out with him ever since he started dating my mom. I don't know. I really hoped this thing would just die out, but today he's planning a birthday lunch for my mom and we have to go. No way out. No ... way ... out.", post_likes=[kevin, pam, jim, michael, kelly, ryan, dwight, roy, oscar, angela, meredith, phyllis, andy, stanley, creed, toby])
    pam_post_img_4 = Post(
        user_id=4, post_type='img', title="better cat .... jk phyllis", url="https://medias.spotern.com/spots/w640/215/215894-1563355706.jpg", post_likes=[michael, kelly, ryan, dwight])
    pam_post_img_5 = Post(
        user_id=4, post_type='img', title="was i talking to dwight ? haha", url="https://images.thebrag.com/tb/uploads/2020/02/PAMHEAD-600x341.jpg", post_likes=[kevin, pam, jim, michael, kelly, ryan, dwight, roy])

    andy_post_text_1 = Post(
        user_id=5, post_type='text', title="new boss ", body="I'll be the number-two guy here in Scranton in six weeks. How? Name repetition, personality mirroring, and never breaking off a handshake. I'm always thinking one step ahead. Like a... carpenter... that makes stairs.", post_likes=[oscar, angela, meredith, phyllis, andy, stanley, creed, toby])
    andy_post_img_1 = Post(
        user_id=5, post_type='img', title="the nard dog loves the outfit choice funko ! ha", url="https://images.stockx.com/images/Funko-Pop-Television-The-Office-Andy-Bernard-In-Sumo-Suit-Target-Exclusive-Figure-1061.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1619818919", post_likes=[oscar, angela, meredith, phyllis, andy, stanley, creed, toby])
    andy_post_img_2 = Post(
        user_id=5, post_type='img', title="new cut after being away for so long", url="https://www.lifeandstylemag.com/wp-content/uploads/2019/01/Screen-Shot-2019-01-18-at-4.02.36-PM.png?quality=86&strip=all", post_likes=[ryan, dwight, roy, oscar, angela, meredith, phyllis, andy, stanley])
    andy_post_quote_2 = Post(
        user_id=5, post_type='text', body="Break me off a piece of that.. fancy feast.", post_likes=[michael, kelly, ryan, dwight])
    andy_post_img_3 = Post(
        user_id=5, post_type='img', title="banjo moment", url="https://akns-images.eonline.com/eol_images/Entire_Site/2020023/rs_1024x759-200123123413-office13.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top", post_likes=[phyllis, andy, stanley, creed, toby])
    andy_post_text_2 = Post(
        user_id=5, post_type='text', title="A little about me", body="I've always been the guy who can rally other people to rebel. In high school, I organized a walk out over standardized testing. Got over 500 students to just skip the SATs. At the last second I chickened out, took it anyway got a twelve twenty. Always regretted it... I feel lachrymose.", post_likes=[oscar, angela, meredith, phyllis, andy, stanley, creed, toby])
    andy_post_quote_1 = Post(
        user_id=5, post_type='text', body="Beer me that disc.", post_likes=[michael, kelly, ryan, dwight, ])
    andy_post_img_4 = Post(
        user_id=5, post_type='img', title="come watch my play !", url="https://m.media-amazon.com/images/M/MV5BMzgzNTQxMzM4NV5BMl5BanBnXkFtZTcwNjIyNDc5Mw@@._V1_UY1200_CR85,0,630,1200_AL_.jpg", post_likes=[ryan, dwight, roy, oscar, angela, meredith, phyllis, andy, stanley])
    andy_post_img_5 = Post(
        user_id=5, post_type='img', title="THE CHAMP", url="https://y.yarn.co/9e477b30-fcc5-453b-bd29-2e8be5b4f474_screenshot.jpg", post_likes=[kevin, pam, jim, michael, kelly, ryan, dwight, roy])

    oscar_post_text_1 = Post(
        user_id=6, post_type='text', title="angela forgot to turn off her nanny cam ", body="I want to get that image out of my head. The psychological issues that go behind licking a cat, are not things I want to go into. Also, I'm pretty sure she coughed up a hairball.", post_likes=[kevin, pam, jim, michael, kelly, ryan, dwight, roy, oscar, angela, meredith, phyllis, andy, stanley, creed, toby])
    oscar_post_img_1 = Post(
        user_id=6, post_type='img', title="the gang", url="https://imgix.bustle.com/uploads/image/2018/9/14/41233430-6d74-4359-82bd-5067c25097cf-the-office-kevin-oscar-angela.png?w=1200&h=630&fit=crop&crop=faces&fm=jpg", post_likes=[oscar, angela, meredith, phyllis, andy, stanley, creed, toby])
    oscar_post_img_2 = Post(
        user_id=6, post_type='img', title="ACTUALLY", url="https://theofficeanalytics.files.wordpress.com/2017/10/38zby.png?w=478&h=268", post_likes=[phyllis, andy, stanley, creed, toby])
    oscar_post_quote_2 = Post(
        user_id=6, post_type='text', body="You have your cats on Nanny-Cam?", post_likes=[michael, kelly, ryan, dwight])
    oscar_post_img_3 = Post(
        user_id=6, post_type='img', title="best friends", url="https://cdn.mos.cms.futurecdn.net/8pfmXbxHQggxuC76RkExZX-1200-80.png", post_likes=[kevin, pam, jim, michael, kelly, ryan, dwight, roy])
    oscar_post_text_2 = Post(
        user_id=6, post_type='text', title="thoughts on ryans arrest ", body=" Well, this is what happened. Uh, Ryan's big project was the website. Which wasn't doing so well. So Ryan, to give the impression of sales, recorded them twice. Once as offices and once in the website sales, which is what we refer to in the business as misleading the shareholders. Another good term is fraud. The real crime, I think, was the beard.", post_likes=[kevin, pam, jim, michael, kelly])
    oscar_post_quote_1 = Post(
        user_id=6, post_type='text', body="Planking is a very stupid and dangerous trend. Basically, you lie like a plank in weird places. That's it. Sometimes you get run over. Welcome to the Internet.", post_likes=[oscar, angela, meredith, phyllis, andy, stanley, creed, toby])
    oscar_post_img_4 = Post(
        user_id=6, post_type='img', title="are they dating ?!", url="https://preview.redd.it/dzyg96q44kl21.jpg?auto=webp&s=46ad46dba42a7fdc5620a503488c635378699835", post_likes=[ryan, dwight, roy, oscar, angela, meredith, phyllis, andy, stanley])
    oscar_post_img_5 = Post(
        user_id=6, post_type='img', title="finally", url="https://m.media-amazon.com/images/I/51bYkGd3cfL.jpg", post_likes=[kevin, pam, jim, michael, kelly])

    stanley_post_text_1 = Post(
        user_id=7, post_type='text', title="PSA", body="I Do Not Apologize Unless I Think I'm Wrong, And If You Don't Like It, You Can Leave", post_likes=[michael, kelly, ryan, dwight])
    stanley_post_img_1 = Post(
        user_id=7, post_type='img', title="i miss florida stanley", url="https://bamfstyle.com/wp-content/uploads/2020/03/flstanley-main1.jpg", post_likes=[oscar, angela, meredith, phyllis, andy, stanley, creed, toby])
    stanley_post_img_2 = Post(
        user_id=7, post_type='img', title="pretzel day .. the greatest day ", url="https://media.tenor.com/f5zNERrlrXcAAAAC/pretzel-day-the-office.gif", post_likes=[phyllis, andy, stanley, creed, toby])
    stanley_post_quote_2 = Post(
        user_id=7, post_type='text', body="Florida Stanley Smiles, Florida Stanley Is Happy To Go To Work, Florida Stanley Is Who You Want On Your Florida Team", post_likes=[oscar, angela, meredith, phyllis, andy, stanley, creed, toby])
    stanley_post_img_3 = Post(
        user_id=7, post_type='img', title="mood", url="https://images4.fanpop.com/image/photos/22700000/Stanley-the-office-22766283-488-384.jpg", post_likes=[kevin, pam, jim, michael, kelly, ryan, dwight, roy])
    stanley_post_text_2 = Post(
        user_id=7, post_type='text', title="why not me ", body=" I Have Been Trying To Get On Jury Duty Every Year Since I Was 18 Years Old. To Get To Go Sit In An Air-Conditioned Room, Downtown, Judging People, While My Lunch Is Paid for… That Is The Life", post_likes=[kevin, pam, jim, michael, kelly, ryan, dwight, roy, oscar, angela, meredith, phyllis, andy, stanley, creed, toby])
    stanley_post_quote_1 = Post(
        user_id=7, post_type='text', body="This Is Pretzel Day", post_likes=[michael, kelly, ryan, dwight, ])
    stanley_post_img_4 = Post(
        user_id=7, post_type='img', title="any time of the day ", url="https://i.pinimg.com/564x/cd/9b/31/cd9b31e21e7902e9ef6b2f45ba9b0d35--the-office-humor-office-quotes.jpg", post_likes=[ryan, dwight, roy, oscar, angela, meredith, phyllis, andy, stanley])
    stanley_post_img_5 = Post(
        user_id=7, post_type='img', title="the moments i live for ", url="https://preview.redd.it/5c596lgkifk21.jpg?auto=webp&s=bd3ae1e5e19f27a9023a6c7b7c51aeb3da8bdb43", post_likes=[phyllis, andy, stanley, creed, toby])

    kelly_post_text_1 = Post(
        user_id=8, post_type='text', title="NEW YEAR", body="My resolution was to get more attention", post_likes=[kevin, pam, jim, michael, kelly])
    kelly_post_img_1 = Post(
        user_id=8, post_type='img', title="you know me ", url="https://thetempest.co/wp-content/uploads/2020/05/seventeen.jpg", post_likes=[kevin, pam, jim, michael, kelly, ryan, dwight, roy])
    kelly_post_img_2 = Post(
        user_id=8, post_type='img', title="ugh", url="https://i.pinimg.com/736x/8f/7c/10/8f7c10f776208f91e65683f5bab4542e--kelly-kapoor-office-memes.jpg", post_likes=[ryan, dwight, roy, oscar, angela, meredith, phyllis, andy, stanley])
    kelly_post_quote_2 = Post(
        user_id=8, post_type='text', body="I can't control what I say to people. I spend the whole day talking.", post_likes=[phyllis, andy, stanley, creed, toby])
    kelly_post_img_3 = Post(
        user_id=8, post_type='img', title="thank you education ", url="https://ih1.redbubble.net/image.526293739.2743/flat,800x800,075,f.jpg", post_likes=[oscar, angela, meredith, phyllis, andy, stanley, creed, toby])
    kelly_post_text_2 = Post(
        user_id=8, post_type='text', title="some advice", body="You wanna call someone that texted you? Do you want to drive them away?", post_likes=[phyllis, andy, stanley, creed, toby])
    kelly_post_quote_1 = Post(
        user_id=8, post_type='text', body="This day is bananas, B-A-N-A-N-A-S", post_likes=[kevin, pam, jim, michael, kelly])
    kelly_post_img_4 = Post(
        user_id=8, post_type='img', title="ryan ! ", url="https://hellogiggles.com/wp-content/uploads/sites/7/2019/01/23/mindy-office-e1548288872878.jpg?quality=82&strip=all", post_likes=[michael, kelly, ryan, dwight])
    kelly_post_img_5 = Post(
        user_id=8, post_type='img', title="no caption needed", url="https://img.buzzfeed.com/buzzfeed-static/static/2017-01/9/18/asset/buzzfeed-prod-fastlane-02/sub-buzz-20324-1484006016-4.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto", post_likes=[kevin, pam, jim, michael, kelly, ryan, dwight, roy, oscar, angela, meredith, phyllis, andy, stanley, creed, toby])

    angela_post_text_1 = Post(
        user_id=9, post_type='text', title="am i stubborn ?", body="My sister and I used to be best friends, and we haven't talked in over 16 years. Over some disagreement I don't even remember", post_likes=[ryan, dwight, roy, oscar, angela, meredith, phyllis, andy, stanley])
    angela_post_img_1 = Post(
        user_id=9, post_type='img', title="nutcracker christmas", url="https://assets-jpcust.jwpsrv.com/thumbnails/0zy3ubn9-1920.jpg", post_likes=[kevin, pam, jim, michael, kelly, ryan, dwight, roy])
    angela_post_img_2 = Post(
        user_id=9, post_type='img', title="D and me", url="https://www.brides.com/thmb/ibFvhY1b1KYT6_JhdrJXSjnfTcE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__brides__proteus__582b7a608465f01632f3b47b__11-e2369a0ec5c149d68d27f17dcfce8edc.jpeg", post_likes=[kevin, pam, jim, michael, kelly, ryan, dwight, roy, oscar, angela, meredith, phyllis, andy, stanley, creed, toby])
    angela_post_quote_2 = Post(
        user_id=9, post_type='text', body="IF YOU EVER PUT SUNBLOCK ON A WINDOW YOU MIGHT BE MICHAEL SCOTT", post_likes=[kevin, pam, jim, michael, kelly])
    angela_post_img_3 = Post(
        user_id=9, post_type='img', title="thank you andy", url="https://www1.pictures.zimbio.com/mp/7cfvl6Harv8l.jpg", post_likes=[phyllis, andy, stanley, creed, toby])
    angela_post_text_2 = Post(
        user_id=9, post_type='text', title="message for pam", body="Jesus is not your caterer.", post_likes=[kevin, pam, jim, michael, kelly])
    angela_post_quote_1 = Post(
        user_id=9, post_type='text', body="IF YOU PRAY ENOUGH YOU CAN CHANGE YOURSELF INTO A CAT PERSON.", post_likes=[kevin, pam, jim, michael, kelly])
    angela_post_img_4 = Post(
        user_id=9, post_type='img', title="cwhen i used to be in charge", url="https://i.insider.com/5d7a5c7d2e22af0efe493623?width=1200&format=jpeg", post_likes=[michael, kelly, ryan, dwight])
    angela_post_img_5 = Post(
        user_id=9, post_type='img', title="noh how i miss sprinkles", url="https://www.cheatsheet.com/wp-content/uploads/2022/05/the-office-angela-martin-sprinkles-1.jpeg?w=1200&h=675o", post_likes=[kevin, pam, jim, michael, kelly, ryan, dwight, roy, oscar, angela, meredith, phyllis, andy, stanley, creed, toby])

    dwight_post_text_1 = Post(
        user_id=10, post_type='text', title="Serious question", body="Who is Justice Beaver?", post_likes=[kevin, pam, jim, michael, kelly])
    dwight_post_img_1 = Post(
        user_id=10, post_type='img', url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmNfA1D0gHxRwIW30NUEEvG0JKy-OuQqNJ2w&usqp=CAU", post_likes=[kevin, pam, jim, michael, kelly, ryan, dwight, roy])
    dwight_post_img_2 = Post(
        user_id=10, post_type='img', title="I have the best girlfriend", url="https://imgix.ranker.com/list_img_v2/1275/2821275/original/dwight-schrute-best-moments-the-office?w=817&h=427&fm=jpg&q=50&fit=crop", post_likes=[oscar, angela, meredith, phyllis, andy, stanley, creed, toby])
    dwight_post_quote_2 = Post(
        user_id=10, post_type='text', body="You know, I really would've appreciated a heads up that you were into dating mothers. I would've introduced you to mine.", post_likes=[ryan, dwight, roy, oscar, angela, meredith, phyllis, andy, stanley])
    dwight_post_img_3 = Post(
        user_id=10, post_type='img', title="The Three amigos", url="https://cdn3.whatculture.com/images/2021/12/2fc02d60f9b20094-1200x675.jpg", post_likes=[oscar, angela, meredith, phyllis, andy, stanley, creed, toby])
    dwight_post_text_2 = Post(
        user_id=10, post_type='text', title="To be more social or not", body="I really should have a Tweeter account.", post_likes=[phyllis, andy, stanley, creed, toby])
    dwight_post_quote_1 = Post(
        user_id=10, post_type='text', body="All you need is love? False. The four basic human necessities are air, water, food, and shelter.", post_likes=[michael, kelly, ryan, dwight])
    dwight_post_img_4 = Post(
        user_id=10, post_type='img', title="i must protect the office", url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfoLJKH2iQz1CvdYJjO1j9ZjTUaJnDKBVJw&usqp=CAU", post_likes=[kevin, pam, jim, michael, kelly, ryan, dwight, roy, oscar, angela, meredith, phyllis, andy, stanley, creed, toby])
    dwight_post_img_5 = Post(
        user_id=10, post_type='img', title="me and mose ", url="https://www.etsy.com/img/8734722/r/il/f73d35/2240486393/il_570xN.2240486393_adaa.jpg", post_likes=[kevin, pam, jim, michael, kelly, ryan, dwight, roy])

    meredith_post_img_1 = Post(
        user_id=11, post_type='img', title="had to see it through", url="https://media.tenor.com/mN1ib-tjlf8AAAAC/the-office-meredith-palmer.gif", post_likes=[phyllis, andy, stanley, creed, toby])
    meredith_post_img_2 = Post(
        user_id=11, post_type='img', title="face of regret", url="https://www.looper.com/img/gallery/the-deleted-scene-that-solves-this-meredith-mystery-from-the-office-season-5/intro-1616250882.jpg", post_likes=[michael, kelly, ryan, dwight])
    meredith_post_img_3 = Post(
        user_id=11, post_type='img', title="aso i did something not so chill", url="https://media.tenor.com/pkBPAeZN4D8AAAAC/drinking-meredith-palmer.gif", post_likes=[ryan, dwight, roy, oscar, angela, meredith, phyllis, andy, stanley])
    meredith_post_img_4 = Post(
        user_id=11, post_type='img', url="https://m.media-amazon.com/images/M/MV5BMjA1MjExMDIyOV5BMl5BanBnXkFtZTcwMTE2NDkxMg@@._V1_.jpg", post_likes=[phyllis, andy, stanley, creed, toby])
    meredith_post_img_5 = Post(
        user_id=11, post_type='img', title="dwight smh", url="https://helios-i.mashable.com/imagery/articles/01FzA9Va8lBphhMxoHKBfIH/images-1.fill.size_2000x1110.v1611707303.png", post_likes=[michael, kelly, ryan, dwight])

    ryan_post_text_1 = Post(
        user_id=12, post_type='text', title="pam and karen vs angela ?", body="I MISS THE DAYS WHEN THERE WAS ONLY ONE PARTY I DIDN'T WANT TO GO TO.", post_likes=[oscar, angela, meredith, phyllis, andy, stanley, creed, toby])
    ryan_post_img_2 = Post(
        user_id=12, post_type='img', title="what was i thinking", url="http://2.bp.blogspot.com/_PKoW61SMXXo/SeOh1ThjoiI/AAAAAAAABLM/-h_yfPbiglo/s400/blondryan.png", post_likes=[kevin, pam, jim, michael, kelly, ryan, dwight, roy])
    ryan_post_quote_2 = Post(
        user_id=12, post_type='text', body="EARTH. YOU DON'T HAVE TO BE CRAZY TO LIVE HERE, BUT IT HELPS.", post_likes=[kevin, pam, jim, michael, kelly])
    ryan_post_img_3 = Post(
        user_id=12, post_type='img', title="halloween", url="https://medias.spotern.com/spots/w640/216/216889-1563782829.jpg", post_likes=[phyllis, andy, stanley, creed, toby])
    ryan_post_img_4 = Post(
        user_id=12, post_type='img', title="kelly please", url="https://img.nbc.com/sites/nbcunbc/files/images/2018/12/23/181219_3848948_Ryan_s_Last_Stand.jpg", post_likes=[kevin, pam, jim, michael, kelly, ryan, dwight, roy])
    ryan_post_img_5 = Post(
        user_id=12, post_type='img', title="i didnt want to be known as someone here siigghh", url="https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_454,w_405/https%3A%2F%2Fnetflixlife.com%2Ffiles%2F2018%2F07%2FIMG_2628.jpg", post_likes=[ryan, dwight, roy, oscar, angela, meredith, phyllis, andy, stanley,])

    roy_post_img_4 = Post(
        user_id=13, post_type='img', title="who woudlve thought ... ", url="https://www.tvinsider.com/wp-content/uploads/2019/06/The-office-roy-jim-1-1014x570.jpg", post_likes=[oscar, angela, meredith, phyllis, andy, stanley, creed, toby])
    roy_post_img_5 = Post(
        user_id=13, post_type='img', title="throwback", url="https://s.yimg.com/ny/api/res/1.2/V9_l7TXk0SpKZtjIk_hBEg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MQ--/https://media.zenfs.com/en-US/homerun/mashable_watercooler_910/732a812aef2048fda6f01fa8d971bac7", post_likes=[ryan, dwight, roy, oscar, angela, meredith, phyllis, andy, stanley,])

    creed_post_text_1 = Post(
        user_id=14, post_type='text', title="cults ?", body="I've been involved in a number of cults, both as a leader and a follower. You have more fun as a follower. But you make more money as a leader.", post_likes=[michael, kelly, ryan, dwight])
    creed_post_quote_2 = Post(
        user_id=14, post_type='text', body="Later, Skater.", post_likes=[kevin, pam, jim, michael, kelly,])
    creed_post_img_3 = Post(
        user_id=14, post_type='img', title="about to turn 30 ", url="https://deadicatedfans.com/wp-content/uploads/2020/09/Creed-bratton-red-bull-quote.jpg", post_likes=[oscar, angela, meredith, phyllis, andy, stanley, creed, toby])
    creed_post_text_2 = Post(
        user_id=14, post_type='text', title="Anyone down to hang ", body=" We should hang out by the quarry and throw things down there.", post_likes=[kevin, pam, jim, michael, kelly, ryan, dwight, roy])
    creed_post_quote_1 = Post(
        user_id=14, post_type='text', body="I already won the lottery, I was born in the U-S of A, baby.", post_likes=[oscar, angela, meredith, phyllis, andy, stanley, creed, toby])
    creed_post_img_4 = Post(
        user_id=14, post_type='img', url="https://www.lifeandstylemag.com/wp-content/uploads/2016/04/creed-bratton-quotes-7.jpg?fit=800%2C635&quality=86&strip=all", post_likes=[oscar, angela, meredith, phyllis, andy, stanley, creed, toby])
    creed_post_img_5 = Post(
        user_id=14, post_type='img', title="creed", url="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F01%2Fthe-office-2000.jpg", post_likes=[ryan, dwight, roy, oscar, angela, meredith, phyllis, andy, stanley])

    toby_post_text_1 = Post(
        user_id=15, post_type='text', title="going to church today", body="Sunday church service, it's been a few years. The Big Guy and I...we've got some catching up to do.", post_likes=[oscar, angela, meredith, phyllis, andy, stanley, creed, toby])
    toby_post_img_3 = Post(
        user_id=15, post_type='img', title="._.", url="https://www.media3.hw-static.com/media/2016/04/paul-lieberstein-steve-carell-the-office-nbc-042916.jpg", post_likes=[phyllis, andy, stanley, creed, toby])
    toby_post_quote_1 = Post(
        user_id=15, post_type='text', body="What are you guys talking about? I have a daughter, how can I be a virgin?", post_likes=[kevin, pam, jim, michael, kelly, ryan, dwight, roy])
    toby_post_img_4 = Post(
        user_id=15, post_type='img', title="i swear i didnt do anything to michael ", url="https://i.pinimg.com/564x/66/32/38/663238d142ec585efac1afa4952f39fd.jpg", post_likes=[oscar, angela, meredith, phyllis, andy, stanley, creed, toby])
    toby_post_img_5 = Post(
        user_id=15, post_type='img', title="rare nice momement", url="https://tv-fanatic-res.cloudinary.com/iu/s--mJjB1SZL--/t_teaser_wide/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1371214175/stuck-with-toby.png", post_likes=[michael, kelly, ryan, dwight])

    michael_post_text_1 = Post(
        user_id=16, post_type='text', title="Stuff about me", body="Do I need to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked. But it's not like this compulsive need like my need to be praised.", post_likes=[ryan, dwight, roy, oscar, angela, meredith, phyllis, andy, stanley])
    michael_post_img_1 = Post(
        user_id=16, post_type='img', title="prison mike in the building here to scare you straigggghhhttt !!", url="https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/65792e0f-c14a-4501-8d8d-47d914d1ed73_500x359.png", post_likes=[oscar, angela, meredith, phyllis, andy, stanley, creed, toby])
    michael_post_img_2 = Post(
        user_id=16, post_type='img', title="worlds best boss", url="https://miro.medium.com/max/1396/1*njwXqsShWvK81ANQCMBevw.jpeg", post_likes=[phyllis, andy, stanley, creed, toby])
    michael_post_quote_2 = Post(
        user_id=16, post_type='text', body="I learned a while back that if I do not text 911, people do not return my calls. Um, but people always return my calls because they think that something horrible has happened.", post_likes=[oscar, angela, meredith, phyllis, andy, stanley, creed, toby])
    michael_post_img_3 = Post(
        user_id=16, post_type='img', title="throwback ", url="https://i.kym-cdn.com/entries/icons/original/000/031/257/truck.jpg", post_likes=[kevin, pam, jim, michael, kelly, ryan, dwight, roy])
    michael_post_text_2 = Post(
        user_id=16, post_type='text', title="PRISON MIKE", body="The worst thing about prison was the Dementors. They were flying all over the place and they were scary and they'd come down and they'd suck the soul out of your body and it hurt!", post_likes=[michael, kelly, ryan, dwight])
    michael_post_quote_1 = Post(
        user_id=16, post_type='text', body="I'm an early bird and I'm a night owl so I'm wise and I have worms.", post_likes=[phyllis, andy, stanley, creed, toby])
    michael_post_img_4 = Post(
        user_id=16, post_type='img', title="bleh toby ", url="https://i0.wp.com/writeonwithmissg.com/wp-content/uploads/2017/06/thief-of-joy-lol.jpg?resize=698%2C390", post_likes=[ryan, dwight, roy, oscar, angela, meredith, phyllis, andy, stanley])
    michael_post_img_5 = Post(
        user_id=16, post_type='img', title="true story", url="https://i.kym-cdn.com/photos/images/newsfeed/001/023/645/34d.png", post_likes=[kevin, pam, jim, michael, kelly, ryan, dwight, roy])

    db.session.add(kevin_post_text_1)
    db.session.add(kevin_post_text_2)
    db.session.add(kevin_post_img_1)
    db.session.add(kevin_post_img_2)
    db.session.add(kevin_post_quote_1)
    db.session.add(kevin_post_quote_2)
    db.session.add(kevin_post_img_3)
    db.session.add(kevin_post_img_4)
    db.session.add(kevin_post_img_5)

    db.session.add(phyllis_post_text_1)
    db.session.add(phyllis_post_text_2)
    db.session.add(phyllis_post_img_1)
    db.session.add(phyllis_post_img_2)
    db.session.add(phyllis_post_quote_1)
    db.session.add(phyllis_post_quote_2)
    db.session.add(phyllis_post_img_3)
    db.session.add(phyllis_post_img_4)
    db.session.add(phyllis_post_img_5)

    db.session.add(jim_post_text_1)
    db.session.add(jim_post_text_2)
    db.session.add(jim_post_img_1)
    db.session.add(jim_post_img_2)
    db.session.add(jim_post_quote_1)
    db.session.add(jim_post_quote_2)
    db.session.add(jim_post_img_3)
    db.session.add(jim_post_img_4)
    db.session.add(jim_post_img_5)

    db.session.add(pam_post_text_1)
    db.session.add(pam_post_text_2)
    db.session.add(pam_post_img_1)
    db.session.add(pam_post_img_2)
    db.session.add(pam_post_quote_1)
    db.session.add(pam_post_quote_2)
    db.session.add(pam_post_img_3)
    db.session.add(pam_post_img_4)
    db.session.add(pam_post_img_5)

    db.session.add(andy_post_text_1)
    db.session.add(andy_post_text_2)
    db.session.add(andy_post_img_1)
    db.session.add(andy_post_img_2)
    db.session.add(andy_post_quote_1)
    db.session.add(andy_post_quote_2)
    db.session.add(andy_post_img_3)
    db.session.add(andy_post_img_4)
    db.session.add(andy_post_img_5)

    db.session.add(oscar_post_text_1)
    db.session.add(oscar_post_text_2)
    db.session.add(oscar_post_img_1)
    db.session.add(oscar_post_img_2)
    db.session.add(oscar_post_quote_1)
    db.session.add(oscar_post_quote_2)
    db.session.add(oscar_post_img_3)
    db.session.add(oscar_post_img_4)
    db.session.add(oscar_post_img_5)

    db.session.add(meredith_post_img_1)
    db.session.add(meredith_post_img_2)
    db.session.add(meredith_post_img_3)
    db.session.add(meredith_post_img_4)
    db.session.add(meredith_post_img_5)

    db.session.add(kelly_post_text_1)
    db.session.add(kelly_post_text_2)
    db.session.add(kelly_post_img_1)
    db.session.add(kelly_post_img_2)
    db.session.add(kelly_post_quote_1)
    db.session.add(kelly_post_quote_2)
    db.session.add(kelly_post_img_3)
    db.session.add(kelly_post_img_4)
    db.session.add(kelly_post_img_5)

    db.session.add(angela_post_text_1)
    db.session.add(angela_post_text_2)
    db.session.add(angela_post_img_1)
    db.session.add(angela_post_img_2)
    db.session.add(angela_post_quote_1)
    db.session.add(angela_post_quote_2)
    db.session.add(angela_post_img_3)
    db.session.add(angela_post_img_4)
    db.session.add(angela_post_img_5)

    db.session.add(dwight_post_text_1)
    db.session.add(dwight_post_text_2)
    db.session.add(dwight_post_img_1)
    db.session.add(dwight_post_img_2)
    db.session.add(dwight_post_quote_1)
    db.session.add(dwight_post_quote_2)
    db.session.add(dwight_post_img_3)
    db.session.add(dwight_post_img_4)
    db.session.add(dwight_post_img_5)

    db.session.add(ryan_post_text_1)
    db.session.add(ryan_post_img_2)
    db.session.add(ryan_post_quote_2)
    db.session.add(ryan_post_img_3)
    db.session.add(ryan_post_img_4)
    db.session.add(ryan_post_img_5)

    db.session.add(roy_post_img_4)
    db.session.add(roy_post_img_5)

    db.session.add(creed_post_text_1)
    db.session.add(creed_post_text_2)
    db.session.add(creed_post_quote_1)
    db.session.add(creed_post_quote_2)
    db.session.add(creed_post_img_3)
    db.session.add(creed_post_img_4)
    db.session.add(creed_post_img_5)

    db.session.add(stanley_post_text_1)
    db.session.add(stanley_post_text_2)
    db.session.add(stanley_post_img_1)
    db.session.add(stanley_post_img_2)
    db.session.add(stanley_post_quote_1)
    db.session.add(stanley_post_quote_2)
    db.session.add(stanley_post_img_3)
    db.session.add(stanley_post_img_4)
    db.session.add(stanley_post_img_5)

    db.session.add(toby_post_text_1)
    db.session.add(toby_post_quote_1)
    db.session.add(toby_post_img_3)
    db.session.add(toby_post_img_4)
    db.session.add(toby_post_img_5)

    db.session.add(michael_post_text_1)
    db.session.add(michael_post_text_2)
    db.session.add(michael_post_img_1)
    db.session.add(michael_post_img_2)
    db.session.add(michael_post_quote_1)
    db.session.add(michael_post_quote_2)
    db.session.add(michael_post_img_3)
    db.session.add(michael_post_img_4)
    db.session.add(michael_post_img_5)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_posts():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.posts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM posts")

    db.session.commit()
