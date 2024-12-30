const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
    "If you look at what you have in life, you'll always have more. - Oprah Winfrey",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa",
    "When you reach the end of your rope, tie a knot in it and hang on. - Franklin D. Roosevelt",
    "Always remember that you are absolutely unique. Just like everyone else. - Margaret Mead",
    "Don't judge each day by the harvest you reap but by the seeds that you plant. - Robert Louis Stevenson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn. - Benjamin Franklin",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
    "It is during our darkest moments that we must focus to see the light. - Aristotle",
    "Whoever is happy will make others happy too. - Anne Frank",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "You will face many defeats in life, but never let yourself be defeated. - Maya Angelou",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "Never let the fear of striking out keep you from playing the game. - Babe Ruth",
    "Life is either a daring adventure or nothing at all. - Helen Keller",
    "Many of life's failures are people who did not realize how close they were to success when they gave up. - Thomas Edison",
    "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "Life is really simple, but we insist on making it complicated. - Confucius",
    "May you live all the days of your life. - Jonathan Swift",
    "Life itself is the most wonderful fairy tale. - Hans Christian Andersen",
    "Do not let making a living prevent you from making a life. - John Wooden",
    "Life is ours to be spent, not to be saved. - D.H. Lawrence",
    "Keep smiling, because life is a beautiful thing and there's so much to smile about. - Marilyn Monroe",
    "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship. - Buddha",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
    "Turn your wounds into wisdom. - Oprah Winfrey",
    "The biggest adventure you can take is to live the life of your dreams. - Oprah Winfrey",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "Don't be distracted by criticism. Remember, the only taste of success some people get is to take a bite out of you. - Zig Ziglar",
    "Success seems to be connected with action. Successful people keep moving. They make mistakes but they don't quit. - Conrad Hilton",
    "In order to succeed, we must first believe that we can. - Nikos Kazantzakis",
    "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Don't let yesterday take up too much of today. - Will Rogers",
    "You learn more from failure than from success. Don't let it stop you. Failure builds character. - Unknown",
    "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
    "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you. - Steve Jobs",
    "People who are crazy enough to think they can change the world, are the ones who do. - Rob Siltanen",
    "Failure will never overtake me if my determination to succeed is strong enough. - Og Mandino",
    "Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk. That's the classic entrepreneur. - Mohnish Pabrai",
    "We may encounter many defeats but we must not be defeated. - Maya Angelou",
    "Knowing is not enough; we must apply. Wishing is not enough; we must do. - Johann Wolfgang Von Goethe",
    "Imagine your life is perfect in every respect; what would it look like? - Brian Tracy",
    "We generate fears while we sit. We overcome them by action. - Dr. Henry Link",
    "Whether you think you can or think you can't, you're right. - Henry Ford",
    "Security is mostly a superstition. Life is either a daring adventure or nothing. - Helen Keller",
    "The man who has confidence in himself gains the confidence of others. - Hasidic Proverb",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Creativity is intelligence having fun. - Albert Einstein",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. - Winston Churchill",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "To see what is right and not do it is a lack of courage. - Confucius",
    "Reading is to the mind, as exercise is to the body. - Brian Tracy",
    "Fake it until you make it! Act as if you had all the confidence you require until it becomes your reality. - Brian Tracy",
    "The future depends on what you do today. - Mahatma Gandhi",
    "Life is like a camera. Focus on what's important, capture the good times, develop from the negatives, and if things don't work out, take another shot. - Unknown",
    "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success. - Dale Carnegie",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "It is our choices that show what we truly are, far more than our abilities. - J.K. Rowling",
    "Happiness is not by chance, but by choice. - Jim Rohn",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "Keep going. Everything you need will come to you at the perfect time. - Unknown",
    "Opportunities don't happen. You create them. - Chris Grosser",
    "If you want to achieve greatness stop asking for permission. - Anonymous",
    "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact. - William James",
    "Action is the foundational key to all success. - Pablo Picasso",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
    "A journey of a thousand miles begins with a single step. - Lao Tzu"
  ];

function quoteGenerator(){

    const background = document.querySelector('body');
    let index1 = Math.floor(Math.random()*256);
    let index2 = Math.floor(Math.random()*256);
    let index3 = Math.floor(Math.random()*256);
    let index4 = Math.random();
    background.style.backgroundColor = `rgba(${index1},${index2},${index3},${index4})` 

    let index = Math.floor(Math.random()*quotes.length);  
    const element = document.querySelector('p');
    element.textContent = quotes[index]
}

setInterval(quoteGenerator,1500)    
