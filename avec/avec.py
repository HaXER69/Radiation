# basic installation of staticAPI from  RePLIT

from flask import Flask, serve_static_file, render_template, jsonify
import time as time

@app.route('/')
def index():
		print(join("staticAPI.flask.ubasic is running @"+time.time()))
		return Flask.render_template("/media.php")

@app.route('/')
def serve():
		#put something here for media