from flask import Flask, redirect, url_for, render_template, request, session, flash
from datetime import timedelta
from flask_sqlalchemy import SQLAlchemy
from articles_text import articles

app = Flask(__name__)
app.secret_key = "hello"
app.permanent_session_lifetime = timedelta(minutes=5)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///users.sqlite3"

@app.route('/')
def home():
    #if "user" in session and "password" in session:
    #    return render_template("home.html")
    #else:
    #    return redirect(url_for("login"))
    return render_template("home.html")
    
@app.route('/login',methods=["POST","GET"])
def login():
    if request.method == "POST":
        user = request.form["nm"]
        password = request.form["pw"]
        session["user"] = user
        session["password"] = password
        return redirect(url_for("home"))
    else:
        return render_template("login.html")
    
@app.route("/logout")
def logout():
    session.pop("user", None)
    session.pop("password", None)
    return redirect(url_for("login"))

@app.route('/houses')
def houses():
    mode = request.args.get('mode', 'buy')  # Default to 'buy' if no mode is provided
    if mode == 'buy':
        # Render the Buy houses page
        return render_template('buy_houses.html')
    elif mode == 'rent':
        # Render the Rent houses page
        return render_template('rent_houses.html')
    else:
        return "Invalid mode", 400
    

@app.route('/article/<int:index>')
def article(index):
    if 0 <= index < len(articles):
        article_data = articles[index]
        return render_template('article_template.html', **article_data)
    else:
        return "Článek nenalezen", 404
    

@app.route("/westerlands")
def westerlands():
    #if "user" in session and "password" in session:
    #    return render_template("home.html")
    #else:
    #    return redirect(url_for("login"))
    return render_template("westerlands.html")

@app.route("/crownlands")
def crownlands():
    #if "user" in session and "password" in session:
    #    return render_template("home.html")
    #else:
    #    return redirect(url_for("login"))
    return render_template("crownlands.html")



if __name__ == "__main__":
    app.run(port=5000,debug=True,host='0.0.0.0')