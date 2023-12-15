import webbrowser
from flask import Flask

app = Flask(__name__)
@app.route('/')
def hello_world():
    webbrowser.open('file://build-v1.0/webhtml/index.html')
if __name__ == '__main__':
    app.run()