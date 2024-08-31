from flask import app, Flask, render_template

app = Flask(__name__)
@app.route('/')

def home():
    return render_template('form.html')

@app.route('/login' ,methods=['POST'])
def form():
    return render_template('form.html', message="Welcome to Flask! ")

if __name__ == '__main__':
    app.run(debug=True)



