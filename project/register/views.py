from flask import Flask, render_template, request, redirect, url_for, flash
from register import register_bp
from util import util, queries
import re

@register_bp.route('/registration', methods=["GET", "POST"])
def registration():
    if request.method == 'GET':
        return render_template('register/registration.html')
    else:
        user_name = request.form.get('user_name')
        email = request.form.get('email')
        password = request.form.get('password')
        confirm_password = request.form.get('confirm_password')
        password_hash = util.hash_password(password)
        registration_time = util.get_current_time()
        if password != confirm_password:
            flash("Passwords do not match!")
            return render_template('register/registration.html')
        else:
            password_hash = util.hash_password(password)

        if not re.match(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$',email):
            flash("Email is not corect!")
            return render_template('register/registration.html')
        else:
            queries.add_user(user_name, email, password_hash,registration_time)
            return redirect(url_for('app.index'))

            